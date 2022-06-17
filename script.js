const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");
const errorFirstName = document.getElementById("errorFirstName");
const errorLastName = document.getElementById("errorLastName");
const errorEmail = document.getElementById("errorEmail");
const errorPassword = document.getElementById("errorPassword");



btn.addEventListener('click', function() {
    if(firstName.value == null || firstName.value == undefined || firstName.value == '' || firstName.value <= 0){
        errorFirstName.style.display = 'block';
        firstName.style.background = 'URL(icon-error.svg) right no-repeat'
    }
    else{
        errorFirstName.style.display = 'none';
      
    }
})
btn.addEventListener('click', function(){
  if(lastName.value == null || lastName.value == undefined || lastName.value == '' || firstName.value <= 0){
        errorLastName.style.display = 'block';
        LastName.style.background = 'URL(icon-error.svg) right no-repeat'
    }
    else{
        errorLastName.style.display = 'none';
      
    }
})
btn.addEventListener('click', function(){
  if(email.value == null || email.value == undefined || email.value == '' || email.value <= 0){
        errorEmail.style.display = 'block';
        email.style.background = 'URL(icon-error.svg) right no-repeat'
    }
    else{
        errorEmail.style.display = 'none';
      
    }
})
btn.addEventListener('click', function(){
  if(password.value == null || password.value == undefined || password.value == '' || password.value <= 6){
        errorPassword.style.display = 'block';
        password.style.background = 'URL(icon-error.svg) right no-repeat'
    }
    else{
        errorPassword.style.display = 'none';
      
    }
})
