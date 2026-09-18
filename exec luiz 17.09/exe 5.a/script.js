// Arrays paralelos com informações dos estados da Região Sul

const siglas = ["PR", "RS", "SC"];

const capitais = [
    "Curitiba",
    "Porto Alegre",
    "Florianópolis"
];

const areas = [
    "199.298,981 km²",
    "281.707,151 km²",
    "95.730,921 km²"
];

const populacoes = [
    "11.444.380 hab.",
    "10.882.965 hab.",
    "7.610.361 hab."
];

const bandeiras = [
    "https://upload.wikimedia.org/wikipedia/commons/1/1e/Bandeira_do_Paran%C3%A1.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/63/Bandeira_do_Rio_Grande_do_Sul.svg",
    "https://upload.wikimedia.org/wikipedia/commons/1/1a/Bandeira_de_Santa_Catarina.svg"
];

// Mapeamento dos elementos da página

const selectEstados = document.getElementById("selectEstados");
const btnDetalhes = document.getElementById("btnDetalhes");

const divCapital = document.getElementById("divCapital");
const divArea = document.getElementById("divArea");
const divPopulacao = document.getElementById("divPopulacao");
const divBandeira = document.getElementById("divBandeira");

// Evento do botão

btnDetalhes.addEventListener("click", function () {

    // Obtém o índice do estado selecionado
    const index = selectEstados.value;

    // Preenche as informações
    divCapital.textContent = capitais[index];
    divArea.textContent = areas[index];
    divPopulacao.textContent = populacoes[index];

    // Exibe a bandeira
    divBandeira.innerHTML =
        `<img src="${bandeiras[index]}" 
        alt="Bandeira do estado ${siglas[index]}">`;
});
