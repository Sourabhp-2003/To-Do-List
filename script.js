// Add task when button is clicked
    document.getElementById('addTaskButton').addEventListener('click', function() {
        const taskInput = document.getElementById('taskInput');
        const taskList = document.getElementById('taskList');

        if (taskInput.value.trim() !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = taskInput.value;

            // ❌ delete button
            const deleteBtn = document.createElement('span');
            deleteBtn.textContent = " ❌";
            deleteBtn.style.cursor = "pointer";
            deleteBtn.style.color = "red";

            // remove the item when ❌ clicked
            deleteBtn.onclick = function() {
                taskList.removeChild(listItem);
            };

            listItem.appendChild(deleteBtn);
            taskList.appendChild(listItem);

            taskInput.value = '';
        }
    });
