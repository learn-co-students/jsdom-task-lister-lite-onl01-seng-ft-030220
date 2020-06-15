document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
  const tasks = document.getElementById('tasks')

  const deleteButton = () => {
    const button = document.createElement('button')
    button.className = 'delete'
    button.innerText = 'X'

    button.addEventListener('click', (e) => {
      e.stopPropagation()
      tasks.removeChild(e.target.parentElement)
    })

    return button
  }

  const createTask = (value, color) => {
    const task = document.createElement('li')
    task.innerHTML = `<span style="color: ${color};">${value}</span>`
    task.appendChild(deleteButton())

    return task
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const value = e.target.querySelector('#new-task-description').value
    const color = e.target.querySelector('#colors').value
    
    const task = createTask(value, color)
    tasks.appendChild(task)
  })
});