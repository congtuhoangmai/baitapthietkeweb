cart = [];

function addToCart1() {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (cartItem.id === '1') {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += quantity1;
    } else {
        cart.push(products[0]);
        products[0].quantity = quantity1;
    }

    updateCart();
    renderCart();
}

function addToCart2() {

    let matchingItem;

    cart.forEach((cartItem) => {
        if (cartItem.id === '2') {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += quantity2;
    } else {
        cart.push(products[1]);
        products[1].quantity = quantity2;
    }

    updateCart();
    renderCart()
}

function addToCart3() {
    

    let matchingItem;

    cart.forEach((cartItem) => {
        if (cartItem.id === '3') {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += quantity3;
    } else {
        cart.push(products[2]);
        products[2].quantity = quantity3;
    }

    updateCart();
    renderCart()
}

function addToCart4() {
   

    let matchingItem;

    cart.forEach((cartItem) => {
        if (cartItem.id === '4') {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += quantity4;
    } else {
        cart.push(products[3]);
        products[3].quantity = quantity4;
    }

    updateCart();
    renderCart();
}

function addToCart5() {

    let matchingItem;

    cart.forEach((cartItem) => {
        if (cartItem.id === '5') {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += quantity5;
    } else {
        cart.push(products[4]);
        products[4].quantity = quantity5;
    }

    updateCart();
    renderCart();
}

function addToCart6() {


    let matchingItem;

    cart.forEach((cartItem) => {
        if (cartItem.id === '6') {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += quantity6;
    } else {
        cart.push(products[5]);
        products[5].quantity = quantity6;
    }

    updateCart();
    renderCart();
}

function addToCart7() {
   

    let matchingItem;

    cart.forEach((cartItem) => {
        if (cartItem.id === '7') {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += quantity7;
    } else {
        cart.push(products[6]);
        products[6].quantity = quantity7;
    }

    updateCart();
    renderCart();
}

function addToCart8() {

    let matchingItem;

    cart.forEach((cartItem) => {
        if (cartItem.id === '8') {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += quantity8;
    } else {
        cart.push(products[7]);
        products[7].quantity = quantity8;
    }

    updateCart();
    renderCart();
}

function renderCart() {

    let carthtml = '';
    cart.forEach((cartItem) => {

        carthtml += 
        `
            <div style="
                display: flex;
                margin-bottom: 10px;
                ">
                <img style="width: 100px;
                        height: 100px;
                        margin-right: 10px;
                    " src="${cartItem.image}">
                <div>
                    <p>${cartItem.name}</p>
                    <p>Giá: ${(cartItem.price * cartItem.quantity)}</p>
                    <p>Số lượng: ${cartItem.quantity}</p>
                    <div class="js-remove-button" style="
                        background-color: rgb(219, 144, 135);
                        color: white;
                        width: 150px;
                        border-radius: 5px;
                        height: 28px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-top: 5px;
                        cursor: pointer;
                    " data-product-id="${cartItem.id}"
                    >Xóa sản phẩm</div>
                </div>
            </div>
        `

    });
    
    document.querySelector('.js-cart-sidebar-mid-yes').innerHTML = carthtml;

    document.querySelectorAll('.js-remove-button').forEach((button) => {
        button.addEventListener('click', () => {
            let productId = button.dataset.productId;
            
            removeFromCart(productId);
            renderCart();
        })
    })
}

function removeFromCart(productId) {
    let newCart = [];
    cart.forEach((cartItem) => {
        if (cartItem.id !== productId) {
            newCart.push(cartItem);
        }
    })

    cart = newCart;
    updateCart();
}





