const firstName = document.querySelector('#firstNameInput');
const lastName = document.querySelector('#lastNameInput');
const emailInput = document.querySelector('#emailInput');
const passInput = document.querySelector('#passInput');

const firstNameError = document.querySelector('#firstNameError');
const lastNameError = document.querySelector('#lastNameError');
const emailError = document.querySelector('#emailError');
const passError = document.querySelector('#passError');

const button=document.querySelector('#button');

button.addEventListener('click', (e)=>{
    e.preventDefault();
    validateEmpty(firstName.value, firstName, firstNameError, 'First Name cannot be empty.');
    validateEmpty(lastName.value, lastName, lastNameError, 'Last Name cannot be empty.');
    validateEmpty(emailInput.value, emailInput, emailError,'Email Address cannot be empty.');
    validateEmpty(passInput.value, passInput, passError, 'Password cannot be empty.');
});

function validateEmpty(valueInput, divInput, divError, nameInput){
    if(valueInput.length == 0){
        showError(divInput,divError, nameInput);
    }else{
        hideError(divInput,divError, nameInput);
        validateEmail(valueInput,divInput,divError);
    }
}
function showError(divInput, divError, nameInput){
    divInput.style.border='1px solid red';
    divError.innerHTML=`<img class="icon-error" src="images/icon-error.svg" alt="">
    <p class="error">${nameInput}</p>`;
}
function hideError(divInput, divError, nameInput){
    divInput.style.border='1px solid hsl(246, 25%, 77%)';
    divError.innerHTML=``;
}
function validateEmail(valueInput, divInput, divError){
    let expReg=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    
    if(expReg.test(valueInput) == true){
        hideError(divInput, divError)
    }else{
        showError(divInput, divError, 'Looks like this is not an email') 
        
    }
}
