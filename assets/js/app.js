"use strict"; /* permet notamment de voir certaines erreurs masquées */
let editableImg = document.getElementById('editable-img');
let rotateLeftBtn = document.getElementById('rotate-left-btn');
let rotateRightBtn = document.getElementById('rotate-right-btn');
let moveLeftBtn = document.getElementById('move-left-btn');
let moveRightBtn = document.getElementById('move-right-btn');
let angle = 0;
let init;
let xPosition = 0; /* xPosition représente le décalage horizontal */

//editableImg.style.position = 'relative';



/***** Déclaration de la fonction *****/ 
const rotateLeft = () => {   
    angle -= 90;   
    editableImg.style.transform = `rotate(${angle}deg)`;     
    /* rappel toggle permet d'ajouter/retirer une classe */
}

/******************** Exécution de la fonction *************************/
rotateLeftBtn.addEventListener('click', () => {
    rotateLeft(); 
 })
 

/***** Déclaration de la fonction *****/ 
const rotateRight = () => {      
    angle += 90;   
    editableImg.style.transform = `rotate(${angle}deg)`; 
}

/******************** Exécution de la fonction *************************/
rotateRightBtn.addEventListener('click', () => {
    rotateRight(); 
 })
 

/***** Déclaration de la fonction *****/ 
const moveLeft = () => { 
    xPosition -= 5;  /* décalage vers la gauche de 5px */   
    editableImg.style.left = `${xPosition}px`; 
    console.log(xPosition);
}

/********* Ajout d'un écouteur et exécution de la fonction ***************/
moveLeftBtn.addEventListener('click', () => {
    moveLeft();
})

/***** Déclaration de la fonction *****/ 
const moveRight = () => { 
    xPosition += 5;  /* décalage vers la droite de 5px */   
    editableImg.style.left = `${xPosition}px`;     
}

/********* Ajout d'un écouteur et exécution de la fonction ***************/
moveRightBtn.addEventListener('click', () => {
    moveRight();
})


