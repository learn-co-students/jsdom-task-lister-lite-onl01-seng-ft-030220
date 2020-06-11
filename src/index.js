document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskDesc = document.querySelector("#new-task-description")
  const taskForm = document.querySelector("#create-task-form")


  taskForm.addEventListener('submit', function(e){
    e.preventDefault()

    const newTask = taskDesc.value
    console.log('newTask')
    const list = document.querySelector("#tasks")
    const newLi = document.createElement('li')
    newLi.innerText = newTask
    list.appendChild(newLi)
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'x'
    newLi.appendChild(deleteButton)
    deleteButton.addEventListener('click', function(e){
      newLi.remove()
    })
    taskForm.reset()
  })
});
