const container = document.querySelector('.container');
const button = document.querySelector('button');

container.addEventListener('mouseover', ()=> {     //Recibe dos parametros el evento y que hara
    container.style.backgroundColor = 'blue';
});
container.addEventListener('mouseout', ()=> {
    container.style.backgroundColor = 'red';
});

// button.addEventListener('click', ()=> {
//     alert('Button clicked');
// });

const buttonClickCallback = () => {
    alert('Button Clicked');
}

button.addEventListener('click', buttonClickCallback);
setTimeout(() => {
    button.removeEventListener('click', buttonClickCallback)        //Quitar el evento
}, 2000);