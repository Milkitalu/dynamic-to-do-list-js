addEventListener("DOMContentLoaded", (event) => {
    const addButton = document.getElementById("AddTask");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    function addTask() {
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
            };
            newLi.appendChild(removeBtn);
            taskList.appendChild(newLi);
            taskInput.value = "";
            addButton.addEventListener("click", addTask);
            taskInput.addEventListener('keypress', (event) => {
                if (event.key='Enter') {
                    addTask;
                }
            });
        }
    addEventListener("DOMContentLoaded", addTask);

});