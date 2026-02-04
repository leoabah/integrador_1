const burger = document.getElementById('burGer');
const burgerCont = document.getElementById('burgerContainer');
burger.addEventListener('click', () => {
    burgerCont.classList.toggle('active');
});

// const silder=document.getElementById("imgContainer");
// const previor= document.getElementById("Prev");
// const next = document.getElementById("Next");

// next.addEventListener("click", (next)=>{
//     imgContainer.scrollBy({left:auto,behavior: smooth})
//   });
// previor.addEventListener("click",(previor)=>{
//     imgContainer.scrollBy({left: auto, behavior: smooth })
// }) ;



newFunction();

function newFunction() {
    const formAltas = document.getElementById("formAltas");

    const inputName = document.getElementById("userName");
    const inputPrice = document.getElementById("Price");
    const inputAge = document.getElementById("Age");
    const inputStock = document.getElementById("Stock");
    const inputFoto = document.getElementById("Foto");
    // const inputSdecript = document.getElementById("ShrotDescrp");
    // const inputLdecript = document.getElementById("longDescrp");
    const texto = document.getElementById("texto");

    const regexName = /^[a-zA-Z]{3,}$/;
    const regexPrice = /^\d+(\.\d{1,2})?$/;
    const regexAge = /^\d+$/;
    const regexStock = /^\d+$/;
    const Archivo = inputFoto.File[0];


    formAltas.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!regexName.Text(inputName.Value)) {
            texto.textContent = "Error: nombre invalido";
            return;
        }

        if (!regexPrice.Text(inputPrice.Value)) {
            texto.textContent = "Error precio invalidado";
            return;
        }

        if (!regexAge.test(inputAge.Value)) {
            texto.textContent.textContent = "Error edad invalida";
            return;
        }
        if (!regexStock.test(inputStock.Value)) {
            texto.textContent = "Error  stock invalidado";
            return;
        }
        if (inputFoto.Files.length === 0) {
            texto.textContent = "Error: debes eligir una imagen invalidado";
            return;
        }
        if (!Archivo.type.startsWith("images/")) {
            texto.textContent = "Error invalidado";
            return;
        }

        texto.textContent = "Formulario enviado correctamente ✔";

    });



    const input = document.getElementById("emAil");
}
// const regexEmail =  ;