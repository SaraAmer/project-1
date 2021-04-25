   //select all sections in the document
let sections = document.querySelectorAll('section');

function dynamicMenu(){ 
 //get the menue
  let nav = document.getElementById('navbar__list')
 //loop on the sections to add link by thier number
  sections.forEach((section)=>{
    //create new list
     let list = document.createElement('li') 
    //craete new anchor   
     let link = document.createElement('a')
    //append the anchor to the list
     list.appendChild(link)
    //get the attriibute on the section to name the anchor
     let data = section.getAttribute('data-nav')
     //set the data-nav to the text of the anchor
     link.textContent=data
     //add on click action on the anchor to navigate to thr section
     link.addEventListener('click' , (e)=>{
        section.scrollIntoView({"behavior": "smooth"});
})
   nav.appendChild(list);
});
}

function activeSection(){
    //get all of the anchors in the document
   let links = document.querySelectorAll('a');
    //add n scroll event on the window to determine the active section 
   window.addEventListener('scroll' , (e)=>{
      for(section of sections){
        //get the position of the section
         let position = section.getBoundingClientRect();
         if(position.top>=0 && position.top < 250){
         //if the section is in the specific postion give it active class to be different
          section.classList.add('active-class');    
           links.forEach((link)=>{
           //get the text of the anchor and if it's simillar to the active section change its background 
           //to make it active too
               if(link.textContent===section.getAttribute('data-nav')){
                     link.style.background="blue"
            }
               else {
                     link.style.background="white"
              }  
             }) 
    
            }
         else {
              section.classList.remove('active-class')
            }
    
      
         }
     
         });
}
//calling the functions to excute
dynamicMenu();
activeSection();
