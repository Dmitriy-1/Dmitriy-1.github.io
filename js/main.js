(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());


// Burger handler
(function () {
    
    const burgerItem = document.querySelector('.burger'); 
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav_close');
    //const menuLinks = document.querySelectorAll('.header__link');
   burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_activ');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_activ');
    })
 
}());

