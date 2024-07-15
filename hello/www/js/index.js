document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  //const browser = cordova.InAppBrowser.open("http://192.168.20.11:3000/", "_blank", 'location=no');

  // Agregar listener de mensaje para recibir mensajes desde InAppBrowser
  window.addEventListener('message', (event) => {
    console.log('Mensaje recibido:', event);
    if (event.origin !== "http://192.168.20.11:3000") {
      // Asegúrate de verificar el origen del mensaje por seguridad
      return;
    }
    if (event.data && event.data.action === 'CALL_CORDOVA_FUNCTION') {
      console.log('Llamando a la función de Cordova');
      callCordovaFunction();
    }
  }, false);
}

function callCordovaFunction() {
  // Aquí puedes poner el código de la función que deseas ejecutar en Cordova
  alert('Función de Cordova llamada desde React');
}
