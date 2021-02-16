const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', checkOrRemove);



//Functions

function addTodo(event)
{
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item')
    newTodo.innerText = todoInput.value ;

    todoDiv.appendChild(newTodo);

    //CHECKMARK

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add('complete-btn');

    todoDiv.appendChild(completedButton);

    //DELETE

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>' ;
    trashButton.classList.add('delete-btn');

    todoDiv.appendChild(trashButton);

    //APPEND TO LIST

   todoList.appendChild(todoDiv);
   todoInput.value = "";

}

function checkOrRemove(e)
{
    const item = e.target;
    if(item.classList[0] === "delete-btn")
    {
        const confirmation =  confirm("are you sure you want to delete this?");
        if(confirmation == true)
        {const todo = item.parentElement;
        todo.classList.toggle("slide");
        todo.addEventListener('transitionend', function()
        {
            todo.remove();
        })
        }
    }

    if(item.classList[0] === "complete-btn")
    {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}


   