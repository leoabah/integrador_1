const burger = document.getElementById('burGer');
const burgerCont = document.getElementById('burgerContainer');
burger.addEventListener('click', () => {
    burgerCont.classList.toggle('active');
});







function newFunction() {
    const form = document.getElementById("formAltas");

    const inputName = document.getElementById("userName");
    const inputPrice = document.getElementById("Price");
    const inputAge = document.getElementById("Age");
    const inputStock = document.getElementById("Stock");
    const inputFoto = document.getElementById("Foto");

    const Error = document.getElementById("ErrorMensaje");

    const regexName = /^[a-zA-Z\s]{3,}$/;
    const regexPrice = /^\d+(\.\d{1,2})?$/;
    const regexAge = /^\d+$/;
    const regexStock = /^\d+$/;
    const archivo = inputFoto.File[0];


    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!regexName.test(inputName.Value)) {
            Error.textContent = "Error: nombre invalido(Minimo 3 caracteres)";
            return;
        }

        if (!regexPrice.test(inputPrice.Value)) {
            Error.textContent = "Error precio invalidado";
            return;
        }

        if (!regexAge.test(inputAge.Value)) {
            Error.textContent = "Error edad invalida";
            return;
        }
        if (!regexStock.test(inputStock.Value)) {
            Error.textContent = "Error  stock invalidado";
            return;
        }
        if (inputFoto.Files.length === 0) {
            Error.textContent = "Error: eligir una imagen invalidado";
            return;
        }
        if (!archivo.type.startsWith("image/")) {
            Error.textContent = "Error invalidado";
            return;
        }

        Error.textContent = "";
        alert("Formulario enviado correctamente ✔")
        form.reset();

    });
}

newFunction();
 

function contFunction() { 
    
    const fromingres = document.getElementById("formIngres");
    const inputName = document.getElementById("Username")
    const inputEmail = document.getElementById("Email")
    
    const Error = document.getElementById("ErrorMensaje")
    
    const regexName = /^[a-zA-Z]{3,}$/;
    const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



fromingres.addEventListener("submit",(event) => {
    event.preventDefault();


    if (!regexName.test(inputName.Value)) {
        Error=textContent("Error: nombre invalido");
        return;
    }
    if (!regexMail.test(inputEmail.Value)) {        texto= textContent(" Error: email invalio");
        return;
    }
   })

   Error = textContent("Enviado con existo") ;
}

contFunction();