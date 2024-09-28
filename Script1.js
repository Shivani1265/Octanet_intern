        // Get elements from the DOM
        const todoForm = document.getElementById('todo-form');
        const todoInput = document.getElementById('todo-input');
        const todoList = document.getElementById('todo-list');

        // Event listener for form submission
        todoForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent page reload

            // Get the input value (task text)
            const taskText = todoInput.value.trim(); 

            // Ensure the input is not empty
            if (taskText !== "") {
                addTask(taskText); // Add task to the list
                todoInput.value = ''; // Clear input field
            }
        });

        // Function to add task
        function addTask(taskText) {
            // Create a new list item (li) for the task
            const taskItem = document.createElement('li');
            
            // Set the inner HTML of the task
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-btn">Delete</button>
            `;
            
            // Append the new task to the todo-list
            todoList.appendChild(taskItem);

            // Add event listener to the delete button
            taskItem.querySelector('.delete-btn').addEventListener('click', function() {
                deleteTask(taskItem);
            });
        }

        // Function to delete task
        function deleteTask(taskItem) {
            taskItem.remove(); // Remove the task from the DOM
        }
