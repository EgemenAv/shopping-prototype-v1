let animationPlayed = false;

const cartList = document.querySelector('.cart-list');
const subTotalPrice = document.querySelector('.sub-total');

const updateCart = () => {
    cartList.innerHTML = cart.map((cartItem) => {
        let searchItem = findShopItem(cartItem.id);

        return`
        <div class="cart-container${animationPlayed ? '' : ' slide--faze-in'}">
            <img src="${searchItem.img}" alt="${searchItem.name.trim()}">
            <div class="cart-info">
                <h3>${searchItem.name}</h3>
                <p>Price: <span class="price">${searchItem.price}</span></p>
            </div>
            <div class="qua-container">
                <i onclick= "subtractCart('${searchItem.id}', 'cart')" class="bi bi-dash-circle decrease"></i>         
                <div class="quantity">${cartItem.quantity}</div>
                <i onclick= "addCart('${searchItem.id}', 'cart')" class="bi bi-plus-circle increase"></i>
            </div>
            <p class="total price">${searchItem.price * cartItem.quantity}</p>
        </div>
        `;
    }).join('');

    subTotalPrice.innerHTML = calculateSubtotal();

    animationPlayed = true;
};

updateCart();