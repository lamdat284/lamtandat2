
//Menu


let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick =() => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
//Search-form
let searchform = document.querySelector('.search-form');

document.querySelector('#search-icon').onclick = () =>{
    searchform.classList.toggle('active');
}

//Shopping-form
let cartMain = document.querySelector('.shopping-cart');

document.querySelector('#cart-icon').onclick = () =>{
    cartMain.classList.toggle('active');
}
//Login-form
let Login = document.querySelector('.login-form');

document.querySelector('#login-icon').onclick = () =>{
    Login.classList.toggle('active');
}








// window.onscroll = () => {
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('acvive');
// }

// document.querySelector('#search-icon').onclick = () =>{
//     document.querySelector('#search-form').classList.toggle('active');
// }

// document.querySelector('#close').onclick = () =>{
//     document.querySelector('#search-form').classList.remove('active');
// }
