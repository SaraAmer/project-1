/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

//select all sections in the document
let sections = document.querySelectorAll('section');
//get the menue
let nav = document.getElementById('navbar__list')
//loop on the sections to add link by thier number
sections.forEach((section)=>{
    //create new anchor
let link = document.createElement('a')
//get the attriibute on the section to name the anchor
let data = section.getAttribute('data-nav')
link.textContent=data
link.addEventListener('click' , (e)=>{
section.scrollIntoView();
})
nav.appendChild(link);
});
let links = document.querySelectorAll('a');
window.addEventListener('scroll' , (e)=>{
for(section of sections)
{
let position = section.getBoundingClientRect();
if(position.top>=0 && position.top < 250)
{
   section.classList.add('active-class');

   links.forEach((link)=>{
    if(link.textContent===section.getAttribute('data-nav')){
        link.style.background="white"
    }
    else {
        link.style.background="blue"
    }
}) 
}


}


});
