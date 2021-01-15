// Programa principal

let vd = document.querySelector('video');
let info = document.querySelector('span');
vd.play();

// Stop/Start en cada click amb el botó esquerre
vd.addEventListener('click', (ev) => {
  if (vd.paused) vd.play();
  else vd.pause();
});

// Mostrar la durada del video amb el botó dret
vd.addEventListener('contextmenu', (ev) => {
  ev.preventDefault();

  info.innerHTML =
    'Duracion: ' +
    parseInt(vd.duration / 60) +
    ':' +
    parseInt(vd.duration % 60);
});
