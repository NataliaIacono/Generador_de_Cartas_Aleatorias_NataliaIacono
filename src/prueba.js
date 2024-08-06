const generarCarta = () => {
  console.log("prueba.js");
  
    let numero = document.querySelector('#numeroCarta');
    let numeroRandom = Math.floor(Math.random() * 12) + 1;       
  
    if (numeroRandom === 1) {
      numeroRandom = "A";
    } else if (numeroRandom === 12) {
      numeroRandom = "K";
    } else if (numeroRandom === 11) {
      numeroRandom = "Q";
    } else if (numeroRandom === 10) {
      numeroRandom = "J";
    }      
    numero.innerHTML = numeroRandom;

    const randomIcono = () => {
      let icono = document.querySelector('.iconTop');
      let iconoDos = document.querySelector('.iconBottom');
      let iconoRandom = Math.floor(Math.random() * 4) + 1;
      let iconoSeleccionado;
      if (iconoRandom === 1) {
        iconoSeleccionado = "♥";   
      } if (iconoRandom === 2) {
        iconoSeleccionado = "♦";  
      } if (iconoRandom === 3) {
        iconoSeleccionado = "♣";
      } if (iconoRandom === 4) {
        iconoSeleccionado = "♠";
      }
      if (iconoSeleccionado === "♥" || iconoSeleccionado === "♦") {
        icono.style.color = "red"; 
        iconoDos.style.color = "red";
      }
        if (iconoSeleccionado === "♠" || iconoSeleccionado === "♣") {
        icono.style.color = "black"; 
        iconoDos.style.color = "black";
      }
      iconoDos.innerHTML = iconoSeleccionado;
      icono.innerHTML = iconoSeleccionado;
      }
      
      randomIcono();
  }  

window.onload = () => {
    
    generarCarta();
        
  }

  setInterval(generarCarta, 10000);
  
  const boton = document.querySelector('.btn');
  boton.addEventListener("click", () => {
    generarCarta();
  });


  //Imput.

 const imputAncho = document.getElementById ('InputW');
 imputAncho.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const carta = document.querySelector('.card');
        carta.style.width = imputAncho.value + 'px';
    }
});

 const imputAlto = document.getElementById ('InputH');
 imputAlto.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const carta = document.querySelector('.card');
        carta.style.height = imputAlto.value + 'px';
    }
});


