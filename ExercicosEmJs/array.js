// EXERCÍCIOS DE ARRAYS

/* 1. Criar um array A com 5 elementos inteiros. Construir um array B 
com mesmo tipo de tamanho e com os "mesmos" elementos do array A,ou seja:
B[i] = A[i].*/

//Entrada de dados
// let arrayA = [1, 2 , 3, 4, 5];
// let arrayB = [];

// for (let i = 0; i < arrayA.length; i++) {
//     arrayB[i] = arrayA[i];
// }

// console.log("Array A : " );
// for (let i = 0; i < arrayA.length; i++){
//     console.log(arrayA[i]);
// }

// console.log("Array B : " );
// for (let i = 0; i < arrayB.length; i++){
//     console.log(arrayB[i]);
// }


/* 2. Criar um array A com 8 elementos inteiros. Construir um array B do mesmo tipo. 
e tamanho e com os elementos do array A multiplicados por 2, ou seja: B[i] = A[i] * 2.*/

//Entrada de dados
// let arrayA = [4, 6 , 9, 3, 5];
// let arrayB = [];

// for (let i = 0; i < arrayA.length; i++) {
//     arrayB[i] = arrayA[i] * 2;
// }

// console.log("Array A : " );
// for (let i = 0; i < arrayA.length; i++){
//     console.log(arrayA[i]);
// }

// console.log("Array B : " );
// for (let i = 0; i < arrayB.length; i++){
//     console.log(arrayB[i]);
// }


/* 3. Criar um array A com 10 elementos inteiros. Construir um array B do mesmo tipo e tamanho,
sendo que cada elemento do array B deverá ser o quadrado do respectivo elemento de A, ou seja:
B[i] = A[i] * A[i].*/

//Entrada de dados
// let arrayA = [4, 6 , 9, 3, 5, 2, 1, 10, 7, 8];
// let arrayB = [];

// for (let i = 0; i < arrayA.length; i++) {
//     arrayB[i] = arrayA[i] * arrayA[i];
// }

// console.log("Array A : " );
// for (let i = 0; i < arrayA.length; i++){
//     console.log(arrayA[i]);
// }

// console.log("Array B : " );
// for (let i = 0; i < arrayB.length; i++){
//     console.log(arrayB[i]);
// }


/* 4. Criar um array A com 10 elementos inteiros. Construir um array B mesmo
tamanho, sendo que cada elemento do array B deverá ser a raiz quadrada do 
respectivo elemento de A, ou seja: B[i] = sqrt(A[i]).*/

//Entrada de dados
// let arrayA = [4, 6 , 9, 3, 5, 11, 8, 12, 2,7];
// let arrayB = [];

// for (let i = 0; i < arrayA.length; i++) {
//     arrayB[i] = Math.sqrt(arrayA[i]);
// }

// console.log("Array A : " );
// for (let i = 0; i < arrayA.length; i++){
//     console.log(arrayA[i]);
// }

// console.log("Array B : " );
// for (let i = 0; i < arrayB.length; i++){
//     console.log((arrayB[i]).toFixed(2));
// }


/* 5. Criar um array A com 8 elementos inteiros. Construir um array B do mesmo
tipo e tamanho, sindo que cada elemento do array B deverá ser o respectivo elemento 
de A multiplicado por sua posição (indice), ou seja: B[i] = A[i] * i.*/

//Entrada de dados
// let arrayA = [4, 6 , 9, 3, 5, 8, 2, 7];
// let arrayB = [];

// for (let i = 0; i < arrayA.length; i++) {
//     arrayB[i] = arrayA[i] * i;
// }

// console.log("Array A : " );
// for (let i = 0; i < arrayA.length; i++){
//     console.log(arrayA[i]);
// }

// console.log("Array B : " );
// for (let i = 0; i < arrayB.length; i++){
//     console.log(arrayB[i]);
// }


/* 6. Crie uma array A e B cada um com 10 elementos inteiros. Construir um array C, onde 
cada elemento de C é a soma dos respectivos elementos de A e B, ou seja: C[i] = A[i] + B[i].*/

//Entrada de dados
// let arrayA = [4, 6 , 9, 3, 5, 11, 8, 12, 2,7];
// let arrayB = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 , 9, 10];
// let arrayC = [];

// for (let i = 0; i < arrayA.length; i++) {
//     arrayC[i] = arrayA[i] + arrayB[i]; //se quiser fazer outras operação é só mudar o sinal.
// }

// console.log("Array A : " );
// for (let i = 0; i < arrayA.length; i++){
//     console.log(arrayA[i]);
// }

// console.log("Array B : " );
// for (let i = 0; i < arrayB.length; i++){
//     console.log(arrayB[i]);
// }

// console.log("Array c : " );
// for (let i = 0; i < arrayC.length; i++){
//     console.log(arrayC[i]);
// }


/* 7. Criar um array A com 5 elementos inteiros. Construir um array B do mesmo tipo e tamanho,
cada elemento do array B deverá ser o resto da divisão do respectivo do A por 2, ou seja: 
B[i] = A[i] % 2.*/

//Entrada de dados
// let arrayA = [4, 6 , 9, 3, 5];
// let arrayB = [];

// for (let i = 0; i < arrayA.length; i++) {
//     arrayB[i] = arrayA[i] % 2;
// }

// console.log("Array A : " );
// for (let i = 0; i < arrayA.length; i++){
//     console.log(arrayA[i]);
// }

// console.log("Array B : " );
// for (let i = 0; i < arrayB.length; i++){
//     console.log(arrayB[i]);
// }


/* 8. Crir um array A com 10 elementos inteiros. Implementar um programa que define e
escreva a quantidade de elementos armazenados neste array que são pares.*/

// //Entrada de dados
// let arrayA = [4, 6 , 9, 3, 5, 2, 10, 13, 7, 8];
// let qtdPares = 0;

// for (let i = 0; i < arrayA.length; i++){
//     if(arrayA[i] % 2 == 0){
//         qtdPares++;
//     }
// }

// console.log("Array A : " );
// for (let i = 0; i < arrayA.length; i++){
//     console.log(arrayA[i]);
// }
// console.log("A quantidade de nº pares: " + qtdPares);


/* 9. Crie um array A com 10 elementos inteiros, implementar um programa que defina e
escreva a soma de todos os elementos armazenadosneste array.*/

//Entrada de dados
// let arrayA = [4, 6 , 9, 3, 5, 2, 10, 1, 7, 8];
// let somaEl = 0;

// for (let i = 0; i < arrayA.length; i++){
//     somaEl += arrayA[i];
// }

// console.log("Array A : " );
// for (let i = 0; i < arrayA.length; i++){
//     console.log(arrayA[i]);
// }
// console.log("Soma dos elementos: " + somaEl);


/* 10. Criar um array A com 10 elementos inteiros, implementando um programa que
determine a soma dos elemntos armazenados neste array que são múltiplo de 5.*/

//Entrada de dados
// let arrayA = [4, 15, 9, 35, 5, 20, 10, 1, 7, 8];
// let soma = 0;

// for (let i = 0; i < arrayA.length; i++){
//     if(arrayA[i] % 5 == 0){
//         soma += arrayA[i];
//     }
// }

// console.log("Array A : " );
// for (let i = 0; i < arrayA.length; i++){
//     console.log(arrayA[i]);
// }
// console.log("Soma dos elementos múltiplo de 5: " + soma);


/* 11. Criar um array A com 10 elementos inteiros. Desenvolver um programa que defina e
ecreva a média aritmétrica simples dos elementos impares armazenados neste valor.*/

//Entrada de dados
// let arrayA = [4, 6 , 9, 3, 5, 2, 10, 1, 7, 8];
// let somaImpares = 0;
// let impar = 0;

// for (let i = 0; i < arrayA.length; i++){
//     if(arrayA[i] % 2 != 0){
//         somaImpares += arrayA[i];
//         impar++;
//     }
// }

// console.log("Array A : " );
// for (let i = 0; i < arrayA.length; i++){
//     console.log(arrayA[i]);
// }
// console.log("A soma dos elementos impares: " + somaImpares);
// console.log("A média: " + (somaImpares / impar));


/* 12. Criar um array A com 10 elementos inteiros. Desenvolver um programa que define
o percentual de elementos pares e impares, respectivamnete, armazenados neste array.*/

//Entrada de dados
// let arrayA = [4, 6 , 9, 3, 5, 2, 10, 1, 7, 8];
// let impar = 0;

// for (let i = 0; i < arrayA.length; i++){
//     if(arrayA[i] % 2 != 0){
//         impar++;
//     }
// }

// let par = arrayA.length - impar;
// let porcPar = (par * 100) / arrayA.length;
// let porcImpar = 100 - porcPar;

// console.log("Array A : " );
// for (let i = 0; i < arrayA.length; i++){
//     console.log(arrayA[i]);
// }
// console.log("Porcentagem de nº pares: " + porcPar + "%");
// console.log("Porcentagem de nº impares: " + porcImpar + "%");


/* 13. Criar um array A com 15 elementos inteiros. Escrever um programa que calcule
e escreva:
  - A soma dos elementos que são inferiores a 15;
  - A quantidade de elementos que são iguais a 15;
  - A média dos elementos que são superior a 15.*/

  //Entrada de dados
//   let arrayA = [4, 6 , 29, 3, 5, 2, 10, 15, 7, 18, 36, 8, 26, 9, 42];
//   let igual15 = 0;
//   let somaMenor15 = 0;
//   let somaMaior15 = 0;
//   let qtdMaior15 =0;
  
//   for (let i = 0; i < arrayA.length; i++){
//     if(arrayA[i] == 15){
//         igual15++;
//     }else if (arrayA[i] < 15){
//         somaMenor15 += arrayA[i];
//     }else{
//         qtdMaior15 ++;
//         somaMaior15 += arrayA[i];
//     }
//   }
  
// console.log("Array A : " );
// for (let i = 0; i < arrayA.length; i++){
//     console.log(arrayA[i]);
// }
// console.log("Quantidade nº == 15: " + igual15);
// console.log("Soma dos nº < 15: " + somaMenor15);
// console.log("Soma dos nº > 15: " + somaMaior15);


/* 14. Ler um array A com 10 elementos inteiros correspondente as idades de um grupo
de pessoas. Escreva um programa que determine e escreva a quantidae de pessaos que 
possuem idade superior a 34 anos.*/

//Entrada de dados
// let arrayA = [40, 36 , 29, 33, 25, 52, 60, 21, 37, 48];
// let qtd = 0;

// for (let i = 0; i < arrayA.length; i++){
//     if(arrayA[i] > 35){
//         qtd++;
//     }
// }

// console.log("Array A : " );
// for (let i = 0; i < arrayA.length; i++){
//     console.log(arrayA[i]);
// }
// console.log("Quantidade de pessoas com idade > 35: " + qtd);


/* 15. Ler um array A com 10 elementos inteiros correspondentes a idades de um grupo
de pessoas. Escreva um programa que determine e escreva a menor e a meaior iddades
e suas respectivas posições.*/

//Entrada de dados
// let arrayA = [24, 16 , 29, 33, 25, 32, 50, 61, 79, 48];
// let menor = arrayA[0];
// let indexMaior = 0;
// let maior = arrayA[0];
// let indexMenor = 0;

// for (let i = 0; i < arrayA.length; i++){
//     if(arrayA[i] > maior){
//         maior = arrayA[i];
//         indexMaior = i;
//     }else if(arrayA[i] < menor){
//         menor = arrayA[i];
//         indexMenor = i;
//     }
// }

// console.log("Array A : " );
// for (let i = 0; i < arrayA.length; i++){
//     console.log(arrayA[i]);
// }
// console.log("Menor idade: " + menor);
// console.log("Indice menor idade: " + indexMenor);
// console.log("Maior idade: " + maior);
// console.log("Indice maior idade: " + indexMaior);


/* 16. Ler as duas notas bimetrais para um conjunto de 10 alunos. Armazenar as notas
informandas em dois array "nota1" e "nota2" do tipo real. Escreva um programa que 
calcule a média aritmétrica simples das notas informadas armazenando o resultado em 
um array "result" do mesmo tipo e tamanho. Ao mostrar os resultados exebir a situação
de cada aluno. Se a média for superior ou igual a 7 o alunoa esta "Aprovado", caso
contrário, a situação do aluno será "Reprovado".*/

//Entrada de dados
// let notas1 = [4.9, 6.5, 9.0, 7.3, 8.5, 6.2, 10.0, 9.1, 7.5, 8.9];
// let notas2 = [5.0, 7.6, 8.0, 6.7, 4.9, 5.6, 9.5, 10.0, 5.5, 8.0];
// let result = [];

// for (let i = 0; i < notas1.length; i++){
//     result[i] = (notas1[i] + notas2[i]) / 2;
// }

// console.log("Notas 1 : " );
// for (let i = 0; i < notas1.length; i++){
//     console.log(notas1[i]);
// }
// console.log("Notas 2 : " );
// for (let i = 0; i < notas2.length; i++){
//     console.log(notas2[i]);
// }
// console.log("Resultados: " );
// for (let i = 0; i < result.length; i++){
//     if(result[i] >= 7){
//         console.log(result[i] + " Aprovado");
//     }else{
//         console.log(result[i] + " Resprovado");
//     }
// }
