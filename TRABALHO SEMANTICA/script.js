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

const botaoVoltar = document.querySelector('.voltar');
const botaoAvancar = document.querySelector('.avancar');

let personagens = [];
let indice = 0;
let tipoBusca = ''; 

buscar.addEventListener('click', buscarPersonagem);
botaoVoltar.addEventListener('click', voltar);
botaoAvancar.addEventListener('click', avançar);

async function buscarPersonagem() {
    const valor = input.value.trim();

    console.log('Valor digitado:', valor);

    try {
        let resposta;

        if (!isNaN(valor) && valor !== '') {
            tipoBusca = 'id'; 
            resposta = await fetch(url1 + valor);
            const dados = await resposta.json();
            
            if (dados.error) {
                alert('Personagem não encontrado. Por favor, tente novamente.');
                return; 
            }

            personagens = [dados];
        } else {
            tipoBusca = 'nome'; 
            resposta = await fetch(url2 + valor);
            const dados = await resposta.json();

            if (dados.results) {
                personagens = dados.results; 
            } else {
                alert('Personagem não encontrado. Por favor, tente novamente.');
                return;   
            }
        }

        indice = 0;
        mostrar();
    } catch (error) {
        alert('Personagem não encontrado. Por favor, tente novamente.');
        console.error('Erro ao buscar personagem:', error);
    }
}

function mostrar() {
    const personagem = personagens[indice];

    console.log(personagem);

    nome.innerHTML = `Nome: ${personagem.name}`;
    genero.innerHTML = `Genero: ${personagem.gender}`;
    status.innerHTML = `Status: ${personagem.status}`;
    especie.innerHTML = `Espécie: ${personagem.species}`;
    origem.innerHTML = `Origem: ${personagem.origin.name}`;
    img.src = personagem.image;
}

async function voltar() {
    if (tipoBusca === 'id') {
        let idAtual = parseInt(input.value);
        if (idAtual > 1) {
            input.value = idAtual - 1;
            await buscarPersonagem();
        }
    } else {
        if (indice > 0) {
            indice--;
            mostrar();
            console.log('voltou', indice);
        }   
    }
}

async function avançar() {
    if (tipoBusca === 'id') {
        let idAtual = parseInt(input.value);
        if (!isNaN(idAtual)) {
            input.value = idAtual + 1;
            await buscarPersonagem();
        }
    } else {
        if (indice < personagens.length - 1) {
            indice++;
            mostrar();
            console.log('avançou', indice);
        }   
    }
}