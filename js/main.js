let navBar = document.querySelector('header .flex .navbar');
let mainMenu = document.querySelector('#mainMenu');

mainMenu.onclick = ()=>{
  navBar.classList.toggle('active');
}
window.onscroll = ()=>{
  navBar.classList.remove('active');
}