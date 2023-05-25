const form = document.querySelector('.login-form')

form.addEventListener('submit', onForm);

function onForm(event) {
event.preventDefault();
// const formData= new formData(event.currentTarget)
// console.log(formData)
const {
    elements:{email, password}
  } = event.currentTarget;
 if (email.value === "" || password.value === "") {
 alert('Please fill in all the fields!');
 return
 } else {
  const result = {
  email: email.value,
  password: password.value
  }
  console.log( result)
 }
 event.currentTarget.reset()
}


  // `Email : ${email.value}, password : ${password.value}`
  //  console.log(result);
















// const form = document.querySelector('.login-form');

// form.addEventListener('submit', event => {
//   event.preventDefault();
  
//   const email = form.elements.email.value;
//   const password = form.elements.password.value;
  
//   if (!email || !password) {
//     alert('Всі поля повинні бути заповнені');
//   } else {
//     const formData = {
//       email,
//       password,
//     };
    
//     console.log(formData);
    
//     form.reset();
//   }
// });
