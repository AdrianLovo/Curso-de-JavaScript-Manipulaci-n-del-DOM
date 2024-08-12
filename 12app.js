const newPElement = document.createElement('p');
newPElement.textContent = 'Fuí creado con createElement';

const contentArea = document.getElementById('contentArea');
contentArea.append(newPElement);    



const newItem = document.createElement('li');
newItem.textContent = "Item 5";

const listArea = document.getElementById('listArea');
listArea.append(newItem);
listArea.before(newItem);
listArea.after(newItem);