const usuario = {
    nome: 'Lucas',
    idade: 23,
    endereco: {
        cidade: 'Piracicaba',
        estado: 'SP',
    },
    telefone: '19987545820',
};

const {nome, idade, endereco:{ cidade, estado}} = usuario;
console.log(cidade);

function mostraNome({nome, idade}){
    console.log(nome);
}

mostraNome(usuario);