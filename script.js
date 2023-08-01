
const burgerMenuElement = document.querySelector('.burger-menu');
const slideDownMenuElement = document.querySelector('.slide-down-menu');
let menuOpen = false;

burgerMenuElement.onclick = () => {
  if (!menuOpen) {
    slideDownMenuElement.classList.replace('menu-closed', 'menu-open');
    menuOpen = true; 
  } else {
    slideDownMenuElement.classList.replace('menu-open', 'menu-closed');
    menuOpen = false; 
  }
};
