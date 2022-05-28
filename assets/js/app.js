"use strict"; /* permet notamment de voir certaines erreurs masquées */
let editableImg = document.getElementById('editable-img');
let rotateLeftBtn = document.getElementById('rotate-left-btn');


let xPosition = 0; /* xPosition représente le décalage horizontal */



let moveLeftBtn = document.getElementById('move-left-btn');



/***** Déclaration de la fonction *****/ 
const rotateLeft = () => {      
    editableImg.style.transform = `rotate(-90deg)`;     
    /* rappel toggle permet d'ajouter/retirer une classe */
}


/***** Déclaration de la fonction *****/ 
const moveLeft = () => { 
    xPosition += 5;     
    editableImg.style.transform = `translateX(-${xPosition}px)`;     
    /* rappel toggle permet d'ajouter/retirer une classe */
}

moveLeftBtn.addEventListener('click', () => {
    moveLeft();
})


/********* Exécution de la fonction ***************/
rotateLeftBtn.addEventListener('click', () => {
   rotateLeft(); 
})
