//Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const taskInput = document.querySelector('#task');


function idGenerator() {
  let taskId = Math.floor(Date.now() / 1000);
  return taskId;

}

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear Tasks event
  clearBtn.addEventListener('click', clearTasks);
}

// Add Task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Adicione uma tarefa');
    return;
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';  
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class to delete and push to the right
  link.className = 'delete-item secondary-content';
  // Add icon html  
  link.innerHTML = '<i class="small material-icons">delete</i>';
  // Append the link to li
  li.appendChild(link);
  // Append li to ul
  taskList.appendChild(li);  
  // Clear input
  taskInput.value = '';
  e.preventDefault();
}

// Remove Task

function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Remover tarefa?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear all tasks

function clearTasks() {
  if (taskList.firstChild) {
    if (confirm('Deseja remover TODAS as tarefas?')) {
      while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
      }
    }
  }
}
