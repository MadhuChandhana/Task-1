# Task-1
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="todo-container">
        <h1>To-Do App</h1>
        <div>
            <input type="text" id="taskInput" placeholder="Enter task...">
            <button onclick="addTask()">+</button>
        </div>
        <ul id="taskList"></ul>

        <button onclick="clearAll()" class="submit">Clear All</button>
    </div>

    <!------------------------------------SCRIPT----------------------------------------------------------->
    <script>
        // Get elements from the DOM
        const taskInput = document.getElementById('taskInput');
        const taskList = document.getElementById('taskList');

        // Function to add a new task
        function addTask() {
            const taskText = taskInput.value.trim();

            if (taskText !== '') {
                // Create a new list item
                const li = document.createElement('li');
                const taskTextSpan = document.createElement('span');
                taskTextSpan.textContent = taskText;
                taskTextSpan.classList.add('task-text');
                li.appendChild(taskTextSpan);

                // Add a checkbox for completion
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.addEventListener('change', function () {
                    taskTextSpan.classList.toggle('completed', this.checked);
                });
                li.appendChild(checkbox);

                // Add the list item to the task list
                taskList.appendChild(li);

                // Clear the input field
                taskInput.value = '';
            }
        }
        function clearAll() {
            // Remove all tasks from the task list
            taskList.innerHTML = '';
        }


    </script>
</body>

</html>
