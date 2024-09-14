document.addEventListener('DOMContentLoaded', function() { 
    const ftList = document.getElementById('ft_list');
    const newButton = document.getElementById('New');

    loadTodos();

    // Create new TODO
    newButton.addEventListener('click', function() {
        const todo = prompt('Create a new TO DO:');
        if (todo) {
            addTodo(todo);
            saveTodos();
        }
    });

    // Add new TODO
    function addTodo(todo) {
        const todoDiv = document.createElement('div');
        todoDiv.className = 'item';
        todoDiv.textContent = todo;

        // Add click to remove TODO
        todoDiv.addEventListener('click', function() {
            if (confirm('Do you want to remove this TO DO?')) {
                todoDiv.remove();
                saveTodos();
            }
        });

        // Add TODO to the top of the list
        ftList.insertBefore(todoDiv, ftList.firstChild);
    }

    // Save TODOs to cookies
    function saveTodos() {
        const todos = Array.from(ftList.children).map(function(item) {
            return item.textContent;
        });
        // Encode the JSON string to handle special characters in cookies
        document.cookie = `todos=${encodeURIComponent(JSON.stringify(todos))}; path=/;`;
    }

    // Load TODO list from cookies
    function loadTodos() {
        const cookies = document.cookie.split('; ');
        const todoCookie = cookies.find(cookie => cookie.startsWith('todos='));
        if (todoCookie) {
            // Decode the cookie value and parse JSON
            const todos = JSON.parse(decodeURIComponent(todoCookie.split('=')[1]));
            todos.forEach(addTodo);
        }
    }
});
