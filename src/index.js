document.addEventListener("DOMContentLoaded", () => {
  // your code heredocument.addEventListener("DOMContentLoaded", () => {
  document.getElementById("create-task-form").addEventListener("submit", function(event) {
    event.preventDefault()
    const newTask = document.getElementById("new-task-description").value
    const task = document.getElementById("tasks")
    const list = document.createElement("li")
    list.innerHTML = newTask
    task.appendChild(list)
  })
})
});
