import {produtos} from "./produtos.js";

const elemento = {
    btnCurva: document.querySelectorAll(".btnCurva"),
    conteinerDisplay: document.querySelector("#conteinerDisplay"),
};

console.log(elemento.conteinerDisplay);

elemento.btnCurva.forEach((item) =>{
    item.addEventListener("click", (evento) => {
        listarProdutosPorCurvaABC(evento.target.id);
    });
});

function listarProdutosPorCurvaABC(curva) {
    let produtosFiltrados =  produtos.filter((produto) => produto.curva_abc === curva);
    //console.table(produtosFiltrados);
    inserirDadosCurvaABC(produtosFiltrados);
}

function inserirDadosCurvaABC(dados) {
    // cria um objeto para gerar os paragrafos (Ainda sem dados - PURO)
    let colunasGrid = {
        id: document.createElement("p"),
        nome: document.createElement("p"),
        preco_venda: document.createElement("p"),
        estoque: document.createElement("p"),
    };

    //Definindo o valor que cada paragrafo terá (Exemplo: ID, NOME, PREÇO VENDA, ESTOQUE)
    colunasGrid.id.innerText = "ID";
    colunasGrid.nome.innerText = "NOME";
    colunasGrid.preco_venda.innerText = "PREÇO VENDA";
    colunasGrid.estoque.innerText = "ESTOQUE";
    elemento.conteinerDisplay.append(colunasGrid.id, colunasGrid.nome, colunasGrid.preco_venda, colunasGrid.estoque);
}   