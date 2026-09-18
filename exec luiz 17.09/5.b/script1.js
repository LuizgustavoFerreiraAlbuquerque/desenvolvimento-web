// ==========================================
// DADOS DOS PACIENTES
// ==========================================

const nomes = [
    "Ana Souza",
    "Carlos Oliveira",
    "Mariana Santos",
    "João Pereira",
    "Fernanda Lima"
];

const cpfs = [
    "123.456.789-00",
    "234.567.890-11",
    "345.678.901-22",
    "456.789.012-33",
    "567.890.123-44"
];

const idades = [
    "28 anos",
    "35 anos",
    "42 anos",
    "51 anos",
    "30 anos"
];

const telefones = [
    "(27) 99999-1111",
    "(31) 98888-2222",
    "(21) 97777-3333",
    "(11) 96666-4444",
    "(27) 95555-5555"
];

const consultas = [
    "10/09/2026",
    "05/09/2026",
    "12/09/2026",
    "01/09/2026",
    "15/09/2026"
];


// ==========================================
// ELEMENTOS DO HTML
// ==========================================

const selectPacientes =
    document.getElementById("selectPacientes");

const btnDetalhes =
    document.getElementById("btnDetalhes");

const btnAdicionar =
    document.getElementById("btnAdicionar");


// Informações

const divCpf =
    document.getElementById("divCpf");

const divIdade =
    document.getElementById("divIdade");

const divTelefone =
    document.getElementById("divTelefone");

const divConsulta =
    document.getElementById("divConsulta");


// Campos do cadastro

const inputNome =
    document.getElementById("inputNome");

const inputCpf =
    document.getElementById("inputCpf");

const inputIdade =
    document.getElementById("inputIdade");

const inputTelefone =
    document.getElementById("inputTelefone");

const inputConsulta =
    document.getElementById("inputConsulta");


// ==========================================
// BOTÃO DETALHES
// ==========================================

btnDetalhes.addEventListener("click", function () {

    // Pega o índice do paciente selecionado

    const index = selectPacientes.value;


    // Mostra os dados do paciente

    divCpf.textContent = cpfs[index];

    divIdade.textContent = idades[index];

    divTelefone.textContent = telefones[index];

    divConsulta.textContent = consultas[index];

});


// ==========================================
// BOTÃO ADICIONAR PACIENTE
// ==========================================

btnAdicionar.addEventListener("click", function () {

    // Pega os valores digitados

    const nome = inputNome.value.trim();

    const cpf = inputCpf.value.trim();

    const idade = inputIdade.value.trim();

    const telefone = inputTelefone.value.trim();

    const consulta = inputConsulta.value.trim();


    // Verifica se todos os campos foram preenchidos

    if (
        nome === "" ||
        cpf === "" ||
        idade === "" ||
        telefone === "" ||
        consulta === ""
    ) {

        alert("Preencha todos os campos!");

        return;
    }


    // ======================================
    // ADICIONA OS DADOS NOS ARRAYS
    // ======================================

    nomes.push(nome);

    cpfs.push(cpf);

    idades.push(idade + " anos");

    telefones.push(telefone);

    consultas.push(consulta);


    // ======================================
    // CRIA UM NOVO OPTION NA LISTA
    // ======================================

    const novaOpcao =
        document.createElement("option");


    // O índice será o último elemento
    // adicionado ao array

    novaOpcao.value = nomes.length - 1;

    novaOpcao.textContent = nome;


    // Adiciona o paciente na lista

    selectPacientes.appendChild(novaOpcao);


    // ======================================
    // SELECIONA O NOVO PACIENTE
    // ======================================

    selectPacientes.value =
        nomes.length - 1;


    // ======================================
    // LIMPA OS CAMPOS
    // ======================================

    inputNome.value = "";

    inputCpf.value = "";

    inputIdade.value = "";

    inputTelefone.value = "";

    inputConsulta.value = "";


    // Mensagem

    alert("Paciente adicionado com sucesso!");

});