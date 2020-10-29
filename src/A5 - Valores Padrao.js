function soma(a, b = 1){
    return a + b;
}

console.log(soma(3))

const somaArrow = (a, b = 1) => a + b;
console.log(somaArrow(3));