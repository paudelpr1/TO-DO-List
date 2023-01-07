const openTaskButtons = document.querySelectorAll('[data-task-target]')
const closeTaskButtons = document.querySelectorAll('[data-close-button]')
const addTaskButtons = document.querySelectorAll('[data-add-button]')
const list = document.querySelector('#todoValue');
const checkedOption = [];
const consequentTodoValue = [];
var todo;
var ul;
var todoList;
var deleteBtn;
var x;


openTaskButtons.forEach(button => {
    button.addEventListener('click', () => {
        const task = document.querySelector(button.dataset.taskTarget)
        openTask(task)
    })
})

closeTaskButtons.forEach(button => {
    button.addEventListener('click', () => {
        const task = button.closest('.task')
        closeTask(task)
    })
})

addTaskButtons.forEach(button => {
    button.addEventListener('click', () => {
        const addtask = button.closest('.task')
        addTask(addtask)
    })
})

function openTask(task){
    if(task == null) return 
    task.classList.add('active')
}

function closeTask(task){
    if (task == null) return
    task.classList.remove('active')
}

function addTask(addtask){
    if(addTask == null) return
    todo = document.getElementById("myInput").value;
    document.getElementById("myInput").value = '';
    if(todo.length !== 0){

        ul = document.createElement('ul');
        todoList = document.createElement('span');
        deleteBtn = document.createElement('span');
        x = document.createElement('input')

        
        x.setAttribute("type", "checkbox");
        deleteBtn.textContent = 'delete';
        todoList.textContent = todo;

        checkedOption.push(x);
        consequentTodoValue.push(todoList);

        x.classList.add('checkbox');
        todoList.classList.add('list');
        deleteBtn.classList.add('delete');
    
        ul.appendChild(x);
        ul.appendChild(todoList);
        ul.appendChild(deleteBtn);
        list.appendChild(ul);       
    };
    addtask.classList.remove('active')  
}

list.addEventListener('click', (e) => {
    if (e.target.className == 'delete'){
        const ul = e.target.parentElement;
        ul.parentNode.removeChild(ul);
    }
})

list.addEventListener('click', (e) =>{
    if(e.target.className == "checkbox"){
        for(let i = 0; i < checkedOption.length; i++){
            if(checkedOption[i].checked){
                consequentTodoValue[i].style.textDecoration = "line-through";
                consequentTodoValue[i].style.color = "blue";
            }

            else {
                consequentTodoValue[i].style.textDecoration = "none";
                consequentTodoValue[i].style.color = "black";
            }
        }  
    }
})

