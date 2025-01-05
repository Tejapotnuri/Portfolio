let slider = document.getElementById("arrow");
let icons = document.getElementById("navicons");
let menu = document.getElementById('menu');
let navlink = document.querySelector(".nav-names2");
slider.value = -250;


slider.oninput=function(){
    icons.style.top = this.value+"px";
    if(slider.value == 0){
        slider.style.setProperty('--thumb-rotate', '90deg');
    }
    else if(slider.value == -250){
        slider.style.setProperty('--thumb-rotate', '270deg');
    }
}

function toggleMenu(){
    menu.classList.toggle('active');
    navlink.classList.toggle('active');
}



document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Reset error messages
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');

    let isValid = true;

    // First Name validation
    const fName = document.getElementById('fName').value.trim();
    if (!fName) {
        document.getElementById('error-fName').textContent = 'First Name is required';
        isValid = false;
    }

    // Last Name validation
    const lName = document.getElementById('lName').value.trim();
    if (!lName) {
        document.getElementById('error-lName').textContent = 'Last Name is required';
        isValid = false;
    }

    // Mobile Number validation
    const mobileNo = document.getElementById('mobileNo').value.trim();
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobileNo || !mobilePattern.test(mobileNo)) {
        document.getElementById('error-mobileNo').textContent = 'Please enter a valid 10-digit mobile number';
        isValid = false;
    }

    // Email validation
    const emailId = document.getElementById('emailId').value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailId || !emailPattern.test(emailId)) {
        document.getElementById('error-emailId').textContent = 'Please enter a valid email address';
        isValid = false;
    }

    // Subject validation
    const subject = document.getElementById('subject').value.trim();
    if (!subject) {
        document.getElementById('error-subject').textContent = 'Subject is required';
        isValid = false;
    }

    // Message validation
    const message = document.getElementById('message').value.trim();
    if (!message) {
        document.getElementById('error-message').textContent = 'Message is required';
        isValid = false;
    }

    // If form is valid, you can proceed with form submission or other actions
    if (isValid) {
        
        alert('Form submitted successfully!');

        document.getElementById('form').reset();
        
    }
});

// Clear error messages when the user starts typing
document.querySelectorAll('.input-field, .input-field2, .message').forEach(inputField => {
    inputField.addEventListener('input', function() {
        const errorSpan = document.getElementById(`error-${this.id}`);
        if (errorSpan) {
            errorSpan.textContent = ''; 
        }
    });
});
