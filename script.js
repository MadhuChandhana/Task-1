document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const allTasksButton = document.getElementById('all-tasks');
    const completedTasksButton = document.getElementById('completed-tasks');
    const notCompletedTasksButton = document.getElementById('not-completed-tasks');
    const favoriteTasksButton = document.getElementById('favorite-tasks');

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addTask(taskInput.value.trim());
        taskInput.value = '';
    });

    taskList.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('task-checkbox')) {
            target.parentElement.classList.toggle('completed');
        } else if (target.classList.contains('task-favorite')) {
            target.parentElement.classList.toggle('favorite');
            target.classList.toggle('active');
        } else if (target.classList.contains('task-delete')) {
            target.parentElement.remove();
        }
    });

    allTasksButton.addEventListener('click', () => {
        filterTasks('all');
    });

    completedTasksButton.addEventListener('click', () => {
        filterTasks('completed');
    });

    notCompletedTasksButton.addEventListener('click', () => {
        filterTasks('not-completed');
    });

    favoriteTasksButton.addEventListener('click', () => {
        filterTasks('favorite');
    });

    function addTask(taskText) {
        if (taskText) {
            const taskItem = document.createElement('li');
            taskItem.classList.add('task-item');
            taskItem.innerHTML = `
                <input type="checkbox" class="task-checkbox">
                <span>${taskText}</span>
                <span class="task-favorite">&#9733;</span>
                <button class="task-delete">Delete</button>
            `;
            taskList.appendChild(taskItem);
        }
    }

    function filterTasks(filter) {
        const tasks = taskList.querySelectorAll('.task-item');
        tasks.forEach(task => {
            switch (filter) {
                case 'all':
                    task.style.display = 'flex';
                    break;
                case 'completed':
                    task.style.display = task.classList.contains('completed') ? 'flex' : 'none';
                    break;
                case 'not-completed':
                    task.style.display = !task.classList.contains('completed') ? 'flex' : 'none';
                    break;
                case 'favorite':
                    task.style.display = task.classList.contains('favorite') ? 'flex' : 'none';
                    break;
                default:
                    task.style.display = 'flex';
                    break;
            }
        });
    }
});
