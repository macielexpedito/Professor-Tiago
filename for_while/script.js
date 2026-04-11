// // for (let contador = 10; contador >= 0; contador--) {
// //     console.log("Item " + contador);
// // }

// const frutas = ["banana", "melão", "abacaxi", "pera","uva"];

// //console.log(frutas.length);

//  const cache = frutas.length;

// // for (let contador = 0; contador <= cache; contador++) {
// //     console.log(frutas[contador]);
    
// // }

// // for (const fruta of frutas) {
// //     console.log(fruta);
// // }

// // for (let contador = 0;contador< cache; contador++) {
// //     if (contador % 2 == 0) {
// //          console.log(frutas[contador]);
// //     }
// // }

// // const cliente = {
// //     nome: "João",
// //     idade: 30,
// //     cidade: "osasco",
// //     };
// //     for (const dados in cliente) {
// //         console.log(dados);
// //         console.log(`${dados}: ${cliente[dados]}`);
// //     }

// let contador = 10;
// while (contador >= 0) {
//     console.log( contador);
//     contador--;
// }

// console.log("OK");
// let entradaUsuario = +prompt("Digite um número:");
// console.log(entradaUsuario);

// let valorDigitado;
// while (entradaUsuario != 2 && entradaUsuario != 4 && entradaUsuario != 6) {
// console.log((entradaUsuario = +prompt("Digite um número:")));
// }

let saldo = 10000;

let saque = +prompt("Digite o valor do saque: ");


while (saldo >= saque) {
    saldo -= saque;
    console.log("saque de ${saque} realizado com sucesso");
    console.log("saldo atual ${saldo}");
}

