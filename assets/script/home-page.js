const body = document.querySelector('body');
const header = body.querySelector('#header');
const main = body.querySelector('#main');
const footer = body.querySelector('#footer');
const burgerIcon = body.querySelector('#burger-icon');
const xIcon = body.querySelector('#x-icon');

const icons = [burgerIcon, xIcon];

icons.forEach(icon => icon.addEventListener('click', () => {
    header.classList.toggle('open');
    main.classList.toggle('close');
    footer.classList.toggle('close');
    burgerIcon.classList.toggle('hidden');
    xIcon.classList.toggle('hidden');
}))