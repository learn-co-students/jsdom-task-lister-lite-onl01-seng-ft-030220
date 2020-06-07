document.addEventListener("DOMContentLoaded", () => {
  // need user input 
  const taskInput = document.querySelector("#new-task-description")
  //console.log(taskDesc)
  //need form
  const taskForm = document.querySelector("#create-task-form")
  // listen to when form is submitted
  taskForm.addEventListener('submit', function(e) {
    
      e.preventDefault()
      taskForm.value
      const newTask = taskInput.value
    //add to list
    const list = document.querySelector("#tasks")
    newLi = document.createElement('li')
    newLi.innerText = newTask 
    list.appendChild(newLi)
  })

});
