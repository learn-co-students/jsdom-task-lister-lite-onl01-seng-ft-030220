document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById("create-task-form");
  let tasks = document.getElementById("tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let newTask = document.createElement("li");
    let newTaskDescription = document.getElementById("new-task-description").value;
    newTask.innerText = newTaskDescription;

    tasks.appendChild(newTask);
    e.target.reset();
  });
});
