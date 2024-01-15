
const shop = document.querySelector('.shop');
const cartIcon = document.querySelector('.cart');
const cartSideview = document.querySelector('.cart-sideview');

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
            <div class="add">Add to cart</div>
        </div>       
        `;
    }).join('');
}

const sideview = () => {
    cartSideview.classList.toggle('cart-display')
}

init();


