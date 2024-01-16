
const shop = document.querySelector('.shop');
const cartSideview = document.querySelector('.cart-sideview');
const itemList = document.querySelector('.item-list');
const totalPrice = document.querySelector('.total-price');
const itemCounter = document.querySelector('.item-counter');

// Render shop item cards.
const init = () => {
    shop.innerHTML = shopItemsData.map((item) => {
        return`
        <div class="card">
            <img src="${item.img}" alt="Casual Shirt">
            <div class="info">
                <h3>${item.name}</h3>
                <hr>
                <p class="desc">${item.desc}</p>
                <p class="price">${item.price}</p>
            </div>
            <div onclick= "addCart('${item.id}', 'index')" class="btn add">Add to cart</div>
        </div>       
        `;
    }).join('');
};

//Toggle card sideview
const toggleSideview = () => {
    cartSideview.classList.toggle('cart-display')
};
// Cart sidebar
const updateIndex = () => {          
    itemList.innerHTML = cart.map((cartItem) => {       
        let searchItem = findShopItem(cartItem.id);
        
        return `
        <div class="item-container">
            <hr>
            <img src="${searchItem.img}" alt="${searchItem.name.trim()}">
            <p class="item-price price">${searchItem.price * cartItem.quantity}</p>
            <div class="qua-container">
                <i onclick= "subtractCart('${searchItem.id}', 'index')" class="bi bi-dash-circle decrease"></i>         
                <div class="quantity">${cartItem.quantity}</div>
                <i onclick= "addCart('${searchItem.id}', 'index')" class="bi bi-plus-circle increase"></i>
            </div>
        </div>
        `;
    }).join('');

    itemCounter.innerHTML = cart.reduce((acc, item) => acc + item.quantity, 0);
    totalPrice.innerHTML = calculateSubtotal();
};

init();
updateIndex();