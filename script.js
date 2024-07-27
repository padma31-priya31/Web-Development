document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task-button");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="complete">Complete</button>
            <button class="delete">Delete</button>
        `;

        taskList.appendChild(li);
        taskInput.value = "";

        li.querySelector(".complete").addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        li.querySelector(".delete").addEventListener("click", () => {
            taskList.removeChild(li);
        });
    }

    // Event listeners
    addTaskButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") addTask();
    });
});
