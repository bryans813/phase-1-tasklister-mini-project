document.addEventListener("DOMContentLoaded", () => {
  addingEventListener()
})

function addingEventListener() {
    document.getElementById("create-task-form")
    document.addEventListener("submit", handleFormSubmit)
  }

  function handleFormSubmit(e){
    e.preventDefault()
    const task = e.target[0].value
    const prioLevel = parseInt(e.target[2].value)
    displayTask(task, prioLevel)
    console.log(e.target[2])
    console.log(prioLevel)
  }

  function displayTask(task, prioLevel) {
    const ulTask = document.getElementById("tasks")
    const liTask = document.createElement("li")
    const deleteBtn = document.createElement("button")
    
    deleteBtn.textContent = "x"
    deleteBtn.addEventListener('click', deleteTask)

    liTask.textContent = task
    liTask.style.color = prioColor(prioLevel)
    liTask.appendChild(deleteBtn)
    ulTask.appendChild(liTask)


  }

  function deleteTask(e) {
    e.target.parentNode.remove()
    
  }

  function prioColor (prioLevel) {
    console.log(prioLevel)
    if (prioLevel === 1) {
        return "red"
    } 
    else if (prioLevel === 2 ) {
      return "orange"
      
    }
    else {
      return "green"
  }
}