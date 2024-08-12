const contentArea = document.querySelector('#contentArea');
const originalP = contentArea.querySelector('p');
const clonedP = originalP.cloneNode(true);
clonedP.id = "prueba_2";
clonedP.textContent = "Este es un nuevo texto";

contentArea.append(clonedP);
contentArea.replaceWith(clonedP);
