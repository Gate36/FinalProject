const taskForm = document.querySelector(".askToDo"),
    taskInput = document.querySelector(".toDoBox"),
    taskList = document.querySelector(".toDoList");

const TASKS_LS = "tasks";
let tasks = [];

function makeTask(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = tasks.length + 1;

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", delTask);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    taskList.appendChild(li);

    const taskObj = {
        text: text,
        id: newId
    };
    tasks.push(taskObj);
    localStorage.setItem(TASKS_LS, JSON.stringify(tasks));
}

function delTask(event) {
    const btn = event.target;
    const li = btn.parentNode;
    taskList.removeChild(li);
    const cleanTasks = tasks.filter(function(task) {
        return task.id !== parseInt(li.id);
    });
    tasks = cleanTasks;
    localStorage.setItem(TASKS_LS, JSON.stringify(tasks));
}

function loadTasks() {
    const loadedTasks = localStorage.getItem(TASKS_LS);
    if(loadedTasks !== null) {
        const parsedTasks = JSON.parse(loadedTasks);
        parsedTasks.forEach(function(Task) {
            makeTask(task.text);
        });
    }
}

function init() {
    loadTasks();
    taskForm.addEventListener("submit", function(a) {
        a.preventDefault();
        const currentValue = taskInput.value;
        makeTask(currentValue);
        taskInput.value = "";
    });
}

init();