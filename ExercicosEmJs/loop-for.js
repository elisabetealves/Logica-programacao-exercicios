// EXERCÍCIOS DE LOOP FOR

/* 1. Faça um programa que imprima na tela os números de 1 a 20.*/

for (let i = 1; i <= 20; i++) {
    console.log(i);
}


/* 2. Faça um programa que imprima na tela apenas os números impares entre 1 e 50.*/

for (let i = 1; i <= 50 ; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}


/* 3. Faça um programa que receba dois números internos e gere os n[umeros internos que
estão no intervalo compreendido po eles.*/

//Entrada de dados
let num1 = 2;
let num2 = 20;

for (let i = num1; i < num2; i++) {
    console.log(i)
}


/* 4. Altere o programa anterior para mostrar no final a soma dos números.*/

//Entrada de dados
let num = 2;
let numer = 20;

let soma = 0;

for(let i = num; i < numer; i++){
    soma += i;
}

console.log("Soma: " + soma);


/* 5. Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número
inteiro entre 1 e 10. O usuário deeve informar de qual número ele deseja vê a tabuada.*/

//Entrada de dados
let numtab = 6;

console.log("Tabuada de " + numtab + ": ");

for (let i = 1; i <= 10; i++) {
    console.log(numtab + " x " + i + " = " + (numtab * i));
}


/* 6. Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro 
número elevando ao segundo número. Não utilizar a função de potência da linguagem*/

//Entrada de dados
let base = 2;
let potencia = 3;
let result = base;

for (let i = 1; i < potencia; i++) {
    result *= base;
}
console.log("Resultado: " + result);


/* 7. A série de Fibonacci é formanda pela sequência 1,1,2,3,5,8,13,21,34,55... 
Faça um programa capaz de gerar a série até n-ésimo termo.*/

//Entrada de dados
let n = 100;
let primeiro = 1;
let segundo = 2;
let proximo;

console.log(primeiro);
console.log(primeiro);
console.log(segundo);

for (let i = 3; i <= n; i++) {
    proximo = primeiro + segundo;
    primeiro = segundo;
    segundo = proximo;

    console.log(proximo);
}


/* 8. Faça um programa que calcule o fatorial de um número inteiro fornecido pelo
usuário. Ex.: 5! = 5.4.3.2.1 = 120*/

//Entrada de dados
let number = 7;
let fatorial = 1;

console.log(number + "!")

for (let i = number; i > 0; i--){
    fatorial *= i;
    console.log(i);
}

console.log("Resultado: " + fatorial);


/* 9. Faça um programa que peça um número inteiro e determine se ele é ou não um número
primo. Um número primo é aquee que é divísivel somente por ele e por 1.*/

//Entrada de dados
let numprimo = 6;
let primo = true;

for (let i = 2; i < numprimo; i++){
    if(numprimo % i == 0){
        console.log("Não é primo pois é divisivel por: " + i);
        primo = false;
    }   
}
console.log("É número primo!");

/* 10. O Sr. Manoel possui uma grande loja de artigos de R$1.99 com cerca de 10 caixas.
Praagilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu uma tabela que
contém os números de itens que o cliente comprou e ao lado o valor da conta. Desta forma
a atendente do caixa precisa apenas contar quantos itens o cliente está levando e olhar
na tabela de preços. Você foi contratado para desenvolver o programa que monta esta
tabela de preços, que conterá os preços de 1 até 50 produtos.*/

console.log("Loja quase dois - tabela de preços: ");

for (var i = 0; i <= 50; i++){
    console.log(i + " - R$" + (1.99 * i));
}


/* 11. O Sr. Manoel acaba de adquirir uma panificadora e pretende implantar a metodologia
da tabelinha. Você foi contratado para desenvolver o programa que monta a tabela de preços
de pães, de 1 até 50 pães, a partir do preço do pão informado pelo usuário.*/

console.log("Preço do pão: R$0.20");
console.log("Panificadora Matrix - Tabela de preços");

for (var i = 0; i <= 50; i++){
    console.log(i + " - R$" + (0.20 * i).toFixed(2));
}


/* 12. Encontrar número primoé uma tarefa difícil, faça um programa que gera uma lista dos
números primos existente entre 1 e um número informado pelo usuário. */

//Entrada de dados
let nPrimo = 50;
let prim;

for (let i = 0; i <= nPrimo; i++) {
    prim = true;
    for (let j = 2; j <= i; j++){
        if(i % j == 0){
            prim =  false;
        }
    }
    if(!prim){
        console.log(i);
    }
}


/* 13. Um funcionário de uma empresa recebe aumento salarial anualmnete, sabe-se que:
  - Esse funcionário foi contratado em 2000 com salário inicial de R$1.000,00;
  - Em 2001, recebeu aumento de 1.5% sobre seu salário inicial;
  - Em 2002 (inclusive), os aumentos salariais sempre correspondem ao dobro do percentual
  do ao anterior.
Faça um programa que determine o salário atual desse funcionário.*/

//Entrada de dados
let salInicial = 1.000;
let perc = 1.5;

salInicial += (salInicial / 100) * perc;

for (let i = 2002; i <= 2008; i++){
    perc *= 2;
    salInicial += (salInicial / 100) * perc;

    console.log(i + " = " + salInicial.toFixed(3) + " - " + perc + "%");
}


/* 14. Faça um programa que mostre os n termosda série a seguir: S = 1/1 + 2/3 +
3/5 + 4/7 + 5/9 + ... + n/m. Imprima no final a soma da série.*/

//Entrada de dados
let nn = 7;
let plus = 0;

for (let i = 1, j = 1; i <= nn; i++, j+= 2){
    console.log(i + " / " + j + " + ");
    plus += i / j;
}

console.log("Soma = " + (plus).toFixed(2)); 


/* 15. Sendo H = 1 + 1/2 + 1/3 + 1/4 + ... + 1/n, faça um programa que calcule o
valor de H com N termos.*/

//Entrada de dados
let ns = 7;
let somaa = 0;

for (let i = 1; i <= ns; i++){
    somaa += 1/i;
}

console.log("Soma = " + (somaa).toFixed(2));