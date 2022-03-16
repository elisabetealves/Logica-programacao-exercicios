/*--------- LISTA DE EXERCÍCIO DE DECISÃO IF...ELSE ---------*/


/* 1. Faça um programa que peça dois números e imprima o maior deles.*/

//Dados de entrada
let num1 = 20;
let num2 = 4;

if( num1 > num2 ){
    console.log("O número um é o maior " + num1);
}else{
    console.log("O número dois é o maior " + num2);
}


/* 2. Faça um programa que peça um valor e mostre se ele e positivo ou negativo.*/

//Dados de entrada
let numero = -7;

if( numero > 0 ){
    console.log("O número é positivo");
}else{
    console.log("O número é negativo");
}


/* 3. Faça um programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra
escrever F-Feminino, M-Masculino ou sexo inválido.*/

let letra = "F";

if(letra == "F"){
    console.log("F - Feminino");
}else if (letra == "M"){
    console.log("M - Meminino");
}else {
    console.log("Sexo inválido");
}


/* 4. Faça um programa que verifique se uma letra digitada é vogal ou consoante.*/

//Dados de entrada
let letraVC = "b";

if (letraVC.toLocaleUpperCase() == "a" || letraVC.toLocaleLowerCase() == "e" || letraVC.toLocaleUpperCase() == "i"
|| letraVC.toLocaleLowerCase() == "o" || letraVC.toLocaleUpperCase() == "u"){
    console.log("A letra é uma VOGAL");
}else{
    console.log("A letra é uma CONSOANTE")
}


/* 4.Faça um programa que leia 3 números e mostre o maior deles*/

//Dados de entrada 
let numUm = 10;
let numDois = 5;
let numTres = 8;

if(numUm >= numDois && numUm >= numTres){
    console.log("O numUm é o maior, com o valor: " + numUm);
}else if(numDois >= numUm && numDois >= numTres){
    console.log("O numDois é o maior, com o valor: " + numDois);
}else if(numUm >= numTres && numTres >= numDois){
    console.log("O numTres é o maior,, com o valor: " + numTres);
}


/* 5.Faça um programa que leia 3 números e mostre o maior e o menor deles.*/

//Dados de entrada 
let numeroUm = 6;
let numeroDois = 12;
let numeroTres = 37;

if(numeroUm >= numeroDois && numeroUm >= numeroTres){
    console.log("O numeroUm é o maior, com o valor: " + numeroUm);
}else if(numeroDois >= numeroUm && numeroDois >= numeroTres){
    console.log("O numeroDois é o maior, com o valor: " + numeroDois);
}else if(numeroUm >= numeroTres && numeroTres >= numeroDois){
    console.log("O numeroTres é o maior,, com o valor: " + numeroTres);
}
if(numeroUm <= numeroDois && numeroUm <= numeroTres){
    console.log("O numeroUm é o menor, com o valor: " + numeroUm);
}else if(numeroDois <= numeroUm && numeroDois <= numeroTres){
    console.log("O numeroDois é o menor, com o valor: " + numeroDois);
}else if(numeroUm <= numeroTres && numeroTres <= numeroDois){
    console.log("O numeroTres é o menor,, com o valor: " + numeroTres);
}


/* 6. Faça um programa que leia três números e mostre em ordem decrescente.*/

//Dados de entrada 
let n1 = 4;
let n2 = 15;
let n3 = 7;

if(n1 <= n2 && n1 <= n3 && n2 <= n3){
    console.log(n3 + "-" + n2 + "-" + n1);
}else if(n1 <= n2 && n1 <= n3 && n3 <= n2){
    console.log(n2 + "-" + n3 + "-" + n1);
}else if(n2 <= n1 && n2 <= n3 && n1 <= n3){
    console.log(n3 + "-" + n1 + "-" + n2);
}else if(n2 <= n1 && n2 <= n3 && n3 <= n1){
    console.log(n1 + "-" + n3 + "-" + n2);
}else if(n3 <= n1 && n3 <= n2 && n1 <= n2){
    console.log(n2 + "-" + n1 + "-" + n3);
}else if(n3 <= n1 && n3 <= n2 && n2 <= n1){
    console.log(n1 + "-" + n2 + "-" + n3);
}


/* 7. As organizações feels resolvedram dar um aumento de salário aos seus colaboradores e
lhe contarm para desenvolver o programa qu calculará os reagustes. Faça um progrma que recebe 
o sálario e o reajuste segundo o seguinte critério, baseado no slario atual:
  - Salário de R$ 280,00(incluindo): aumneto de 20%;
  - Salário de R$ 280,00 e R$ 700,00: aumneto de 15%;
  - Salário de R$ 700,00 e R$ 1.500,00: aumneto de 10%;
  - Salário de R$ 1.500,00 em diante: aumneto de 5%; 
Após o aumento ser realizado informe na tela:
  - O salário antes do reajuste;
  - O percentual de aumento aplicado;
  - O valor do aumento;
  - O novo salário, após o aumento.*/

  // Dados de entrada 
let salario = 1200;
let percentual = 0;

if (salario <= 280){
    percentual = 20;
} else if (salario > 280 && salario < 700){
    percentual = 15;
} else if (salario >= 700 && salario < 1500){
    percentual = 10;
} else if(salario >= 1500){
    percentual = 5;
}

let aumento = (salario / 100) * percentual;
let salarioAjustado = salario + aumento;

console.log("Salario: " + salario);
console.log("Percentual: " + percentual);
console.log("Aumento:" + aumento);
console.log("Salario ajustado: " + salarioAjustado);


/* 8. Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos
são do imposto de renda, que depende do salário bruto (conforme tabela abaixo), INSS corresponde
a 10%, e 3% para o sindicato e que o FGTS corresponde a 11% do salário bruto, mas não é descontado
(é a empresa que deposita) O salário líquido corresponde ao salário bruto menos os descontos. O programa 
deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
Desconto do IMPOSTO DE RENDA:
  - Salário bruto até R$ 900,00 (inclusive): isento;
  - Salário bruto até R$ 1.500,00 (inclusive): desconto de 5%;
  - Salário bruto até R$ 2.500,00 (inclusive): desconto de 10%;
  - Salário bruto acima de R$ 2.500,00: desconto de 20%;
Imprima na tela as informações.*/

//Dados de entrada
let valorHora = 10;
let qtdHoras = 220;

let salarioBruto = valorHora * qtdHoras;
let percentualIR = 0;

if (salarioBruto <= 900){
    percentualIR = 0;
} else if (salarioBruto > 900 && salarioBruto <= 1500){
    percentualIR = 5;
} else if (salarioBruto > 1500 && salarioBruto <= 2500){
    percentualIR = 10;
} else if (salarioBruto > 2500){
    percentualIR = 20;
}

//Calculando os impostos
let ir = (salarioBruto / 100) * percentualIR;
let inss = (salarioBruto / 100) * 10;
let fgts = (salarioBruto / 100) * 11;
let totalDescontos = ir + inss + fgts;
let salLiquido = salarioBruto - totalDescontos;

console.log("Salário bruto (" + valorHora + " * " + qtdHoras + "): " + salarioBruto);
console.log("(-) IR ( " + percentualIR + "% ): " + percentualIR);
console.log("(-) INSS (10%): " + inss);
console.log("(-) FGTS (11%): " + fgts);
console.log("Total de descontos: " + totalDescontos);
console.log("Salário líquido: " + salLiquido);


/* 9. Faça um programa que peça três lados de um triângulo. O programa deverá informar
se os lados podem ser triêngulo. Indique, caso os lados formem um triângulo, se o mesmo
é: equilátero, isósceles ou escaleno.
DICAS:
  - Três lados formam um triêngulo quando a soma de quaisquer dois lados for maior que o 
  terceiro;
  - Triangulo equilátero: três lados iguais;
  - Triângulo isósceles: quaisquer lados iguais;
  - Triângulo escaleno: tres lados diferentes.*/

  //Dados de entrada 
  let lado1 = 3;
  let lado2 = 2;
  let lado3 = 3;

  if(((lado1 + lado2) > lado3) && ((lado1 + lado3) > lado2) && ((lado2 + lado3) > lado1)){

    if( lado1 == lado2 && lado1 == lado3 && lado2 == lado3){
        console.log("Triângulo Equiláreto");
    } else if( lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
        console.log("Triângulo Escaleno");
    } else if( lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        console.log("Triângulo Isóceles");
    }
  } else{
      console.log("Não forma um triângulo");
  }


/* 10. Faça um programa que calcule as raízes de uma aquação do segundo grau, na forma 
ax2 + bx + c. O programa deverá pedir os valores ao usuário de a, b, e c e fazer as consistências,
informando ao usuário nas seguintes situações:
  a. Se o usuário informar o valor de A igual a zero. A equação não é segundo grau e o 
  programa não deve pedir os demais valores, sendo encerrado;
  b. Se o delta calculado for negativo, a equação não possui raízes reais. Informe ao
  usuário e encerre o programa;
  c. Se o delta calculado for igual a zero a equação possui apenas uma raiz real; informe-a
  ao usuário;
  d. Se o delta for positivo, a equação possui duas raízes; informe-as ao usúario.*/

// Dados de entrada (informando o valor A)
let a = 5;

if (a == 0){
    console.log("Não é uma equação de segundo grau")
}else {
    let b = 8;
    let c = 2;
    let delta = (b * b) - (4 * a * c);

    if (delta < 0){
        console.log("Delta negativo");
    }else{
        console.log("Delta: " + delta);
        let x1 = ((-b) + Math.sqrt(delta)) / (2 * a); //Calcular raiz quadrada Math.sqrt(delta)
        let x2 = ((-b) - Math.sqrt(delta)) / (2 * a);

        console.log("X1 = " + (x1).toFixed(2));
        console.log("X2 = " + (x2).toFixed(2));
    }
}


/* 11. Faça um programa que peça um número correspondente a um detrminado ano e em seguida
informe se este ano é ou não bissexto.*/

//Dado de entrada
let ano = 2024;

if (ano % 400 == 0 || (ano % 4 == 0 && ano % 100 != 0)){
    console.log("O ano é bissexto");
}else{
    console.log("O ano não é bissexto");
}


/* 12. Faça um programa que leia dois números e em seguida pergunte ao usuário qual operação 
ele deseja realizar (+ , - , * , / ). O rsultado da opreração de ve ser acompanhado de uma frase
que diga se o número é:
  - Par ou Ímpar;
  - Positivo ou Negativo.*/

//Dados de entrada
let nume1 = 20;
let nume2 = -16;
let operacao = "+";
let resulatdo;
let valida = true;

switch (operacao){
    case "+": resultado = nume1 + nume2; break;
    case "-": resultado = nume1 - nume2; break; 
    case "*": resultado = nume1 * nume2; break; 
    case "/": resultado = nume1 / nume2; break; 
    default: console.log("Operação Inválida");
}   

if (valida){
    console.log("Resultado: " + resultado);
    if(resultado >= 0){
        console.log("Resultado Positivo");
    }else{
        console.log("Resultado Negativo");
    }
    if(resultado % 2 == 0){
        console.log("Resultado Par");
    }else{
        console.log("Resultado Ímpar");
    }
}


/* 13. Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
  -"Telefonou para a vítima?"
  -"Esteve no local do crime?"
  -"Mora perto da vítima?"
  -"Devia para a vítima?"
  -"Já trabalhou para a vítima?
O program deve no final emitir uma classificaçãosobre a participação da pessoa no crime. Se
a pessoa responder possitivamente a 2 questões ele deve ser classificado como "Suspeito", 
então 3 e 4 como "Cúmplice"e 5 como "Assassino". Caso contrario ele será classificado como 
"Inocente".*/

//Dados de entrada
//"Telefonou para a vítima?"
let resp1 = "S";
//"Esteve no local do crime?"
let resp2 = "N";
//"Mora perto da vítima?"
let resp3 = "N";
//"Devia para a vítima?"
let resp4 = "N";
//"Já trabalhou para a vítima?
let resp5 = "S";

let cont = 0;

if (resp1.toLocaleUpperCase() == "S"){
    cont++;
}
if (resp2.toLocaleUpperCase() == "S"){
    cont++;
}
if (resp3.toLocaleUpperCase() == "S"){
    cont++;
}
if (resp4.toLocaleUpperCase() == "S"){
    cont++;
}
if (resp5.toLocaleUpperCase() == "S"){
    cont++;
}

if (cont == 2){
    console.log("Suspeito");
}else if (cont == 3 || cont == 4){
    console.log("Cúmplice");
}else if (cont == 5){
    console.log("Assassino");
}else if (cont == 0){
    console.log("Inocente");
}


/* 14. Um posto está vendendo combustíveis com a seguinte tabelade descontos.
ÁLCOOL:
  - Até 20L, desconto de 3% por litro;
  - acima de 20L, desconto de 5% por litro.
GASOLINA: 
  - Até 20L, desconto de 4% por litro;
  - acima de 20L, desconto de 6% por litro.
EScreva um algoritmo que leia o número de litros vendido, o tipo de combustível
(codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor 
a ser pago pelo cliente sabendo-se que o preço da gasolina é R$6,40 e o preço do
litro so álcool é R$4,70*/

//Dados de entrada
let litros = 20;
let tipo = "A";

let precoGas = 6.4;
let precoAlc = 4.7;
let totaldesc = 0;
let percDesc = 0;
let precoAPagar = 0;
let total = 0;

if (tipo.toLocaleUpperCase() == "A"){
    if(litros <= 20){
        percDesc = 3;
    }else{
        percDesc = 5;
    }

    total = litros + precoAlc;
}else if (tipo.toLocaleUpperCase() == "G"){
    if(litros <= 20){
        percDesc = 4;
    }else{
        percDesc = 6;
    }

    total = litros + precoGas; 
}

totaldesc = (total / 100) * percDesc;
precoAPagar = total - totaldesc;

console.log("Valor a ser pago: " +(precoAPagar).toFixed(2));


/* 15. Uma hortfruit está vendendo frutas com a seguinte tabela de precos:
                    até 5kg            acima de 5kg 
  - Morango         R$2,50 por kg      R$2,20 por kg
  - maçã            R$1,89 por kg      R$1,20 por kg
Se o clinete comprar mais de 8kg em frutas ou o valor total de compras ultrapassar
R$25,00 receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo 
para ler a quantidade (em kg) de morangos e maçãs adequirida e escreva o valor a 
ser pago pelo cliente.*/

//Dados de entrada
let qtdMorangos = 2.0; //(em kg)
let qtdMacas = 4.0 //(em kg)

let precoKgMorango = 0;

if (qtdMorangos <= 5){
    precoKgMorango = 2.5;
}else{
    precoKgMorango = 2.2;
}

let precoKgMaca = 0;

if (qtdMacas <= 5){
    precoKgMaca = 1.8;
}else{
    precoKgMaca = 1.5;
}

let precoTotalMorango = qtdMorangos * precoKgMorango;
let precoTotalMaca = qtdMacas * precoKgMaca;

let precoParcial = precoTotalMorango + precoTotalMaca;
let precoTotals = precoParcial;

if((qtdMorangos + qtdMacas > 8) || precoParcial > 25){
    precoTotals = precoParcial - ((precoParcial / 100) * 10);
}

console.log("Preço Total: " + precoTotals);


/* 16. O supermercado está com uma promoção de carne imperdível. Confira:
                    até 5kg             acima de 5kg 
  -Filé Duplo       R$4.90 por kg       R$5.80 por kg
  -Alcatra          R$5.90 por kg       R$6.80 por kg 
  -Picanha          R$6.90 por kg       R$7.80 por kg
Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos 
de carne da promoção, porém não há limite para a quantidade de carne por cliente.
Se a compra for feita no cartão do supermercado o cliente receberá ainda um desconto
de 5% sobre o total da compra. Escreva um algoritmo que peça o tipo e a quantidade
de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da 
compra, tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto
e valor a pagar.
  - 1 - Filé duplo
  - 2 - Alcatra
  - 3 - Picanha*/

let tipoC = 1;
let qtdC = 7;
let precoKg = 0;

if(tipoC == 1){
    console.log(tipoC + "Kg - Filé duplo");
    if(qtdC > 5){
        precoKg = 4.9;
    }else{
        precoKg = 5.8;
    }
}else if(tipoC == 2){
    console.log(tipoC + "Kg - Alcatra");
    if(qtdC > 5){
        precoKg = 5.9;
    }else{
        precoKg = 6.8;
    }
}else if(tipoC == 3){
    console.log(tipoC + "Kg - Picanha");
    if(qtdC > 5){
        precoKg = 6.9;
    }else{
        precoKg = 7.8;
    }
}    

let totalC = qtdC * precoKg;
console.log(qtdC + "kg + " +  precoKg + " = " + (totalC).toFixed(2));

//1-SIM / 2-NÃO 
let cartao = 1;

if(cartao == 1){
    let descontoC = (tipoC / 100) * 5;
    console.log("Desconto de: " + descontoC);
    console.log("Valor a pagar: " + (totalC - descontoC).toFixed(2));
}else{
    console.log("Valor a pagar: " + (totalC).toFixed(2));
}


