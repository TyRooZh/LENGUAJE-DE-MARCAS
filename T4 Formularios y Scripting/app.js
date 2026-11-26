console.log("Hola, como te llamas?")

const email = document.getElementById("email");
const emailPrueba = document.getElementById("emailPrueba");
const emailConfirmacion = document.getElementById("emailConfirmacion");
console.log(email);

email.addEventListener("input", function() {
    console.log("Correo actual: ", email.value);
})

function  validadCorreos() {
    const correoOriginal = emailPrueba.value;
    const correoRepetido = emailConfirmacion.value;

    if(correoOriginal !== correoRepetido) {
        console.log("Los correos no coinciden")
    } else {
        console.log("Los correos coinciden")
    }
}