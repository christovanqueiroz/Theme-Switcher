const body = document.querySelector('body')
const switcher = document.querySelectorAll('.switcher div')
const button = document.querySelector('.button')
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');

switcher.forEach(btn => {
    btn.addEventListener('click', () => {
        body.classList.toggle('light')
    })
})

sun.addEventListener('click', () => {
    button.style.left = "51%";
    sun.classList.remove("hide");
    moon.classList.add("hide");
})

moon.addEventListener('click', () => {
    button.style.left = "42%";
    moon.classList.remove("hide");
    sun.classList.add("hide")
})

console.log(sun)