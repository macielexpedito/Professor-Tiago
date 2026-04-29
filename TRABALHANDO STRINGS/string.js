let nome = "Pedro";

console.log(nome[2]);
console.log(nome.length);

let maiusculo = nome.toUpperCase();
console.log(maiusculo);
console.log(nome);

/*
let emailDigitado = "   Caique@GooGle.coM    ";
console.log(emailDigitado.length);

let emailCadastrado = "caique@google.com";
console.log(emailCadastrado.length);

let emailSemEspaco = emailDigitado.trim();
console.log(emailSemEspaco);

let emailNormalizado = emailSemEspaco.toLowerCase();
console.log(emailNormalizado);

let emailNormalizado = emailDigitado.trim().toLowerCase();
console.log(emailNormalizado);

let pedido = "7";
let pedidoNormalizado = pedido.padStart(5, "X").padEnd(8, "Y");
console.log(pedidoNormalizado);


let nomeArquivo = "relatorio_2026.xls";

let arquivoRecebido = nomeArquivo.includes(".xls");
console.log(arquivoRecebido);


let frase = "O Linux manda!";
let palavras = frase.split(" ");
console.log(palavras);
*/

let url = "http://www.google.com";
console.log(url.length);

let dominio = url.slice(11, 22);
console.log(dominio);