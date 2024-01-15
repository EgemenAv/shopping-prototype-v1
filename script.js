
const shop = document.querySelector('.shop');
const cartIcon = document.querySelector('.cart');
const cartSideview = document.querySelector('.cart-sideview');
const itemList = document.querySelector('.item-list');
const totalPrice = document.querySelector('.total-price');

let cart = [];

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
                <p class="price">$${item.price}</p>
            </div>
            <div onclick= "addCart('${item.id}')" class="btn add">Add to cart</div>
        </div>       
        `;
    }).join('');
};

//Toggle card sideview
const toggleSideview = () => {
    cartSideview.classList.toggle('cart-display')
};


const clearCart = () => {
    cart = [];

    updateSideview();
};

const findItem = (id) => {
    const search = cart.find((item) => {
        return item.id === id;
    });

    return search;
};

const addCart = (id) => {
    const cartItem = findItem(id)

    cartItem ? cartItem.quantity++ : cart.push({id: id, quantity: 1}); 

    updateSideview();
};

const subtractCart = (id) => {
    const cartItem = findItem(id);

    if (cartItem) {
        cartItem.quantity > 1 ? cartItem.quantity-- : cart = cart.filter((item) => item.id !== cartItem.id);
    }
    
    updateSideview();
};

const updateSubtotal = () => {

    let total = 0;

    total = cart.map((cartItem) => {
        let searchitem = shopItemsData.find((item) => {
            return item.id === cartItem.id;
        });

        return searchitem.price * cartItem.quantity;
    }).reduce((x, y) => x + y, 0); 

    totalPrice.innerHTML = total;
};

const updateSideview = () => {
    
    itemList.innerHTML = cart.map((cartItem) => {       
        let searchItem = shopItemsData.find((item) => {
            return item.id === cartItem.id;
        });
        
        return `
        <div class="item-container">
            <hr>
            <img src="${searchItem.img}" alt="${searchItem.name}">
            <p class="item-price price">${searchItem.price * cartItem.quantity}</p>
            <div class="qua-container">
                <i onclick= "subtractCart('${searchItem.id}')" class="bi bi-dash-circle decrease"></i>         
                <div class="quantity">${cartItem.quantity}</div>
                <i onclick= "addCart('${searchItem.id}')" class="bi bi-plus-circle increase"></i>
            </div>
        </div>
        `;
    }).join('');

    updateSubtotal();
};

init();
updateSideview();