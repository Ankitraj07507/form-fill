let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");
let taskList = document.getElementById("taskList");

addButton.addEventListener("click", function () {

    let task = taskInput.value.trim();

    if (task !== "") {

        let li = document.createElement("li");

        li.textContent = task;

        taskList.appendChild(li);

        taskInput.value = "";
    }
});