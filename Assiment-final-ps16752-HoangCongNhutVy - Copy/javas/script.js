
let conut = parseInt(sessionStorage.getItem('conut')) || 0;

const conutEl = document.querySelector('span');

conutEl.textContent = conut;

sessionStorage.setItem('conut', conut);

const plussOneButton = document.querySelector('.plusOne');

plussOneButton.addEventListener('click', () => {
    conut++;
    conutEl.textContent = conut;
    sessionStorage.setItem('conut', conut);
});