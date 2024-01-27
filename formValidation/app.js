function resetform() {
    document.getElementById("myform").reset();
}

function validateform() {
    let name = document.getElementById("name").value;
    let fname = document.getElementById("Fname").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let phone = document.getElementById("phone").value;

    if (name === "" || fname === "" || email === "" || pass === "" || phone === "") {
        alert("enter all the fields");
        return false;
    }

    if (!valName(name)) {
        alert("Enter name correctly");
        return false;
    }

    if (!valName(fname)) {
        alert("Enter Father name correctly");
        return false;
    }

    if (!valEmail(email)) {
        alert("Please Enter Your Correct Email");
        return false;
    }

    if (!valPass(pass)) {
        alert("Password is less than 6 character");
        return false;
    }

    if (!valPhone(phone)) {
        alert("Please enter your 10 digit correct mobile no");
        return false;
    }
}

function valName(name) {
    let hasChar = /^[a-zA-Z\s']+$/;
    return hasChar.test(name);
}
function valEmail(email) {
    let x = email;
    let atPos = x.indexOf("@");
    let dotPos = x.lastIndexOf(".");

    if (atPos < 1 || dotPos < atPos + 2 || dotPos + 2 >= x.length)
        return false;

    else
        return true;
}

function valPass(pass) {
    if (pass.length < 6)
        return false;

    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasDigit = false;
    let hasSymbol = false;

    for (let char of pass) {
        if (/[a-z]/.test(char))
            hasLowerCase = true;
        if (/[A-Z]/.test(char))
            hasUpperCase = true;
        if (/[0-9]/.test(char))
            hasDigit = true;
        if (/[!@#$%^&*()-_=+]/.test(char))
            hasSymbol = true;
    }

    return hasUpperCase && hasLowerCase && hasDigit && hasSymbol;
}

function valPhone(phone) {
    if (isNaN(phone) || phone.length != 10)
        return false;

    else
        return true;
}