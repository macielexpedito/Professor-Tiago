const input = document.querySelector('input');
const buscar = document.querySelector('header button');
const url1 = 'https://rickandmortyapi.com/api/character/';
const img = document.querySelector('img');
const url2 = 'https://rickandmortyapi.com/api/character/?name=';
const nome = document.querySelector('.nome');
const genero = document.querySelector('.genero');
const status = document.querySelector('.status');
const especie = document.querySelector('.especie');
const origem = document.querySelector('.origem');

const voltar = document.querySelectorAll('main button')[0];
const avancar = document.querySelectorAll('main button')[1];

let personagens = []; /* Array para armazenar os personagens retornados pela API */
let indice = 0; /* Índice para controlar a navegação entre os personagens */

buscar.addEventListener('click', buscarPersonagem); /* Evento de clique para buscar o personagem */

async function buscarPersonagem() {
    const valor = input.value; /* Obtém o valor do input */

        try { /* Tenta buscar os personagens na API */

            let resposta; /* Variável para armazenar a resposta da API */

            if(isNaN(valor)) { /* Verifica se o valor é um número ou não */ 
                resposta = await fetch(url1 + valor); /* Se for um número, busca pelo ID do personagem */

                const dados = await resposta.json(); /* Converte a resposta para JSON */
                personagens = [dados]; /* Armazena o personagem encontrado no array */
            }



    
    

