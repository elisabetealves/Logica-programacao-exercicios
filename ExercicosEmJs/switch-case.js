/*--------- LISTA DE EXERCÍCIO DE DECISÃO SWITCH...CASE ---------*/

/* 1. Faça um programa que pergunte em que turno você estuda. Peça para digitar
M-Matutino, V-Vespertino ou N-Nortuno. Imprima a mensagem "Bom Dia", "Boa Tarde", 
"Boa Noite" ou "Valor Inválido", conforme for o caso.*/

//Dados de entradas 
let turno = "M";

switch(turno) {
    case "m":
    case "M": console.log("Bom Dia"); break;
    case "v":
    case "V": console.log("Boa Tarde"); break;
    case "n":
    case "N": console.log("Boa Noite"); break;
    default: console.log("Valor Inválido");
}

/* 2. Faça um programa que leia um número e exiba o dia correspondente da semana. (1 - Domingo,
2 - Segunda, etc.), se digitar outro valor deve aparecer valor inválido.*/

//Dados de entrada
let diaDaSemana = 5;

switch (diaDaSemana) {
    case 1: console.log("Domingo"); break;
    case 2: console.log("Segunda-feira"); break;
    case 3: console.log("Terça-feira"); break;
    case 4: console.log("Quarta-feira"); break;
    case 5: console.log("Quinta-feira"); break;
    case 6: console.log("Sexta-feira"); break;
    case 7: console.log("Sabado"); break;
    default: console.log("Valor inválido");
}

