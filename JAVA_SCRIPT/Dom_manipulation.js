let mydiv = document.querySelector('#mydiv');

// let newelement = document.createElement('span');
// newelement.textContent = "Mayank Saini";

// mydiv.insertAdjacentElement('beforeend',newelement);

let parent = document.querySelector('#mydiv');
let child = document.querySelector('#fpara');
parent.removeChild(child);