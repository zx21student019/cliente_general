$(document).ready(function () {
    // Seleccionamos el botón de envío del formulario y le agregamos una función de clic
    $('#submit-button').click(function () {
        // Seleccionamos el radio button que ha sido seleccionado y obtenemos su valor
        var selectedGender = $('input[name="gender"]:checked');
        var genderValue = selectedGender.val();

        // Verificamos que se haya seleccionado un radio button antes de continuar
        if (selectedGender.length > 0) {
            // Creamos un mensaje que incluya el valor del radio button seleccionado
            var message = "Tu género es: " + genderValue;

            // Seleccionamos el contenedor de resultado y le agregamos el mensaje como texto
            $('#result').text(message);
        } else {
            // Si no se ha seleccionado ningún radio button, mostramos un mensaje de error
            alert("Por favor, selecciona tu género.");
        }
    });
});