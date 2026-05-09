const button = document.querySelector('button');
const body = document.querySelector('body');
const div = document.querySelector('div');
button.addEventListener('click', () => {
    body.classList.toggle("botao-dinamico");
    div.classList.toggle("ocultar-elemento");

    if (div.classList.contains("ocultar-elemento")) {
        alert("O elemento foi ocultado!");
    }

});