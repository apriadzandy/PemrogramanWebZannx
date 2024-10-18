document.getElementById('add-button').addEventListener('click', addTask);

function addTask() {
    const taskText = document.getElementById('task-input').value;
    if (taskText === '') return; 

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item'; 

    taskItem.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button onclick="editTask(this)">📝</button>
            <button onclick="deleteTask(this)">🚮</button>
        </div>
    `;

    taskList.appendChild(taskItem);
    document.getElementById('task-input').value = ''; 
}

function editTask(button) {
    const taskItem = button.parentElement.parentElement;
    const taskTextElement = taskItem.querySelector('span');
    const newTaskText = prompt("Edit your task:", taskTextElement.textContent);
    if (newTaskText !== null) {
        taskTextElement.textContent = newTaskText;
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}
