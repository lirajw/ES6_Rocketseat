const arr = [1,3,4,5,6]

// passagem de 1 parametro nao necessita dos parenteses
const newArr2 = arr.map(item => item * 2);
//passagem de 2 parametros necessita dos parenteses
const newArr = arr.map((item, x) => item * x);

// pode ser usada para criação de funções mas nao é recomendado
const teste = () => {
    return 'teste'
};

const teste2 = () => 'teste'; // return variavl
const teste2 = () => ({nome:'teste'}); // return objeto