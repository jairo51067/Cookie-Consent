// <!-- Este script contiene la lógica para el consentimiento de cookies -->
// <!-- Este script se carga en la página al abrirla -->
// <!-- Este script es necesario para que la cookie sea almacenada y se pueda utilizar en la próxima visita -->
// <!-- Este script también contiene la lógica para el botón de "Aceptar"-->

const cookieBox = document.querySelector(".contenedor"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  // if cookie contains codinglab it will be returned and below of this code will not run
  // Si la cookie contiene codinglab, se devolverá y el código que se muestra a continuación no se ejecutará
  // Check if cookie by "codinglab" already exists
  // Verificar si la cookie de "codinglab" ya existe
  if(document.cookie.includes("codinglab"))return;
  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      // if button has accept-cookies id
      // si el botón tiene id de aceptar cookies
      if(button.id == "accept-cookies"){
        // Set cookie with expiration date 30 days from now
        // Establecer cookie con fecha de caducidad dentro de 30 días
        document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};

// executeCodes function will be called on webpage load
// La función executeCodes se llamará al cargar la página web
window.addEventListener("load", executeCodes);


