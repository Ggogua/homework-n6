let burgerContainer = document.getElementById('burger-container');
let toAddPhoto = document.getElementById('photo');
let overlap = document.getElementById('tatePhoto');
let rightList = document.getElementById('righter');

burgerContainer.addEventListener('click', () => {
    burgerContainer.classList.toggle('active');
    overlap.classList.toggle('overlap-2');
    rightList.classList.toggle('righter-2');
});

