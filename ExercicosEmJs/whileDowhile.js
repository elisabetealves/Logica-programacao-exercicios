// EXERCÍCIOS DE LOOPS WHILE E DO...WHILE
       
/* 1. Fça um programa que peça uma nota entre 0 e 10. Mostre uma mensagem caso 
o valor seja inválido e continue pedindo até o usuário informe um valor válido.*/

let nota = 10;
let notaValida = true;
do{
    if(nota >= 0 && nota <= 10){
        console.log("você digitou: " + nota);
    }else{
        console.log("Nota invalida, digite novamente")
    }
}while(!notaValida);


/* 2. Faça um programa que leia um nome de um usuario e sua senha e não aceite a senha
igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.*/

let infoValida = false;
let nomeUser = "Eli";
let senha = "Eli1234"

do{
    if(nomeUser === senha){
        console.log("Senha igual nome do usuário, digite outra senha");
        break;
    }else{
        infoValida = true;
        console.log("Usuário e senha válidos");
    }
}while(!infoValida);


/* 3. Faça um programa que leia e valide as seguites informações:
  - Nome: maior que 3 caracteres;
  - Idade: entre 0 e 150;
  - Salário: maior que 0;
  - Sexo: "F" ou "M";
  - Estado Civil: "S","C","V","D".*/

let valida = false;
let nome, idade, salario, sexo, estadoCivil;

do{
    nome = "Elisabeth";
    if(nome.length >= 3){
        valida = true;
    }else{
        console.log("Nome precisa ter no mínimo 3 caractere");
    }
}while(!valida)

valida = true;
do{
    idade = 32;
    if(idade >= 0 && idade <= 150){
        valida = true;
    }else{
        console.log("Idade precisa ter entre 0 e 150");
    }
}while(!valida)

valida = false;
do{
    salario = 2.000;
    if(salario > 0){
        valida = true;
    }else{
        console.log("Salário precisa ser maior que 0");
    }
}while(!valida)

valida = false;
do{
    //"F" ou "M
    sexo = "F";
    if(sexo.toLocaleUpperCase() == "F" || sexo.toLocaleLowerCase() == "M"){
        valida = true;
    }else{
        console.log("Sexo precisa ser F ou M");
    }
}while(!valida)

valida = false;
do{
    //"S","C","V","D"
    estadoCivil = "C";
    if(estadoCivil == "S" || estadoCivil == "C" || estadoCivil == "V" || estadoCivil == "D"){
        valida = true;
    }else{
        console.log("Estado civil precisa ser S, C, V, D");
        break;
    }
}while(!valida)

console.log("As informações coletadas foram: ");
console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("Salário: " + salario);
console.log("Sexo: " + sexo);
console.log("Estado Civil: " + estadoCivil);


/* 4. Supondo que a pospulação de um país A seja da ordem de 8000 habitantes com taxa
anual de crescimento de 3% e que a população de B seja 20000 habitantes com uma taxa
de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários
para que a população de A  ultrapasse ou iguale a população de país B, mantidas as taxas
de crescimento.*/

let popA = 8000;
let popB = 20000;
let cont = 0;

while (popA < popB){
    popA += (popA / 100) * 3;
    popB += (popB / 100) * 1.5;
    cont ++;
}

console.log("População A: " + (popA).toFixed(2));
console.log("População B: " + (popB).toFixed(2));
console.log("Quantidade de anos: " + cont);


/* 5.  A série de Fibonacci é formanda pela sequência 1,1,2,3,5,8,13,21,34,55... 
Faça um programa que gere a série até que o valor seja maor que 500.*/

let primeiro = 1;
let segundo = 1;
let proximo = 0;

console.log(primeiro);
console.log(segundo);

while (proximo <= 500){
    proximo = primeiro + segundo;
    primeiro = segundo;
    segundo = proximo;

    console.log(proximo);
}