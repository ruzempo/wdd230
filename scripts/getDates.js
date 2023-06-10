
 function footerDate(){
    /* set current year in footer */
    const currentDate = new Date();
    document.querySelector('#year').textContent = currentDate.getFullYear();
    }

function lastmodified(){
    /* set date the document was last modified*/
    document.querySelector('#lastModified').textContent = document.lastModified;
    }   





/* Current date in footer */
footerDate();

/* last modified */
lastmodified();