let vd = document.querySelector('video');
let info = document.querySelector('span');
vd.play();
vd.addEventListener('click', (ev) => {
  if (vd.paused) vd.play();
  else vd.pause();
});
vd.addEventListener('contextmenu', (ev) => {
  ev.preventDefault();

  info.innerHTML =
    'Duracion: ' +
    parseInt(vd.duration / 60) +
    ':' +
    parseInt(vd.duration % 60);
});
