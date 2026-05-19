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

let personagens = [];
let indice = 0;

