// dark mode
// Rubén Zempoalteca
// 11.02.2024

const contenido = document.querySelectorAll(".box");
const eventos = document.querySelector(".events");
const tiempo = document.querySelector(".weather");
const menu = document.querySelector("nav");
const pie = document.querySelector("footer");
// const mensaje = document.querySelector("#hero-msg");

document.getElementById('switching').addEventListener('click', function() {
    if ( document.getElementById('switching').checked ) {

    //   alert("Activado");

      eventos.style.background = "#000000";
      tiempo.style.background = "#000000";
      menu.style.background = "#000000";
      pie.style.background = "#000000";
    //   mensaje.style.background = "#000000";
      for (let i = 0; i < contenido.length; i++) {
        contenido[i].style.background = "#000000";
      }
   

      

    } else {

        // alert("Desactivado");

        eventos.style.background = "#006599";
        tiempo.style.background = "#006599";
        menu.style.background = "#006599";
        pie.style.background = "#006599";
        for (let i = 0; i < contenido.length; i++) {
            contenido[i].style.background = "#006599";
          }

        // identificando el tamaño dela pantalla
        // var medium = window.matchMedia("(min-width: 550px)");
        // var large = window.matchMedia("(min-width: 950px)");

        // mensaje.style.background = "#ffffff";

        // if (medium.matches){
        //     mensaje.style.background = "#424242";
        // } 
        
        // if (large.matches){
        //     mensaje.style.background = "#ff6817";
        // } 


      
    }
  });