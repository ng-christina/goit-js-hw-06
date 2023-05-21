const  nameInput = document.querySelector("#name-input");
const nameOut = document.querySelector("#name-output")
nameInput.addEventListener("input", (event) => {
    if (!event.currentTarget.value) {
        nameOut.innerHTML = 'Anonymous';
        return
    } 
    nameOut.textContent = event.currentTarget.value
})