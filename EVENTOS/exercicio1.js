const elemento= {
    input: document.querySelector("#texto"),
    containerExercicio:document.querySelector("#containerExercicio"),
};

console.log(elemento);
elemento.input.addEventListener("input", (evento)=> {
    console.log(evento.currentTarget.value);
    
    elemento.containerExercicio.innerText = evento.currentTarget.value;
});