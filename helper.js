let cart = JSON.parse(localStorage.getItem('cart')) || [];


const findItem = (id) => {
    const search = cart.find((item) => {
        return item.id === id;
    });

    return search;
};

const calculateSubtotal = () => {

    let total = 0;

    total = cart.map((cartItem) => {
        let searchitem = shopItemsData.find((item) => {
            return item.id === cartItem.id;
        });

        return searchitem.price * cartItem.quantity;
    }).reduce((x, y) => x + y, 0); 

    return total;
};

const clearCart = (page) => {
    cart = [];

    update(page);
};

const addCart = (id, page) => {
    const cartItem = findItem(id)

    cartItem ? cartItem.quantity++ : cart.push({id: id, quantity: 1}); 

    update(page);
};

const subtractCart = (id, page) => {
    const cartItem = findItem(id);

    if (cartItem) {
        cartItem.quantity > 1 ? cartItem.quantity-- : cart = cart.filter((item) => item.id !== cartItem.id);
    }

    update(page);
};

const update = (page) => {
    switch (page) {
        case 'index':
            updateIndex();
            break;
        
        case 'cart':

            break;
    
        default:
            console.log('Problems')
            break;
    }
};