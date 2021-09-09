document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const addTaskForm = document.getElementById("create-task-form");

  addTaskForm.addEventListener("submit", createTask);
});

const createTask = event => {
  event.preventDefault();
  const addTaskDesc = document.getElementById("new-task-description");
  const addTask = document.createElement("li");
  addTask.innerText =  addTaskDesc.value;
  
  appendTask(addTask);
  event.target.reset();
};

const appendTask = task => {
  document.getElementById("tasks").appendChild(task);
};

