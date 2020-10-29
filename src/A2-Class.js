class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
    }
}

class TodoList extends List {
    constructor(){
        super(); // chama construtor da classe pai

        this.usuario = 'Lucas'
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

var minhaLista = new TodoList();

var buttonElement = document.querySelector('#novoTodo')
buttonElement.onclick = function() {    
    minhaLista.add('Novo Todo');
    console.log(minhaLista.data);
}