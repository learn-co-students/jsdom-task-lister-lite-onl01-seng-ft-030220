document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("create-task-form").addEventListener("submit", function(event) {
    event.preventDefault()
    const newtask = document.getElementById("new-task-description").value
    const tasks = document.getElementById("tasks")
    const liss = document.createElement("li")
    liss.innerHTML = newtask
    tasks.appendChild(liss)
  });
});
