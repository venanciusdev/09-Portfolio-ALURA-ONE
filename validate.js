//Seu JavaScript de validação aqui
const form = document.querySelector("#form")
const nameInput = document.querySelector ("#nome")
const emailInput = document.querySelector ("#email")
const  assuntoInput = document.querySelector ("#assunto")
const msgTextarea = document.querySelector ("#mensagem")

form.addEventListener("submit", (event) => {
    event.preventDefault ();

    if (nameInput.value === ""){
        alert ("Por favor, preencha o seu nome");
        return;
    }

 if (!nomeCaracteres(nameInput.value, 50)){
        alert ("O campo nome deve conter no máximo 50 caracteres");
        return;
    }

    if (emailInput.value === "" || !isEmailValid (emailInput.value)) {
        alert ("Por favor, preencha o seu e-mail corretamente");
        return;
    }

    if (assuntoInput.value === "") {
        alert ("Por favor, preencha o campo assunto");
        return;
    }

    if (!assuntoCaracteres (assuntoInput.value, 50)){
        alert ("O campo assunto deve conter no máximo 50 caracteres");
        return;
    }

    if (msgTextarea.value === "") {
        alert ("Escreva uma mensagem");
        return;

    }

    if (!msgCaracteres (msgTextarea.value, 300)){
        alert ("O campo mensagem deve conter no máximo 300 caracteres");
        return;
    }
   
    form.submit();
});

function isEmailValid (email) {
        // cria uma regex para validar email
        const emailRegex = new RegExp (
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
        );
        if (emailRegex.test (email)) {
            return true;
        }
        return false;
    }

function nomeCaracteres (nome, maxDigits) {
    if(nome.length <= maxDigits){
        // nome válido
        return true;
    }
    // nome inválido
    return false;
}

function assuntoCaracteres (assunto, maxDigits) {
    if(assunto.length <= maxDigits){
        // assunto válido
        return true;
    }
    //assunto inválido
    return false;
}

function msgCaracteres (mensagem, maxDigits) {
    if(mensagem.length <= maxDigits){
        // mensagem válida
        return true;
    }
    //mensagem inválida
    return false;
}

































//     if(nameInput.value === "") {
//         alert ("Por favor, preencha o seu nome");
//         return;
//     }

//     if (assuntoInput.value === "") {
//         alert ("Por favor, preencha o campo assunto");
//     }

//     if (nameInput.length >= 10){
//         alert ("O campo nome deve conter no máximo 50 caracteres");
//         return;
//     }

//     if(emailInput.value === "" || !isEmailValid (emailInput.value)) {
//     alert ("Por favor, preencha o seu e-mail");
//     return;
// }

// function isEmailValid (email) {
//     // cria uma regex para validar email
//     const emailRegex = new RegExp (
//         /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
//     );
//     if (emailRegex.test (email)) {
//         return true;
//     }
//     return false;
// }
// form.submit ();
// }
// )








// if (!validateName (nameInput.value, 10)) {
//     alert ("O campo nome deve conter no máximo 50 caracteres");
// }
