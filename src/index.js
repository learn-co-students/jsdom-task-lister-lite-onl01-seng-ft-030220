  
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("#create-task-form");
  let itemList = document.querySelector("#tasks");
  let xButton = document.createElement("button");
  xButton.innerText = "x";
  
  let placeholder = document.querySelector("#new-task-description");
  
  form.addEventListener("submit", (e)=> {
    let xButton = document.createElement("button"); // Creating a new xButton on submitting
    xButton.addEventListener("click", (e)=> {
      itemList.removeChild(e.target.parentNode); // Clicking the xButton will remove the node
    });
  xButton.innerText = "x";
    e.preventDefault(); // preventing a page redirect when clicking Submit
    let listItem = document.createElement("li"); //creating a list item
    listItem.innerText = e.target.elements[0].value + " "; 
    itemList.appendChild(listItem);
    listItem.appendChild(xButton);
    placeholder.setAttribute("placeholder", "description");
    placeholder.value = "";
  });
});