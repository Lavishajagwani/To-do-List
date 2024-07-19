// Select the elements
const input = document.querySelector("#input");
const addbtn = document.querySelector(".addbtn");
const taskList = document.querySelector("#list");
const delbtn = document.querySelector(".delbtn");

addbtn.addEventListener("click", (e) => {
  e.preventDefault();
  addTask();
});

function addTask() {
  const task = input.value.trim();
  if (task) {
    const listItem = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type = "checkBox";
    const label = document.createElement("label");
    label.textContent = task;
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    taskList.appendChild(listItem);

    input.value = "";
  }
}

delbtn.addEventListener("click", deleteAllTasks);

function deleteAllTasks() {
    taskList.innerHTML = "";
}