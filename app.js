window.addEventListener('load', function(){

//Get person 
const person = prompt("Please enter your name ...");
const personCapitalized = person.charAt(0).toUpperCase() + person.slice(1);
document.getElementById("name").textContent = personCapitalized;

//Flip card
const card = document.querySelector('.card');
const overlay = document.querySelector('.overlay');

card.addEventListener('click', function(){
  card.classList.toggle('is-flipped');
  
  
});

});