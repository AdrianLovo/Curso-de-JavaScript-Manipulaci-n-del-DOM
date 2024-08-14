<style>
.curso {
    color: #1E90FF;
}
.seccion {
    color: #FF8C00;
}
.clase {
    color: #32CD32;
}
</style>

# <span class="curso"> Curso de JavaScript: Manipulación del DOM</span>




## <span class="seccion"> Entendiendo el DOM </span>

### <span class="clase" >1. ¿Para qué aprender JavaScript? </span>
Aprender de inicio que es el DOM, seleccionar elementos del DOM, cambiarles estilos, mostrar, ocultar. Como funcionan las APIS.

### <span class="clase"> 2. ¿Qué es el DOM y Window Object? </span>
El DOM se puede entender como una web API. 
Window es diferente del DOM.

```
    Load HTML → Parse HTML → Create DOM tree → Display
                    ↓           ↑
                Load CSS   → Parse CSS     
```

### <span class="clase"> 3. Explorando nodos del DOM </span>
La diferencia entre window y document. Window contiene metodos particulares de la ventana en que me encuentro, tambien elementos como la cache.
El window contienen dentro de si el document, window es el objeto padre.



## <span class="seccion"> Seleccionando y Accesando a Elementos del DOM </span>

### <span class="clase"> 4. Consultando el DOM con `getElementById` y `querySelector` </span>   
Obtener elemento de forma única por su id:
Los querySelector es mas lento que getElement(s)By

```javascript
document.getElementById(NombreId)               //Elemento por identificador
document.getQuerySelector(Identificador)        //Elemento por Id,Clase. Solamente trae el primer elemento en case de existir varios
document.getElementsByClassName(Clase);         //Coleccion de elementos que tengan la clase
document.getElementsByTagName(elementoHTML);    //Elementos del DOM que tengan la etiqueta p, span, div etc
document.querySelectorAll(SelectorCSS);         //Todos los elementos que contengan la clase, retorna "NodeList"
```

### <span class="clase"> 5. Navegacion efectiva entre nodos </span>   
Navegar entre elementos del DOM (TraversingDOM)

```javascript
const parent = document.getElementById('parent');


const children = parent.firstChild;                             // live HTMLCollection
const childNodes = parent.childNodes;                           // live NodeList
const firstElementChild = parent.firstElementChild;             // non-live HTMLCollection
const lastChild = parent.lastChild;                             // live NodeList
const lastElementChild = parent.lastElementChild;               // non-live HTMLCollection
const previousSibling = parent.previousSibling;                 // live NodeList
const previousElementSibling = parent.previousElementSibling;   // non-live HTMLCollection
const nextSibling = parent.nextSibling;                         // live NodeList
const nextElementSibling = parent.nextElementSibling;           // non-live HTMLCollection
```


## <span class="seccion"> Manipulando Elementos del DOM </span>

### <span class="clase"> 6. Moificando atributos y propiedades </span>
JavaScript nos permite poder modificar atributos y propiedades de nuestros elementos del DOM
Los atributos reflejan el estado inicial del DOM, que es distinto a cuando nosotros los modificamos

### <span class="clase"> 7. Moificando texto en HMTL </span>
```javascript
const title = document.querySelector('#app-title');
title.textContent = "Nuevo texto";
title.innerText = "Este es otro titulo";
```

### <span class="clase"> 8. Moificando estilos en HMTL </span>
`.style`: Esta propiedad agrega estilos inline en la etiqueta (Reescribe su especificidad por su peso)

```javascript
const title = document.querySelector('h1');
title.style.color = "red";              //Cambiar el color
title.style.backgroundColor = "red";    //Cambiar el backgroundcolor
title.style.fontSize = "25px";          //Cambiar el tamaño
title.className;                        //Obtener la clase que tiene
title.className = "nuevo";              //Asignar una clase, borra las clases que previamente tenga el elemento
```

### <span class="clase"> 9. Moificando la visibilidad de elementos HMTL </span>

```javascript
const menu = document.getElementById('app-title');
menu.classList.toggle('invisible');         //Valida si el elemento posee la clase y la agrega o quita segun el caso
menu.classList.add('invisible');            //Agrega la clase
menu.classList.remove('invisible');         //Elimina la clase
menu.classList.contains('invisible');       //Retorna true o false si el elemento contiene la clase
```

### <span class="clase"> 10. Creación de elementos con HTML Strings e insertAdjacentElement() </span>
Existen dos formas de agregar elementos en HTML con `innerHTML` o `insertAdjacentHTML`

```javascript
const contentArea = document.getElementById('contentArea');
contentArea.innerHTML = "<p>Este es un nuevo parrafo</p>";                              //Al momento de agregar la cadena lo convierte en un elemento HTML
contentArea.insertAdjacentHTML('beforebegin', '<p>Este es otro parrafo nuevo</p>');     // Antes del elemento en si
contentArea.insertAdjacentHTML('afterbegin', '<p>Este es otro parrafo nuevo</p>');      //Dentro del elemento, antes de su primer hijo
contentArea.insertAdjacentHTML('beforeend', '<p>Este es otro parrafo nuevo</p>');       //Dentro del elemento, después de su último hijo
contentArea.insertAdjacentHTML('afterend', '<p>Este es otro parrafo nuevo</p>');        //Después del elemento en sí
```

### <span class="clase"> 11. Agregando elementos con `innerHTML` e `insertAdjacentHTML()` </span>
```javascript
const listArea = document.getElementById('listArea');       
listArea.innerHTML += '<li>Item 5</li>';                        //Cuando agregamos elementos con innerHTMl todo el contenido de listArea se ve modificado afectando el performance
listArea.insertAdjacentHTML('beforeend','<li>Item 6</li>');     //Solamente agrega el nuevo elemento sin reenderizar todos los hijos del elemento
```

### <span class="clase"> 12. Creacion de elementos con `createElement()` </span>
Sirve para crear elementos sin necesidad de utilizar strings, nos permite agregar elementos sin necesidad de sustituirlos sin afectar el performance
```javascript
const newPElement = document.createElement('p');    //Indicar el tipo de elemento a crear
contentArea.append(newPElement);                    //Agraga el elmento al final
contentArea.prepend(newPElement);                   //Agrega el elemento al inicio
contentArea.before(newPElement);                    //Agrega el elemento antes de otro
contentArea.aftre(newPElement);                     //Agrega el elemento despues
```

### <span class="clase"> 13. Remover elementos con `remove()` y `removeChild()` </span>
```javascript
const firstItem = document.querySelector('li');         
firstItem.remove();                                     //Remueve el elemento
const listArea = document.getElementById('listArea');
listArea.removeChild(listArea.firstElementChild);       //De la lista se remueve el primer elemento
```

### <span class="clase"> 14. Clonación y reemplazo de elementos con `CloneNode` y `replaceChild` </span>
```javascript
const contentArea = document.querySelector('#contentArea');
const originalP = contentArea.querySelector('p');
const clonedP = originalP.cloneNode(true);                  //Clonando elemento
clonedP.id = "prueba_2";                                    //Asignando un nuevo id
clonedP.textContent = "Este es un nuevo texto";             //Modificando el texto

contentArea.append(clonedP);
contentArea.replaceWith(clonedP);                           //Reemplaza el elemento
```


## <span class="seccion"> Manipulando Eventos en el DOM </span>

### <span class="clase"> 15. Entendiendo eventos y tipos: Burbuja, Captura y Propagación </span>
Tipos de ventos: Mouse, Teclado, Window del navegador, Formulario, Tactiles, Etc
Flujo de un Evento: Capturing, Target, Bubling

### <span class="clase"> 16. Agregar y eliminar escuchadores de eventos o `Event Listeners` </span>
```javascript
const container = document.querySelector('.container');
container.addEventListener('mouseover', ()=> {                  //Recibe dos parametros el evento y que hara
    container.style.backgroundColor = 'blue';
});

const button = document.querySelector('button');
button.addEventListener('click', ()=> {                         //Declarar el evento
    alert('Button clicked');
});

const buttonClickCallback = () => {                             //Declarar el evento como un callback
    alert('Button Clicked');
}

button.addEventListener('click', buttonClickCallback);          //Primero agrega el evento
setTimeout(() => {
    button.removeEventListener('click', buttonClickCallback)    //Despues de X en milisegundos tiempo quita el evento
}, 2000);
```

### <span class="clase"> 17. El objeto evento o `eventObject` </span>
Los eventos en JavaScript son objetos, podemos saber que tipo de elemento genero el evento, que elemento 
```javascript
const button = document.querySelector('button');
const buttonClicked = (event) => {
    console.log(event);                     //El evento
    console.log(event.target);              //El elemento que genero el evento
    console.log(event.target.id);           //El id del elemento
    console.log(event.target.textContent);  //El texto del elemento
}
button.addEventListener('click', buttonClicked);
```

### <span class="clase"> 18. Manejo de entradas de formulario y validacion </span>
```javascript
const form = document.getElementById('myForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();                         //Quitamos el comportamiento predeterminado del form
    const name = form.elements['name'].value;       //Obtener el value segun el name del input
    console.log(name);
})
```

### <span class="clase"> 19. Delegación de eventos y prevención de comportamiento predeterminado </span>
Sirve para agregar un evento a la etiqueta padre y delegar la responsabilidad a la etiqueta padre en lugar de crear un evento para todos los hijos y que estos manejen el evento
```javascript
const listItems = document.querySelectorAll('li');              //Forma tradicional agregando el evento a cada item
listItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.target.classList.toggle('highlight');
    })
});

const list = document.querySelector('ul');                      //El elemtno padre esta escuchando 
list.addEventListener('click', (event) => {
    event.target.closest('li').classList.toggle('highlight');   //Obtener el target mas cercano de lo que puede ser un "li"
});
```


