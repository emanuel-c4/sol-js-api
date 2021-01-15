// Programa principal
// Demana permís a l'usuari per a notificar i després inicia
// el compte enrere de 5 segons
let permiso = Notification.permission;
if (permiso == 'default') {
  Notification.requestPermission().then((resp) => {
    if (resp == 'granted') {
      cuenta(5, 1000);
    }
  });
} else if (permiso == 'granted') {
  cuenta(5, 1000);
}

/**
 * Timeout que retorna una promesa
 */
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

/**
 * Mostra la notificaci
 */
function mostrarNotificacion() {
  let n = new Notification('Información', {
    body: 'Se ha publicado un video nuevo',
  });
  n.addEventListener('click', (ev) => {
    window.open('http://localhost:5500/js/practiques/pr-js-api/p2-video.html');
  });
}

/**
 * Per a pintar en pantalla el compte enrere i quan acabe mostrar la notificació
 */
async function cuenta(tiempo, interval) {
  while (tiempo >= 0) {
    await timeout(interval);
    document.body.innerHTML = tiempo--;
  }
  mostrarNotificacion();
}
