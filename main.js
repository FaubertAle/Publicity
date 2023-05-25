// alert('linkeado');

const viewport = document.body.getBoundingClientRect();
const card = document.querySelector('.card');

const logo = document.querySelector('.logo');
const spiral = document.querySelector('#spiral');
const mask = document.querySelector('.mask');
const photos = document.querySelector('.photos');



if (viewport.height < viewport.width) {
    card.style.width = `${viewport.height*3/4}px`;
    console.log();
}
else{
    card.style.height = `${viewport.width*4/3}px`;
    console.log('larga');
}

spiral.style.height = `${card.clientWidth}px`;

logo.addEventListener('click',()=>{
    logo.classList.toggle('active');
    mask.classList.toggle('active');
    spiral.classList.toggle('active');
    photos.classList.toggle('active');
})
// function inicio(e){
//     con

// }
