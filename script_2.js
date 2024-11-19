document.addEventListener("DOMContentLoaded", () => {
  const cookieBox = document.querySelector(".contenedor");
  const buttons = document.querySelectorAll(".button");

  // Función para obtener una cookie específica
  const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      return parts.length === 2 ? parts.pop().split(';').shift() : null;
  };

  // Mostrar el banner si la cookie no existe
  if (!getCookie("cookieBy")) {
      cookieBox.classList.add("show");

      buttons.forEach((button) => {
          button.addEventListener("click", () => {
              cookieBox.classList.remove("show");

              if (button.id === "accept-cookies") {
                  document.cookie = "cookieBy=codinglab; max-age=" + 60 * 60 * 24 * 30;
              } else if (button.id === "decline-cookies") {
                  document.cookie = "cookieBy=declined; max-age=" + 60 * 60 * 24 * 30;
              }
          });
      });
  }
});
    