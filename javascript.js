//Filter options
var section = document.getElementsByClassName('filter')[0]; //De section die we willen triggeren
var button = document.getElementsByClassName('Filterknop')[0]; //De knop voor de eventlistener
//End






//Filter functie
function Toggle() { //Funtie Toggle

    section.classList.toggle('filter-active'); //Toggle de section naar filter-active (css)

}

button.addEventListener('click', Toggle); //Eventlistener op de button


//Filter options
var section1 = document.getElementsByClassName('contactformulier')[0]; //De section die we willen triggeren
var button1 = document.getElementsByClassName('contactknop')[0]; //De knop voor de eventlistener
//End






//Filter functie
function Toggle2() { //Funtie Toggle

    section1.classList.toggle('formactive'); //Toggle de section naar filter-active (css)

}

button1.addEventListener('click', Toggle2); //Eventlistener op de button
