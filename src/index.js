document.addEventListener("DOMContentLoaded", () => {

  const main = document.querySelector('#main-content')
  console.log(main)

  const taskForm = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks")

  taskForm.addEventListener('submit', function(e) {
    e.preventDefault()
    // get user input
    const newTask = document.querySelector("#new-task-description").value
    //create element
    const taskItem = document.createElement('li')
    taskItem.innerText = newTask
    
    taskList.appendChild(taskItem)
    taskForm.reset()
    })
});

