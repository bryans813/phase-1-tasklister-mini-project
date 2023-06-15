document.addEventListener("DOMContentLoaded", () => {
  addingEventListener()
}

function addingEventListener() {
    document
    .getElementById("create-task-form")
    .addEventListener("submit", handleFormSubmit)
  }

  function handleFormSubmit(e){
    e.preventDefault()
    const task = e.target(0).value
    displayTask(task)
  }

  function displayTask(task) {
    const ulTask = document.getElementById("tasks")
    const liTask = document.createElement("li")
    liTask.textContent = task
    ulTask.appendChild(liTask)

  }