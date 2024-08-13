const listItems = document.querySelectorAll('li');
listItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.target.classList.toggle('highlight');
    })
});

const list = document.querySelector('ul');
list.addEventListener('click', (event) => {
    event.target.closest('li').classList.toggle('highlight');                 //Obtener el target mas cercano de lo que puede ser un "li"
});