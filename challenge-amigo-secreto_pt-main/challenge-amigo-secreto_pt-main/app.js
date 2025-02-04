// VARIAVEIS
let nome;
let listaAmigos;
let elementLista;
let li;

// valorSorteado = parseInt(Math.random() * listaAmigos + 1)
listaAmigos = [];

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
        exibelista();
    }
}
    function exibelista(){
        elementLista = document.getElementById("listaAmigos");
        elementLista.innerHTML = "";

        listaAmigos.forEach(nomeAmigo => {
            li = document.createElement("li");
            li.textContent = nomeAmigo;
            elementLista.appendChild(li);
        })
    }


// FUNCOES
// adicionarnomes;
// validarentrada;
// botaoadicionar;
// exibirnomes;
// botaosortear;
// mostrarresultado;
// CONDICOES