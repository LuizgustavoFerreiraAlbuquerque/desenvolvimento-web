const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

const arquivoJSON = path.join(__dirname, "estados.json");

// Criar o JSON caso ele ainda não exista
if (!fs.existsSync(arquivoJSON)) {
    const dadosIniciais = {
        siglas: ["ES", "MG", "RJ", "SP"],
        capitais: ["Vitória", "Belo Horizonte", "Rio de Janeiro", "São Paulo"],
        areas: [
            "46.074,447 km²",
            "586.521,121 km²",
            "43.750,423 km²",
            "248.219,481 km²"
        ],
        populacoes: [
            "3.833.712 hab.",
            "20.538.718 hab.",
            "16.054.524 hab.",
            "44.411.238 hab."
        ],
        bandeiras: [
            "https://upload.wikimedia.org/wikipedia/commons/4/43/Bandeira_do_Esp%C3%ADrito_Santo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/f/f4/Bandeira_de_Minas_Gerais.svg",
            "https://upload.wikimedia.org/wikipedia/commons/7/73/Bandeira_do_estado_do_Rio_de_Janeiro.svg",
            "https://upload.wikimedia.org/wikipedia/commons/2/2b/Bandeira_do_estado_de_S%C3%A3o_Paulo.svg"
        ]
    };

    fs.writeFileSync(
        arquivoJSON,
        JSON.stringify(dadosIniciais, null, 4),
        "utf8"
    );
}

// Buscar os estados
app.get("/api/estados", (req, res) => {
    try {
        const dados = JSON.parse(fs.readFileSync(arquivoJSON, "utf8"));
        res.json(dados);
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao ler o arquivo JSON." });
    }
});

// Salvar novo estado
app.post("/api/estados", (req, res) => {
    try {
        const dados = JSON.parse(fs.readFileSync(arquivoJSON, "utf8"));

        const { sigla, capital, area, populacao, bandeira } = req.body;

        dados.siglas.push(sigla);
        dados.capitais.push(capital);
        dados.areas.push(area);
        dados.populacoes.push(populacao);
        dados.bandeiras.push(bandeira);

        fs.writeFileSync(
            arquivoJSON,
            JSON.stringify(dados, null, 4),
            "utf8"
        );

        res.json({ mensagem: "Estado salvo com sucesso!" });
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao salvar o estado." });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});