let content = document.getElementById('burger_content');
let burgerBtn = document.getElementById('burger_button');

burgerBtn.addEventListener('click', () => {
    content.classList.toggle('burger_translate');
})