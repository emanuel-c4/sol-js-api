document.querySelector('input').addEventListener('keydown', (ev) => {
  if (ev.key === 'Enter') {
    sessionStorage.setItem('usuario', ev.target.value);
    document.querySelector('span').innerHTML = sessionStorage.getItem(
      'usuario'
    );
  }
});
document.querySelector('span').innerHTML = sessionStorage.getItem('usuario');
