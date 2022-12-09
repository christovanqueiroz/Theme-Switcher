const body = document.querySelector('body')
const button = document.querySelector('.button')
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');

sun.addEventListener('click', () => {
    button.style.left = "51%";
    body.classList.toggle('light')
})

moon.addEventListener('click', () => {
    button.style.left = "42%";
    body.classList.toggle('light')
})
