const input = document.querySelector('#validation-input')
input.addEventListener("click", () => {
const dataLength = input.getAttribute( 'data-length');
const valueLength = input.length;
if (valueLength===dataLength  ) {
 input.classList.add('valid')
 input.classList.remove('invalid');
}else {  
    input.classList.add('invalid')
     input.classList.remove('valid');
}
})


