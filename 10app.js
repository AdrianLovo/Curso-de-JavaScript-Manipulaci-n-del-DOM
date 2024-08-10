const contentArea = document.getElementById('contentArea');
contentArea.innerHTML = "<p>Este es un nuevo parrafo</p>";
contentArea.insertAdjacentHTML('beforeend', '<p>Este es otro parrafo nuevo</p>');