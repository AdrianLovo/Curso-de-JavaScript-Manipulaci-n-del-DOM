const parent = document.getElementById('parent');
console.log(parent);

const children = parent.firstChild;
console.log(children);

const firstChild = parent.firstElementChild;
console.log(firstChild);

const lastChild = parent.lastElementChild;
console.log(lastChild);

const previousSibling = parent.previousElementSibling;  //Elemento hermano previo
console.log(previousSibling);

const nextSibling = parent.nextElementSibling;          //Elemento hermano siguiente
console.log(nextSibling);

// children; // live HTMLCollection
// childNodes; // live NodeList
// firstChild; // live NodeList
// firstElementChild; // non-live HTMLCollection
// lastChild; // live NodeList
// lastElementChild; // non-live HTMLCollection
// previousSibling; // live NodeList
// previousElementSibling; // non-live HTMLCollection
// nextSibling; // live NodeList
// nextElementSibling; // non-live HTMLCollection

const children2 = document.querySelector('li');
console.log(children2);

const parent2 = children2.parentNode;
console.log(parent2);

const grandParent = children2.parentElement;
console.log(grandParent);

const grandGrandParent = children2.closest('menu');
console.log(grandGrandParent);