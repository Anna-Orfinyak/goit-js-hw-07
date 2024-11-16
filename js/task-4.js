const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();

    const elements = loginForm.elements;

    if (!loginForm.elements.email.value || !loginForm.elements.password.value) {
        alert `All form fields must be filled in`;
        return;
    }

    const info = {
        email: elements.email.value,
        password: elements.password.value
    }

    console.log(info);

    loginForm.reset(); 
}
