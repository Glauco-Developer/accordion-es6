export class Accordion {
    constructor(accordion, heading) {
       this.accordion = accordion;
       this.heading = heading;
    }
    
    showContent() {
       
       const accordion = document.getElementById(this.accordion);
       const heading = accordion.querySelectorAll(this.heading);

       for(const item of heading){      

          item.addEventListener('click', () => { 
            
            // Call hideContent method
            this.hideContent(item, heading)
             
            item.classList.toggle('active');
 
            if(item.classList.contains('active')) {

                // Aria attributes
                item.setAttribute('aria-expanded','true');
                item.nextElementSibling.setAttribute('aria-hidden','false');
                            
                // Scroll into view
                item.scrollIntoView({ behavior: 'smooth'});
            }
 
          });
       };
    }    

    hideContent(item, heading) {
        for(const el of heading){                
            if(el !== item)
                el.classList.contains('active') ? el.classList.remove('active') : null;
        
            // Aria attributes
            el.getAttribute('aria-expanded') ? el.setAttribute('aria-expanded','false') : null;
            el.nextElementSibling.setAttribute('aria-hidden','true')
         };
    }
    
 }