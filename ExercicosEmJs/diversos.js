/* ------ LISTA DE EXERCÍCIO ------ */


/* 1. Faça um programa que transforme metros em centimetros.*/
let metros = 50;
let cm = metros * 100;

console.log(metros + 'm é igual a ' + cm + 'cm');


/* 2. Faça um programa que calcule o raio de um circulo, calcule e mostre sua área.*/

let raio = 1.25;
let area = Math.PI * Math.pow(raio, 2);

console.log('A área do circulo é: ' + area.toFixed(2));


/* 3. Faça um programa que calcule a área de um quadrado, em seguida mostre o dobro desta 
área para o usuário.*/

let lado = 2;
let areaQuad = Math.pow(lado, 2);

console.log('A área do quadrado é: '+ areaQuad);
console.log('O dobro da área do quadrado é: '+ (areaQuad * 2));


/* 4. Faça um programa que tenha o valor hora e o número de horas trabalhadasno mês.
Calcule e mostre o total de seu salário do referido mês.*/

let valorHora = 10;
let quantHoras = 120;

let salarioMes = valorHora * quantHoras;

console.log(`O salário é de: ${salarioMes}`);

/* 5. Faça um programa que pegue a temperatura em grau Farenheit e transforme e mostre a 
temperatura em graus Celsius. c = (5 + (f-32)/9)*/

let f = 12;
let c = (5 + (f-32)/9).toFixed(2);

console.log(`A temperatura ${f}F é igual a ${c}C`);


/* 5. Faça um programa que pegue a temperatura em grau Celsius e transforme e mostre a 
temperatura em graus Farenheit. f = (c * 1.8) + 32*/

let celsius = 20;
let farenheit =  ((c * 1.8) + 32).toFixed(2);

console.log(`A temperatura ${celsius}C é igual a ${farenheit}F`);


/* 6. Faça um program que tenha 2 números inteiros e um número real. Calcule e mostre:
1- O produto do dobro da primeiro com metade do segundo;
2- A soma do tiplo do primeiro com o segundo;
3- Oterceiro elevado ao cubo. */

let numero1 = 6;
let numero2 = 8;
let numero3 = 3.5;
let resultado1 = (numero1 * 2) * (numero2 / 2);
let resultado2 = (numero1 * 3) + numero2; 
let resultado3 = Math.pow(numero3, 3)

console.log("Resultado 1: " + resultado1);
console.log("Resultado 2: " + resultado2);
console.log("Resultado 3: " + resultado3);


/* 7. Tendo como entrada a altura de um a pessoa, construa um algoritmo que calcule seu peso ideal, 
usando a formula (72.7 * altura) - 58.*/

let altura = 1.52;
let prsoIdeal =  ((72.7 * altura) - 58).toFixed(2);

console.log("O peso ideal é: " + prsoIdeal);


/* 8. Faça um programa que pergunte o quanto você ganha por hor e o número de horas trabalhadas
no mês. Calcule e mostre o total do su salário no referido mês, sabendo que são descontado 11%
para o imposto de renda, 8% para INSS e 5% para o sindicato, faça um programa que nos dê:
1- Salário bruto;
2- Quanto pagou do INSS;
3- Quanto pagou do sindicato;
4- O salário liquido;
5- Calcule os descontos e o salário líquido.*/

//volores de entrada
let valorDaHora = 15;
let horasTrab = 200;

let salarioBruto = valorDaHora * horasTrab;
let inss = (salarioBruto / 100) * 8;
let sindicato = (salarioBruto / 100) * 5;
let iRenda = (salarioBruto / 100) * 11;
let totalDescontos = inss + sindicato + iRenda;
let salarioLiquido = salarioBruto - totalDescontos;

console.log("INSS: " + inss);
console.log("Salário bruto: " + salarioBruto);
console.log("Sindicato: " + sindicato);
console.log("Imposto de Renda: ", iRenda);
console.log("Total de descontos: " + totalDescontos);
console.log("Salário líquido: " + salarioLiquido);


/* 9.Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de 
um arquivo de um link de internet (em Mbps), calcule e infome o tempo aproximmado do download 
do arquivo usando este link (em minutos).*/

// Dados de entrada
let tamArquivo = 100;
let velInternet = 40;

let tempo = tamArquivo / velInternet;

console.log("Tempo do download: " + tempo);


/* 10. Faça um programa que peça nome e sobrenome da pessoa e mostre as iniciais do nome e sobrenome.*/

//Dados de entrada
let name = "Elisabete Alves";

// Pegar a primeira letra do primeiro nome
let firstInitial = name.slice(0, 1);

// Pegar a posição da primeira letra do sobrenome
let secoundInitialPosition = name.indexOf(" ") + 1;

//Pegar a segunda letra do segundo nome 
let secoudInitial = name.slice(secoundInitialPosition, secoundInitialPosition + 1);

console.log("Suas iniciais são : " + firstInitial.toUpperCase()+ "." + secoudInitial.toUpperCase() + ".");