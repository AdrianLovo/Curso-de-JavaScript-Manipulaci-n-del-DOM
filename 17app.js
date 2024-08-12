const button = document.querySelector('button');

const buttonClicked = (event) => {
    console.log(event);                     //El evento
    console.log(event.target);              //El elemento que genero el evento
    console.log(event.target.id);           //El id del elemento
    console.log(event.target.textContent);  //El texto del elemento
}

button.addEventListener('click', buttonClicked);