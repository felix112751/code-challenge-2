document.addEventListener('DOMContentLoaded', function() {
    const itemInput = document.getElementById('itemInput');
    const addItemBtn = document.getElementById('addItemBtn');
    const markPurchasedBtn = document.getElementById('markPurchasedBtn');
    const clearListBtn = document.getElementById('clearListBtn');
    const itemList = document.getElementById('itemList');

    
    let items = [];
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
            itemList.appendChild(li);
        });
    }


    function addItem() {
        const newItemName = itemInput.value.trim();
        if (newItemName !== '') {
            items.push({ name: newItemName, purchased: false });
            renderItems();
            itemInput.value = '';
        }
    }



    function togglePurchased(index) {
        items[index].purchased = !items[index].purchased;
        renderItems();
    }



    
    addItemBtn.addEventListener('click', addItem);
    

    markPurchasedBtn.addEventListener('click', () => {
        items.forEach((item) => {
            item.purchased = true;
        });
        renderItems();
    });


    clearListBtn.addEventListener('click', () => {
        items = [];
        renderItems();
    });
});