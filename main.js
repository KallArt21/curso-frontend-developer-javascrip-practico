const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu (){
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside() {
    //esta variable es para realizar una pregunta si es que esta activo nuestro menu mobile 
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    //estamos asignando el valor booleano correspondiente si esta la clase inactive en el evento de la clase desktopMenu
    const isDekstopMenuClosed = desktopMenu.classList.contains('inactive');
    //Estamos preguntando si el menu mobile esta abierto, si es verdad lo cerramos y se me activa las ordenes de carrito
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    //Estamos preguntando si el menu desktop esta abierto, si es verdad lo cerramos y se me activa las ordenes de carrito
    if (!isDekstopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}