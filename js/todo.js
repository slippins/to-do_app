export default class Todo{
    constructor() {
        this.enterButton = document.querySelector('#inputArea button');
        this.input = document.querySelector('#inputArea input');
        this.ul= document.querySelector('ul#toDoList');

        this.enterButton.addEventListener('click', (e) => this.addListItem(e));
        this.input.addEventListener('keypress', (e) => this.addListItem(e));
    }

    addListItem(e){
        if(this.input.value.length > 0 && (e.key === 'Enter' || e.key === undefined)){
            this.createListItem();
        }
    }

    createListItem(){
        const li = document.createElement('li');
        li.innerHTML = `${this.input.value} <i class="far fa-trash-alt"></i>`;
        this.ul.appendChild(li);
        this.input.value = '';

        li.addEventListener('click', (e) => this.crossOut(e));
        li.querySelector('i').addEventListener('click', (e) => this.deleteListItem(e));
    }

    crossOut(e){
        e.currentTarget.classList.toggle('done');
    }

    deleteListItem(e){
        e.stopPropagation();
        const listItem = e.currentTarget.parentNode;
        listItem.remove();
    }
}