document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault() // prevent page from refreshing when you submit element
    let taskBox = document.getElementById('new-task-description') //specifies the input box
    // console.log(task.value)
    addNewToDo(taskBox.value) //invokes addnewtodofunction with value inside input box
  })
});

// function addNewToDo(todo){
//   let li = document.createElement('li')
//   let list = document.getElementById('tasks')
//   list.appendChild(li)
//   li.textContent = `${todo}`
// }

function addNewToDo(todo){
  let li = document.createElement('li')
  let list = document.getElementById('tasks')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  li.textContent = `${todo} `
  li.appendChild(btn)
  list.appendChild(li)
  
}

function handleDelete(e){
  e.target.parentNode.remove()
}