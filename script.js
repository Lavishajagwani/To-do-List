// Select the elements
const input = document.querySelector(".input");
const addbtn = document.querySelector(".addbtn");
const taskList = document.querySelector(".list");
const delAllbtn = document.querySelector(".delAllbtn");

addbtn.addEventListener("click", (e) => {
  e.preventDefault();
  addTask();
});

function addTask() {
  const task = input.value.trim();
  if (task) {
    const listItem = document.createElement("li");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.addEventListener("click", toggleTaskCompleted);

    const label = document.createElement("label");
    label.textContent = task;

    const delBtn = document.createElement("button");
    delBtn.className = "delBtn";
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-minus"

    delBtn.addEventListener("click", deleteTask);
    delBtn.appendChild(icon);
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(delBtn);
    taskList.appendChild(listItem);

    input.value = "";
  }
}

function toggleTaskCompleted(event) {
  const listItem = event.target.parentNode;
  listItem.classList.toggle("completed");
}

function deleteTask(event) {
  const delBtn = event.target.closest('button');
  const listItem = delBtn.parentNode;
  listItem.remove();
}

delAllbtn.addEventListener("click", deleteAllTasks);

function deleteAllTasks() {
    taskList.innerHTML = "";
}