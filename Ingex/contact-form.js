document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".u-form form");
    const submitButton = form.querySelector('button[type="submit"]');
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Evita el envío tradicional del formulario
      
      // Muestra el mensaje de confirmación
      alert("¡Mensaje enviado con éxito!");
  
      // Puedes limpiar el formulario si lo deseas
      form.reset();
    });
  });
  

  