// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let lista = [];
function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    lista.push(amigo);
    let añadir = document.getElementById('listaAmigos');
    añadir.innerHTML += `<li>${amigo}</li>`;
    console.log(lista)
    limpiar();
}

function limpiar() {
    let amigo = document.getElementById('amigo').value = '';
}

function sortearAmigo(){
    nrandom = Math.floor(Math.random()*lista.length);
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es ${lista[nrandom]}</li>`;
}