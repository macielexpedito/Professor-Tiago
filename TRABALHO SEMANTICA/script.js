const input = document.querySelector('input');
const buscar = document.querySelector('header button');
const url1 = 'https://rickandmortyapi.com/api/character/';
const url2 = 'https://rickandmortyapi.com/api/character/?name=';

const img = document.querySelector('img');
const nome = document.querySelector('.nome');
const genero = document.querySelector('.genero');
const status = document.querySelector('.status');
const especie = document.querySelector('.especie');
const origem = document.querySelector('.origem');

const voltar = document.querySelector('.voltar');
const avancar = document.querySelector('.avancar');

let personagens = [];
let indice = 0;

buscar.addEventListener('click', buscarPersonagem);

async function buscarPersonagem() {

    const valor = input.value;

    console.log('Valor digitado:', valor);

    try {

    let resposta;

    if (!isNaN(valor)) {

        resposta = await fetch(url1 + valor);

        const dados = await resposta.json();

        personagens = [dados];

    } else {

        resposta = await fetch(url2 + valor);

        const dados = await resposta.json();

        personagens = dados.resultados;
    }

    indice = 0;

    mostrar();
}
         catch (error) {
            alert('Personagem não encontrado. Por favor, tente novamente.');
            console.error('Erro ao buscar personagem:', error);
    }
}
function mostrar() {

    const personagem = personagens[indice];

    console.log(personagem)

    nome.innerHTML = `Nome: ${personagem.name}`;
    genero.innerHTML = `Gênero: ${personagem.gender}`;
    status.innerHTML = `Status: ${personagem.status}`;
    especie.innerHTML = `Espécie: ${personagem.species}`;
    origem.innerHTML = `Origem: ${personagem.origin.name}`;
    img.src = personagem.image;
}
