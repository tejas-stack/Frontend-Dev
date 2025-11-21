document.getElementById("logindata").addEventListener("click", function(e) {
    e.preventDefault();
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const number = document.getElementById("number").value;
    const email = document.getElementById("mail").value;
    if(usernameInput === "" || passwordInput === "" || number === "") {
        console.error("Username and password cannot be empty.");
        return;
    }
    if(passwordInput.length < 8) {
        console.error("Password must be at least 8 characters long.");
        return;
    }
    processLogin(usernameInput, passwordInput, number, email);
});

function processLogin(usernameInput, passwordInput, number, email) {
    let regex = /\d+\w+[a-zA-Z]/;
    let pattern = /^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/;
    if(!regex.test(passwordInput)) {
        console.error("password must contain at least one upper case letter and one lower case letter and an digit also.");
        return;
    }
    if(!pattern.test(email)) {
        console.error("email must contain @ and ends with .com.");
        return;
    }

}