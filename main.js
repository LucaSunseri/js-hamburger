const openMobileMenu = document.querySelector('.fa-bars');
const closeMobileMenu = document.querySelector('.fa-times');
const hambuger = document.querySelector('.hamburger-menu');

// Open mobile menu
openMobileMenu.addEventListener('click',function() {

  hambuger.classList.add('active');

});

// Close mobile menu
closeMobileMenu.addEventListener('click',function() {

  hambuger.classList.remove('active');

});