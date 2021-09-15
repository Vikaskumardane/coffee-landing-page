
// HEADER SECTION JS 

let navbar = document.querySelector('.navbar'); // SECTION FOR NAV BAR

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    searchItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container'); //SECTION FOR CART BAR

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchItem.classList.remove('active');
}

let searchItem = document.querySelector('.search-form');  // SECTION FOR SEARCH BAR

document.querySelector('#search-btn').onclick = () => {
    searchItem.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

window.onscroll = () => {     //The scroll event fires when the document view or an element has been scrolled,
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchItem.classList.remove('active');
}

// HEADER SECTION ENDS HERE

