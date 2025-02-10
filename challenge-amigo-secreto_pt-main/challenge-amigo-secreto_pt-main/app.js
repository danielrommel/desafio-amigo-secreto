// CRIEI O PROJETO CONFORME AS AULAS QUE ESTUDEI
// GOSTO DE CRIAR AS VARIAVEIS NAS PRIMEIRAS LINHAS DE CODIGO, POR QUESTAO DE GOSTO E ORGANIZAÇÃO
// PROCUREI DEIXAR MEU CODIGO BEM DOCUMENTADO

// VARIAVEIS COMUNS //
let nome;
let tagLista;
let li;
let index;
let indice;

// VARIAVEIS PARA LISTAS //
let listaNaoDuplica;
let listaAmigos;

// DEFININDO AS VARIAVEIS COMO LISTAS //
listaAmigos = [];
listaNaoDuplica = [];

// FUNÇÕES //

// FUNÇÃO PARA BOTAO DO HTML CHAMADO "adicionar"//

// AO CLICAR NO BOTAO, A VARIAVEL "nome" VAI RECEBER UM VALOR, CHAMANDO O ELEMENTO INPUT DO HTML
// DEPOIS A CONDICIONAL VAI VERIFICAR SE O USUARIO DEIXOU O INPUT EM BRANCO E APERTOU O BOTAO
// SE SIM O SISTEMA VAI INFORMAR UM ALERTA DE ERRO, PARA ELE INSERIR UM VALOR
// SE NAO ELE VAI VERIFICAR SE O VALOR PASSADO NO INPUT JA FOI PASSADO ANTES
// SE SIM ELE VAI INFORMAR OUTRO ALERTA DE ERRO, DIZENDO USUARIO JA EXISTE E PEDE OUTRO
// AGORA SE NAO ENTROU EM NENHUMA DAS DUAS PRIMEIRAS CONDIÇÕES, ELE VAI PEGAR O VALOR DA VARIAVEL NOME
// E VAI ENVIAR PARA DENTRO DA LISTA "listaAmigos"
// DEPOIS VAI ESVAZIAR A VARIAVEL "nome" E VAI EXECUTAR A FUNÇÃO "exibeLista"
// A FUNÇÃO EXIBE LISTA ESTA CRIADA MAIS A FRENTE

function adicionar(){
    nome = document.querySelector("input").value;
    if(nome == ""){
        alert("Erro, valor vazio. Tente inserir um valor!");
    } else if (listaAmigos.includes(nome)){
        alert("Erro, valor já existente. Tente inserir um diferente!");        
    } else{
        listaAmigos.push(nome);
        nome = document.querySelector("input");
        nome.value = "";
        exibeLista();
    }
}
    // FUNÇÃO EXIBE LISTA //

    // A VARIAVEL "tagLista" IRA FAZER A REFERENCIA DO ELEMENTO HTML PARA EXIBIR VALORES
    // PRIMEIRAMENTE ELE VAI ESVAZIAR A LISTA, POIS SEMPRE QUE ELE TIVER UMA LISTA COM ALGUEM
    // ELE VAI ATUALIZAR COM OS NOVOS NOMES ADICIONADOS PARA EXIBIR E NAO REPETIR A LISTA ANTIGA
    // DEPOIS ELE VAI USAR A FUNÇÃO "forEach" QUE IRA USAR "nomeAmigo" PARA PERCORRER CADA MEMRBO
    // DA "listaAmigos"
    // E MOSTRAR NO ELEMENTO HTML, CADA ELEMENTO LI SERÁ INCLUSO DENTRO DA LISTA UL DO HTML 
    function exibeLista(){
        tagLista = document.getElementById("listaAmigos");
        tagLista.innerHTML = "";

        listaAmigos.forEach(nomeAmigo => {
            li = document.createElement("li");
            li.textContent = nomeAmigo;
            tagLista.appendChild(li);
        })
    }
    // FUNÇÃO GERAR NUMERO ALEATORIO //

    // ESSA FUNÇÃO IRA ATRIBUIR UM VALOR ALEATORIO PARA A VARIAVEL INDICE, RETORNANDO INDICE
    // PARA QUEM CHAMAR A FUNÇÃO
    function gerarNumeroAleatorio(){
        indice = parseInt(Math.random() * listaAmigos.length);
        return indice;
    }
    // FUNÇÃO PARA BOTAO SORTEAR AMIGO //

    // QUANDO APERTAR O BOTAO SERÁ VERIFICADO SE FOI ADICIONADO ALGUM MEMBRO NA "listaAmigos"
    // SE FOR MENOR OU IGUAL A 0, SIGNIFICA QUE N FOI ADICIONADO NINGUEM, ENTAO FARA UM ALERTA
    // INSIRA PARTICIPANTES E ENCERRARÁ A EXECUÇÃO
    // SE NAO, VERIFICARÁ SE VALOR DA LISTA CRIADA "listaNaoDuplica" É IGUAL AO VALOR DA "listaAmigos" -1
    // SE SIM A VARIAVEL "index" IRÁ RECEBER VALOR DA FUNÇÃO "gerarNumeroAleatorio"
    // ENQUANTO O VALOR DE "index" TIVER DENTRO DE "listaNaoDuplica" index FICARÁ CHAMANDO O VALOR DA
    // FUNÇÃO "gerarNumeroAleatorio"
    // QUANDO FOR VALOR DIFERENTE IRÁ MOSTRAR UM ALERTA MOSTRANDO O ULTIMO AMIGO SORTEADO
    // E "index" VAI ENVIAR O VALOR PARA "listaNaoDuplica" e APAGAR A LISTA HTML
    // E MOSTRAR EM SEGUIDA OUTRO UM ALERTA DE TODOS OS AMIGOS FORAM SORTEADOS, REINICIAR
    // DEPOIS A "listaNaoDuplica" SERÁ ZERADA E "listaAmigos" TAMBÉM SERÁ ZERADA
    // SE O SISTEMA NAO ENTRAR NAS PRIMEIRAS CONDIÇÕES ELE ENTRA NA ULTIMA ONDE O "index" RECEBE VALOR 
    // DE FUNÇÃO "gerarNumeroAleatorio" E ENQUANTO "listaNaoDuplica" TIVER VALOR DO "index"
    // "index" IRÁ RECEBER OUTRO VALOR ALEATORIO ATÉ SER DIFERENTE DO QUE JÁ TEM
    function sortearAmigo(){
        if (listaAmigos.length <= 0){
        alert("Insira participantes");
        return;
    }
    if (listaNaoDuplica.length == listaAmigos.length - 1) {
        index = gerarNumeroAleatorio();
        while (listaNaoDuplica.includes(index)) {
            index = gerarNumeroAleatorio();
        }
        alert(`Último amigo sorteado: ${listaAmigos[index]}`);
        console.log(listaAmigos[index]);
        listaNaoDuplica.push(index);
        tagLista = document.getElementById("listaAmigos");
        tagLista.innerHTML = "";
        alert("Todos os amigos foram sorteados! Reiniciando a lista...");
        listaNaoDuplica = [];
        listaAmigos = [];
        // return;
    } else {
        index = gerarNumeroAleatorio();
        while (listaNaoDuplica.includes(index)) {
        index = gerarNumeroAleatorio();
    }
    // APOS RECEBER UM VALOR DIFERENTE, O "index" VAI ENVIAR VALOR A "listaNaoDuplica"
    // E VAI ALERTAR QUAL FOI O AMIGO SORTEADO
    listaNaoDuplica.push(index);
    alert(`Amigo sorteado: ${listaAmigos[index]}`);
    console.log(listaAmigos[index]);
    }
    
}