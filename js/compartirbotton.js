function shareApp() {
  navigator.share({
    title: 'Mi aplicación',
    text: '¡Mira esta aplicación!',
    url: 'https://miaplicacion.com'
  })
    .then(() => console.log('Compartido'))
    .catch((error) => console.log('Error al compartir', error));
}
