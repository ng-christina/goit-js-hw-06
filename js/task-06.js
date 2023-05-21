const input = document.querySelector('#validation-input')
input.addEventListener("blur", () => {
const dataLength = parseInt(input.getAttribute( 'data-length'));
const valueLength = input.value.length;
// console.log( `data`, typeof dataLength);
// console.log(`val` , typeof valueLength);
if (dataLength === valueLength  ) {
 input.classList.add('valid')
 input.classList.remove('invalid');
}else {  
    input.classList.add('invalid')
     input.classList.remove('valid');
}
})
