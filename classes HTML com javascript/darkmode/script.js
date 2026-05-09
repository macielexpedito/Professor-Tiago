const elemento = {
    body: document.querySelector('body'),
    h1: document.querySelector('h1'),
    button: document.querySelector('button')
};

 elemento.button.addEventListener('click', () => {     
    elemento.body.classList.toggle('dark-mode');
    elemento.button.classList.toggle('dark-mode');

    if(elemento.body.classList.contains('dark-mode')) {
        elemento.h1.innerText = 'Modo escuro ativado';
        elemento.button.innerText = 'Modo Claro';
    } else {
        elemento.h1.innerText = 'Modo escuro desativado';
        elemento.button.innerText = 'Modo Escuro';
    }
 });
