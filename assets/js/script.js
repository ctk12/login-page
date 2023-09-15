
const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    let usernameMsg = document.getElementById("username-msg");
    let passwordMsg = document.getElementById("password-msg");

    // validating username

    if (!username) {
        usernameMsg.innerText = "Username cannot be empty";
        return;
    }

    if (username.length < 6) {
        usernameMsg.innerText = "Minimum username length is 6";
        return;
    }

    if (document.getElementById("username").value.indexOf(' ') >= 0) {
        usernameMsg.innerText = "Spaces not allowed in username";
        return;
    }

    if (usernameMsg) {
        usernameMsg.innerText = "";
    }

    // validating password

    if (!password) {
        passwordMsg.innerText = "Password cannot be empty";
        return;
    }

    if (password.length < 6) {
        passwordMsg.innerText = "Minimum password length is 6";
        return;
    }

    if (document.getElementById("password").value.indexOf(' ') >= 0) {
        passwordMsg.innerText = "Spaces not allowed in password";
        return;
    }

    if (!validatePassword(password)) {
        passwordMsg.innerText = "Wrong combination, Use letters numbers and special characters";
        return;
    }

    if (passwordMsg) {
        passwordMsg.innerText = "";
    }

    if (username === "test@luxpmsoft.com") {
        if (password === "test1234!") {
            localStorage.setItem("LOGGED_USER", username);
            window.location.href = "/login-page/dashboard.html";
        } else {
            showPopMSG("The provided password is wrong");
        }
    } else {
        showPopMSG("Invalid Username");
    }
    

    console.log(username, password);
})

function validatePassword(password) {
    if (!(/[a-z]/).test(password)) {
        return false;
    } else if (!(/[0-9]/).test(password)) {
        return false;
    } else if (!(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(password)) {
        return false;
    } else {
        return true;
    }
}

function showPopMSG(msg) {
    document.getElementById("popup").style.visibility = "visible";
    document.getElementById("pop-msg").innerText = msg;
}

function closePop() {
    document.getElementById("popup").style.visibility = "hidden";
}