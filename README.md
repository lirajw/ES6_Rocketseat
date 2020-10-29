# ES6_Rocketseat
Códigos produzidos durante as aulas

Aula 1 - Configurando Babel
Babel é uma biblioteca responsavel por converter seu codigo es6+ em js nativo para que navegadores
mais antigos consigam rodar o seu código.
Para instalar suas dependencias rode:
    yarn add @babel/cli
    yarn add @babel/present-env
    yarn add @babel/core

Após a instalação, configure uma no package.json com o seguinte comando:
"babel ./main.js -o ./bundle.js -w"

Este comando vai ficar analisando qualquer alteração no arquivo main.js e alterar o arquivo bundle.js automaticamente.

Aula2 - Classes
Uma estrutura capaz de armazenar propriedades e funcoes. 
Constructor() -> Método que instancia uma classe, dentro dele deve estar iniciado todas as variaveis do objeto.

Extend -> Comando utilizado para realizar a erança entre objetos

Static -> usado para criar metodos estaticos dentro de uma classe. Métodos estaticos não enxergam propriedades
instanciadas no Constructor.

Aula3 - Const e Let
var -> variavel global
const -> constante, nao é possivel alterar a estrutura ou o tipo de dados, mas é possivel mutar
ou alterar seus valores
let -> variavel visivel apenas dentro do seu escopo
idem var do C#

Aula4 - Operações em Array
array.map(function(item, index(opcional))) -> faz a leitura de cada item do vetor
array.reduce(function(total, next)) -> consome todo o vetor e transforma em uma unica variavel.
array.filter(function(item)) -> filtra os itens de acordo com a condição especificada
array.find(function(item)) -> pesquisa uma informação dentro do array

Aula5 - Arrow Function
Usado para diminuir verbosidade em functions anonimas, especialmente em funções que esperam um callback

Aula6 - Valores Padrao
Como definir valor padrao a um parametro de uma função

Aula7 - Desestruturação
em uma const array conseguimos pegar todas as propriedades de um objeto.

Aula 8 - Operadores rest/spread
necessario instalar o plugin :
yarn add @babel/plugin-proposal-object-rest-spread

Aula 12 WebPack
Gerenciador de arquivos js. Emcapsula todos os nossos js em um unico bandle
