//exercício 01
const nucleotides = {
    A: 0,
    C: 0,
    G: 0,
    T: 0
}

let dna = 'ACGTACGACACAAAATCGCGAGACGG';

for (let i = 0; i < dna.length; i++) {
    nucleotides[dna[i]]++
}
console.log(nucleotides)


//exercício 02
let obj = {
    one: 0,
    two: 0,
    red: 0,
    blue: 0,
    fish: 0
}

let str = 'one fish two fish red fish blue fish';
let array = str.split(' ');// quando é uma frase usano o split para separar as palavras

for(let i = 0; i < array.length; i++) {
    obj[array[i]]++
}

console.log(obj);