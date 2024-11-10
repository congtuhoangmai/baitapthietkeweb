let quantity1 = 1;
let quantity2 = 1;
let quantity3 = 1;
let quantity4 = 1;
let quantity5 = 1;
let quantity6 = 1;
let quantity7 = 1;
let quantity8 = 1;
let gia1 = 0;
let gia2 = 0;
let gia3 = 0;
let gia4 = 0;
let gia5 = 0;
let gia6 = 0;
let gia7 = 0;
let gia8 = 0;

function updateCart() {
    let totalQuantity = 0;
    cart.forEach((cartItem) => {
        totalQuantity += cartItem.quantity;
    })

    return document.querySelector('.js-cart-count').innerHTML = `${totalQuantity}`;
}

/*modify quantity*/

function cong1() {
    quantity1 += 1;

    return document.querySelector('.js-quantity-1').innerHTML = `${quantity1}`;
}

function tru1() {
    if (quantity1 < 2) {
        return;
    }

    quantity1 -= 1;

    return document.querySelector('.js-quantity-1').innerHTML = `${quantity1}`;
}

function cong2() {
    quantity2 += 1;

    return document.querySelector('.js-quantity-2').innerHTML = `${quantity2}`;
}

function tru2() {
    if (quantity2 < 2) {
        return;
    }

    quantity2 -= 1;

    return document.querySelector('.js-quantity-2').innerHTML = `${quantity2}`;
}

function cong3() {
    quantity3 += 1;

    return document.querySelector('.js-quantity-3').innerHTML = `${quantity3}`;
}

function tru3() {
    if (quantity3 < 2) {
        return;
    }

    quantity3 -= 1;

    return document.querySelector('.js-quantity-3').innerHTML = `${quantity3}`;
}

function cong4() {
    quantity4 += 1;

    return document.querySelector('.js-quantity-4').innerHTML = `${quantity4}`;
}

function tru4() {
    if (quantity4 < 2) {
        return;
    }

    quantity4 -= 1;

    return document.querySelector('.js-quantity-4').innerHTML = `${quantity4}`;
}

function cong5() {
    quantity5 += 1;

    return document.querySelector('.js-quantity-5').innerHTML = `${quantity5}`;
}

function tru5() {
    if (quantity5 < 2) {
        return;
    }

    quantity5 -= 1;

    return document.querySelector('.js-quantity-5').innerHTML = `${quantity5}`;
}

function cong6() {
    quantity6 += 1;

    return document.querySelector('.js-quantity-6').innerHTML = `${quantity6}`;
}

function tru6() {
    if (quantity6 < 2) {
        return;
    }

    quantity6 -= 1;

    return document.querySelector('.js-quantity-6').innerHTML = `${quantity6}`;
}

function cong7() {
    quantity7 += 1;

    return document.querySelector('.js-quantity-7').innerHTML = `${quantity7}`;
}

function tru7() {
    if (quantity7 < 2) {
        return;
    }

    quantity7 -= 1;

    return document.querySelector('.js-quantity-7').innerHTML = `${quantity7}`;
}

function cong8() {
    quantity8 += 1;

    return document.querySelector('.js-quantity-8').innerHTML = `${quantity8}`;
}

function tru8() {
    if (quantity8 < 2) {
        return;
    }

    quantity8 -= 1;

    return document.querySelector('.js-quantity-8').innerHTML = `${quantity8}`;
}

/*popup*/

let popup1 = document.getElementById('popup1');

function openPopup1() {
    popup1.classList.add('open-popup');
}

function closePopup1() {
    popup1.classList.remove('open-popup');
}

let popup2 = document.getElementById('popup2');

function openPopup2() {
    popup2.classList.add('open-popup');
}

function closePopup2() {
    popup2.classList.remove('open-popup');
}

let popup3 = document.getElementById('popup3');

function openPopup3() {
    popup3.classList.add('open-popup');
}

function closePopup3() {
    popup3.classList.remove('open-popup');
}

let popup4 = document.getElementById('popup4');

function openPopup4() {
    popup4.classList.add('open-popup');
}

function closePopup4() {
    popup4.classList.remove('open-popup');
}

let popup5 = document.getElementById('popup5');

function openPopup5() {
    popup5.classList.add('open-popup');
}

function closePopup5() {
    popup5.classList.remove('open-popup');
}

let popup6 = document.getElementById('popup6');

function openPopup6() {
    popup6.classList.add('open-popup');
}

function closePopup6() {
    popup6.classList.remove('open-popup');
}

let popup7 = document.getElementById('popup7');

function openPopup7() {
    popup7.classList.add('open-popup');
}

function closePopup7() {
    popup7.classList.remove('open-popup');
}

let popup8 = document.getElementById('popup8');

function openPopup8() {
    popup8.classList.add('open-popup');
}

function closePopup8() {
    popup8.classList.remove('open-popup');
}




