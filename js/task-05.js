
const  nameInput = document.querySelector("#name-input");
const nameOut = document.querySelector("#name-output");
nameInput.addEventListener('input',onImputChangr)
function onImputChangr(event){
    nameOut.textContent=event.currentTarget.value
}
