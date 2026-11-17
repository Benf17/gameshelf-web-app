// Register form handling 
let registerForm = document.getElementById("register-form");

if (registerForm) {
    registerForm.addEventListener("submit", register);
}
function register(e) {
     e.preventDefault();
    
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("passwd").value;

    const user = {
        username: username,
        email: email,
        password: password
    };
    console.log(user);
}

// Login form handling
let loginForm = document.getElementById("login-form");

if (loginForm) {
    loginForm.addEventListener("submit", login);
}

function login(e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("passwd").value;

    const user = {
        username: username,
        password: password
    };
    console.log(user); 
}