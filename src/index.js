


document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputValue = document.getElementById("new-task-description").value
    handleToDo(inputValue);
    form.reset();

  });
})

function handleToDo(todo) {
  let p = document.createElement('p');
  let bttn = document.createElement('button');
  bttn.addEventListener('click', handleDelete);
  bttn.textContent = 'x';
  p.textContent = `${todo} `;
  p.appendChild(bttn);
  document.querySelector('#list').appendChild(p)
}

function handleDelete(e) {
  e.target.parentNode.remove();
}



// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.