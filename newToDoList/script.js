
const addButton = document.getElementById('add-button');
const newItemInput = document.getElementById('new-item');
const itemList = document.getElementById('item-list');

function addItem() {
    const newItemText = newItemInput.value.trim();
    if (newItemText) {
        const newItem = document.createElement('li');
        newItem.textContent = newItemText;

        // Create a checkbox for marking completion
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.classList.add('status-radio');

        // Toggle completed class on check
        checkBox.addEventListener('change', () => {
            newItem.classList.toggle('completed', checkBox.checked);
        });

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');

        deleteButton.addEventListener('click', () => {
            itemList.removeChild(newItem);
        });

        // Append elements in the correct order
        
        itemList.appendChild(newItem);
        newItem.append(checkBox, deleteButton);
        // newItem.appendChild(deleteButton);

        // Clear input field
        newItemInput.value = '';
    }
}

// Add event listeners outside to prevent duplication
addButton.addEventListener('click', addItem);
newItemInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addItem();
});
