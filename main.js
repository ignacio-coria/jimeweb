document.getElementById('myForm').addEventListener('submit', function(event) {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var mensaje = document.getElementById('mensaje').value;

    if (nombre === '' || email === '' || telefono === '' || mensaje === '') {
        alert('Todos los campos deben ser completados');
        event.preventDefault(); // Evita que el formulario se envíe
    }
});