
let form = document.querySelector('form')
let formName = document.querySelector('#name');
let formEmail = document.querySelector('#email');
let formMessage = document.querySelector('#message');
let submitDiv = document.querySelector('.submitBtn');
let submitBtn = document.querySelector('#submit');
let name = document.querySelector('.name')
let email = document.querySelector('.email')
let message = document.querySelector('.message')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    document.querySelectorAll('.err-msg').forEach(el => el.remove());
    const success = document.querySelector('.success-msg');
    if (success) success.remove();

    let isValid = true;

    if (formName.value === "") {
        let err = document.createElement('p')
        err.className = 'err-msg'
        err.textContent = 'Name is required'
        err.style.color = 'red';
        name.appendChild(err);
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formEmail.value === "") {
        let err = document.createElement('p')
        err.className = 'err-msg'
        err.textContent = 'Email is required'
        err.style.color = 'red';
        email.appendChild(err);
        isValid = false;
    } 
    else if (!emailRegex.test(formEmail.value)) {
        let err = document.createElement('p');
        err.className = 'error-msg';
        err.textContent = 'Please enter a valid email';
        err.style.color = 'red';
        email.appendChild(err);
        isValid = false;
    }
    if (formMessage.value === "") {
        let err = document.createElement('p')
        err.className = 'err-msg'
        err.textContent = 'Message is required'
        err.style.color = 'red';
        message.appendChild(err);
        isValid = false;
    }
    if (isValid) {
        let para = document.createElement('p');
        para.textContent = "Form submitted successfully!";
        para.className = 'success-msg'
        para.style.color = 'green';
        submitDiv.appendChild(para);
        form.reset();
    }
})