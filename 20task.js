const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const themeToggleButton = document.getElementById('toggle-theme-btn');

themeToggleButton.addEventListener('click', (event)=>{
    event.preventDefault();
    document.body.classList.toggle('dark-theme');

    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});


loadTasks();

const currentTheme = localStorage.getItem('theme');
if(currentTheme === 'dark'){
    document.body.classList.add('dark-theme');
}

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskInput = taskForm.elements['task-input'].value;
    
    if(taskInput != ""){
        create_task(taskInput);
        storeTaskInLocalStorage(taskInput);
        taskForm.elements['task-input'].value = "";
    }
});


function create_task(taskInput){
    const li = document.createElement('li');    
    li.textContent = taskInput;
    li.append(create_button("❌","delete-btn"), create_button("✏️","edit-btn"));
    taskList.append(li);
    return li;
}

function create_button(text, className){
    const btn = document.createElement('span');
    btn.textContent = text;
    btn.className = className;
    return btn;
}

taskList.addEventListener('click', (event) => {
    if(event.target.classList.contains("delete-btn")){
        deleteTask(event.target.parentElement);
    } else if(event.target.classList.contains("edit-btn")){
        editTask(event.target.parentElement);
    }

});

function deleteTask(taskItem){
    if(confirm('Estás segura/seguro de borrar este elemento?')){
        taskItem.remove();
        deleteLocalStorage();
    }    
}

function editTask(taskItem){
    const newTask = prompt("Edita la tarea: ", taskItem.firstChild.textContent);
    if(newTask !== null){
        taskItem.firstChild.textContent = newTask;
        updateLocalStorage();
    }
}

function storeTaskInLocalStorage(task){
    const tasks = JSON.parse(localStorage.getItem('tasks') || "[]");
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks(){
    const tasks = JSON.parse(localStorage.getItem('tasks') || "[]");    
    tasks.forEach( (task) => {
        taskList.appendChild(create_task(task));
    });
}

function updateLocalStorage(){
    const tasks = Array.from(taskList.querySelectorAll('li')).map((li) => li.firstChild.textContent)      //Convierte lista de nodos en array
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteLocalStorage(){
    const tasks = Array.from(taskList.querySelectorAll('li')).map((li) => li.firstChild.textContent)      //Convierte lista de nodos en array
    localStorage.setItem('tasks', JSON.stringify(tasks));
}