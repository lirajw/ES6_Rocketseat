const arr = [1, 3, 4, 5, 8, 9] 

//faz a leitura de cada item do vetor
const newArr = arr.map(function(item, index){
    return item + index;
});

console.log(newArr);

//consome todo o vetor e transforma em uma unica variavel.
const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log(sum);

// filtra os itens de acordo com a condição especificada
const filter = arr.filter(function(item){
    return item % 2 === 0;
})

console.log(filter);

// Pesquisa uma informação dentro do array
const find = arr.find(function(item){
    return item === 4;
});

console.log(find)