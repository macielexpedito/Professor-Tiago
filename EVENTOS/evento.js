const btn = document.querySelector("#btn");

 document.querySelector ("form").addEventListener("submit", (evento)=>{
        evento.preventDefault();
    });

btn.addEventListener("click", (evento) => {
   console.log(evento.type);});