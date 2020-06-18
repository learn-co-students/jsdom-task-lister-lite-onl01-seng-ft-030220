document.addEventListener("DOMContentLoaded", () => {

    let form = document.getElementById("create-task-form")


    let textBox =  document.getElementById("new-task-description")


    let tasks = document.getElementById('tasks') // ul

    form.addEventListener("submit", function(event) {
      event.preventDefault()
      // console.log("button clicked")
      let li = document.createElement("li")
      li.innerText = textBox.value    //form.innerText
      tasks.append(li)
    })
  });
