function move() {
    const usernameInput = document.getElementById('nameinps').value;
    const phone = document.getElementById('number').value;
    const emailInput = document.querySelector('#mail').value;
    const passwordInput = document.querySelector('#password').value;
    const confirmPasswordInput = document.querySelector('#password1').value;

    localStorage.setItem("Name", usernameInput);
    localStorage.setItem("Number", phone);
    localStorage.setItem("Email", emailInput);
    localStorage.setItem("Password", passwordInput);
    localStorage.setItem("Confirm", confirmPasswordInput);
}
