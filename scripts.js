const burger = document.getElementById('burGer');
const burgerCont = document.getElementById('burgerContainer');
burger.addEventListener('click', () => {
    burgerCont.classList.toggle('active');
});

