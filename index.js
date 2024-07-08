document.addEventListener('DOMContentLoaded', function() {

    const addItemBtn = document.getElementById('addItemBtn');
    const markPurchasedBtn = document.getElementById('markPurchasedBtn');
    const clearListBtn = document.getElementById('clearListBtn');
    const itemList = document.getElementById('itemList');

    let items = [];

    // Retrieve items from localStorage if present
    const storedItems = JSON.parse(localStorage.getItem('shoppingItem'));
    if (storedItems) {
        items = storedItems;
        renderItems();
    }

    const saveAndRender = () => {
        localStorage.setItem('shoppingItem', JSON.stringify(items));
        renderItems();
    }

    function renderItems() {
        itemList.innerHTML = '';

        items.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item.name;

            if (item.purchased) {
                li.classList.add('purchased');
            }

            li.addEventListener('click', () => {
                togglePurchased(index);
            });

            itemList.appendChild(li); // Corrected: append li, not 'li'
        });
    }

    function addItem() {
        const itemInput = document.getElementById('itemInput');
        const newItemName = itemInput.value.trim();
        if (newItemName !== '') {
            items.push({ name: newItemName, purchased: false });
            saveAndRender();
            itemInput.value = '';
        }
    }

    function togglePurchased(index) {
        items[index].purchased = !items[index].purchased;
        saveAndRender();
    }

    addItemBtn.addEventListener('click', addItem);

    markPurchasedBtn.addEventListener('click', () => {
        items.forEach((item) => {
            item.purchased = true;
        });
        saveAndRender();
    });

    clearListBtn.addEventListener('click', () => {
        items = [];
        saveAndRender();
    });

});
