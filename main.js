const viewport = document.body.getBoundingClientRect();
const card = document.querySelector('.card');

const logo = document.querySelector('.logo');
const background = document.querySelector('#background');
const photos = document.querySelector('.photos');



if (viewport.height < viewport.width) {
    card.style.width = `${viewport.height*3/4}px`;
}
else{
    card.style.height = `${viewport.width*4/3}px`;
}

background.style.height = `${card.clientWidth}px`;

logo.addEventListener('click',()=>{
    logo.classList.toggle('active');
    background.classList.toggle('active');
    photos.classList.toggle('active');
})
