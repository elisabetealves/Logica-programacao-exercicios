// Exercícios
// Encontre o menor número inteiro que pode ser divisível por 1 a 20.

let num = 20;
let cont = 0;

while(cont == 0){
    cont = 1;
    for (let i = 2; i < 20; i++) {
        if(num % i != 0){
            cont = 0;;
            break;
        }    
    }
    if(cont == 1){
        console.log(`O número é ${num}`)
    }else{
        num += 2;
    }
}

function MMC(cont, num) {

    while(cont == 0) {
        cont = 1;
        for (let i = 2; i <= 20; i++) {
            if(num % i != 0){
                cont = 0;;
                num += 2;
                break;
            }  
        }
        if (cont == 1){
            console.log(`O número é ${num}`)
        }    
    } 
}
MMC(0, 20)


