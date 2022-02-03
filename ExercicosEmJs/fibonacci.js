/* Cada termo da sequencia Fibonacci é gerado pela soma dos dois últimos termos. Se começarmos a
 sequenciapelos números 1 e 2, os 10 primeiros termos da sequencia serão:temos a seguinte sequencia.
 1,2, 3, 5, 8,13, 21, 34, 55, 89,... Então, considerando a sequencia de fibonacci começando pelos termos 
 1 e 2, até que o último termo não exceda de 4 milhões.
 Encontre a somatória de todos os termos que são PARES*/
 let termo1 = 1;
 let termo2 = 2;
 let soma = 0;

 while (termo2 < 400000) {
     let novoTermo = termo1 + termo2;
     if (novoTermo % 2 == 0) soma += novoTermo;
     termo1 = termo2;
     termo2 = novoTermo;
 }
 console.log(soma);

/*A série de Fibonacci é formada pela sequência 1,1,2,3,5,8,13,21,34,55... faça um programa capaz
de gerar a série até N-ésimo termo*/

let ultimo = 1
let penultimo = 1
let count = 1
console.log(ultimo)
console.log(penultimo)
while (count <= 20){
        let termo = ultimo + penultimo
        penultimo = ultimo
        ultimo = termo
        count += 1
        console.log(termo)
}