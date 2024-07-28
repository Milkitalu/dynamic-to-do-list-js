document.addEventListener("DOMContentLoaded", (event) => {
    let storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        const userData = JSON.parse(storedTasks);
        
      } 
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); 
    }
    function addTask(taskText, save = true) {
        let taskText = taskInput.value.trim();
        if (taskText == "") {
            alert("Please Enter your task. ");
        }
        
            let newLi=document.createElement('li');
            newLi.textContent = taskText;
            let removeBtn = document.createElement("button");
            removeBtn.classList.add("remove-btn");
            removeBtn.textContent = "Remove";
            let taskLists = document.querySelectorAll(".remove-btn");
            removeBtn.onclick = function(){
                    this.parentNode.remove();
                    localStorage.removeItem('task');
            };
            newLi.appendChild(removeBtn);
            taskList.appendChild(newLi);
            taskInput.value = "";
            addButton.addEventListener("click", addTask);
            localStorage.setItem('task', JSON.stringify(tasks));
            taskInput.addEventListener('keypress', (event) => {
                if (event.key='Enter') {
                    addTask;
                    localStorage.setItem('task', JSON.stringify(tasks));
                }
                if (save) {
                    storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                    storedTasks.push(taskText);
                    localStorage.setItem('tasks', JSON.stringify(storedTasks));
                }
            }
            });
        }
        document.addEventListener('DOMContentLoaded', () => {
            loadTasks();
            addTask();
        });

    

});