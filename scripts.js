const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');
const totalTodosCountSpan = document.getElementById('totalTodosCount');
const completedTodosCountSpan = document.getElementById('completedTodosCount');
const clearAllBtn = document.getElementById('clearAllBtn');

let totalTodos = 0;
let completedTodos = 0;

function updateCounts() {
    totalTodosCountSpan.textContent = totalTodos;
    completedTodosCountSpan.textContent = completedTodos;
}
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText === "") {
        alert("Please enter a todo item!"); 
        return; 
    }

    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');

    const todoTextSpan = document.createElement('span');
    todoTextSpan.classList.add('todo-text');
    todoTextSpan.textContent = todoText;

    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('todo-actions');

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.textContent = 'Complete';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';

    actionsDiv.appendChild(completeBtn);
    actionsDiv.appendChild(deleteBtn);
    listItem.appendChild(todoTextSpan);
    listItem.appendChild(actionsDiv);
    todoList.appendChild(listItem);

    todoInput.value = '';
    totalTodos++;
    updateCounts();

    completeBtn.addEventListener('click', () => {
        listItem.classList.toggle('completed'); 
        if (listItem.classList.contains('completed')) {
            completedTodos++;
        } else {
            completedTodos--;
        }
        updateCounts(); 
    });
    deleteBtn.addEventListener('click', () => {
        if (listItem.classList.contains('completed')) {
            completedTodos--; 
        }
        
        listItem.remove(); 
        totalTodos--; 
        updateCounts(); 
    });
}
addTodoBtn.addEventListener('click', addTodo);

todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

clearAllBtn.addEventListener('click', () => {
    todoList.innerHTML = ''; 
    totalTodos = 0; 
    completedTodos = 0; 
    updateCounts(); 
    alert("All todos cleared!");
});
updateCounts();
