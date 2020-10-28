let content = document.getElementById('burger_content');
let burgerBtn = document.getElementById('burger_button');
let shadow = document.getElementById('burger_shadow');
let shadowHide = document.querySelector('burger_shadow--active');

burgerBtn.addEventListener('click', () => {
    content.classList.toggle('burger_translate');
    shadow.classList.toggle('burger_shadow--active');
    document.body.classList.toggle('overflow_Y');
    burgerBtn.classList.toggle('burger_button_rotate');
})
shadow.onclick = () => {
    content.classList.remove('burger_translate');
    shadow.classList.remove('burger_shadow--active');
    document.body.classList.remove('overflow_Y');
    burgerBtn.classList.remove('burger_button_rotate');
}