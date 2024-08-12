const firstItem = document.querySelector('li');
firstItem.remove();

const listArea = document.getElementById('listArea');
listArea.removeChild(listArea.firstElementChild);
