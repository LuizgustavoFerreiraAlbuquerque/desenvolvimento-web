// ==========================================
// PACIENTES ARMAZENADOS EM MEMÓRIA
// ==========================================

const pacientes = [

    {
        nome: "Ana Souza",
        cpf: "123.456.789-00",
        idade: "28 anos",
        telefone: "(27) 99999-1111",
        consulta: "10/09/2026"
    },

    {
        nome: "Carlos Oliveira",
        cpf: "234.567.890-11",
        idade: "35 anos",
        telefone: "(31) 98888-2222",
        consulta: "05/09/2026"
    },

    {
        nome: "Mariana Santos",
        cpf: "345.678.901-22",
        idade: "42 anos",
        telefone: "(21) 97777-3333",
        consulta: "12/09/2026"
    },

    {
        nome: "João Pereira",
        cpf: "456.789.012-33",
        idade: "51 anos",
        telefone: "(11) 96666-4444",
        consulta: "01/09/2026"
    },

    {
        nome: "Fernanda Lima",
        cpf: "567.890.123-44",
        idade: "30 anos",
        telefone: "(27) 95555-5555",
        consulta: "15/09/2026"
    }

];


// ==========================================
// ELEMENTOS DA DOM
// ==========================================

const selectPacientes =
    document.getElementById("selectPacientes");

const btnDetalhes =
    document.getElementById("btnDetalhes");

const btnAdicionar =
    document.getElementById("btnAdicionar");

const divCpf =
    document.getElementById("divCpf");

const divIdade =
    document.getElementById("divIdade");

const divTelefone =
    document.getElementById("divTelefone");

const divConsulta =
    document.getElementById("divConsulta");


// ==========================================
// ELEMENTOS DA MINI ABA
// ==========================================

const modalCadastro =
    document.getElementById("modalCadastro");

const btnSalvar =
    document.getElementById("btnSalvar");

const btnFechar =
    document.getElementById("btnFechar");

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

btnDetalhes.addEventListener("click", function() {

    const index = selectPacientes.value;

    const paciente = pacientes[index];

    if (paciente) {

        divCpf.textContent =
            paciente.cpf;

        divIdade.textContent =
            paciente.idade;

        divTelefone.textContent =
            paciente.telefone;

        divConsulta.textContent =
            paciente.consulta;

    }

});


// ==========================================
// BOTÃO ADICIONAR
// ==========================================

btnAdicionar.addEventListener("click", function() {

    modalCadastro.style.display = "flex";

});


// ==========================================
// BOTÃO FECHAR
// ==========================================

btnFechar.addEventListener("click", function() {

    modalCadastro.style.display = "none";

});


// ==========================================
// BOTÃO SALVAR
// ==========================================

btnSalvar.addEventListener("click", function() {

    const nome =
        inputNome.value.trim();

    const cpf =
        inputCpf.value.trim();

    const idade =
        inputIdade.value.trim();

    const telefone =
        inputTelefone.value.trim();

    const consulta =
        inputConsulta.value.trim();


    // Verifica se todos os campos
    // foram preenchidos

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
    // CRIA O OBJETO DO NOVO PACIENTE
    // ======================================

    const novoPaciente = {

        nome: nome,

        cpf: cpf,

        idade: idade + " anos",

        telefone: telefone,

        consulta: consulta

    };


    // ======================================
    // ARMAZENA EM MEMÓRIA
    // ======================================

    pacientes.push(novoPaciente);


    // ======================================
    // ADICIONA NA LISTA
    // ======================================

    const novaOpcao =
        document.createElement("option");

    novaOpcao.value =
        pacientes.length - 1;

    novaOpcao.textContent =
        novoPaciente.nome;

    selectPacientes.appendChild(novaOpcao);


    // Seleciona o novo paciente

    selectPacientes.value =
        pacientes.length - 1;


    // ======================================
    // LIMPA OS CAMPOS
    // ======================================

    inputNome.value = "";

    inputCpf.value = "";

    inputIdade.value = "";

    inputTelefone.value = "";

    inputConsulta.value = "";


    // ======================================
    // FECHA A MINI ABA
    // ======================================

    modalCadastro.style.display = "none";


    alert("Paciente adicionado com sucesso!");

});
