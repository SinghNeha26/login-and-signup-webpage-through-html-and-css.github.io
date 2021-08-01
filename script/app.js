let x = document.getElementById('login');
let y = document.getElementById('register');
let z = document.getElementById('btn');
function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";

}
function login() {
    x.style.left = '50px';
    y.style.left = '450px';
    z.style.left = '0px';

}


var email1 = document.forms['form1']['email1'];
var password1 = document.forms['form1']['password1'];
var email_error1 = document.getElementById('email_error1');
var pass_error1 = document.getElementById('pass_error1');

function validated_login() {
    if (email1.value.length < 9) {
        email1.style.border = "1px solid white";
        email_error1.style.display = "block";
        email1.focus();
        return false;
    }
    if (password1.value.length < 6) {
        password1.style.border = "1px solid white";
        pass_error1.style.display = "block";
        password1.focus();
        return false;
    }

}

var email2 = document.forms['form2']['email2'];
var password2 = document.forms['form2']['password2'];
var email_error2 = document.getElementById('email_error2');
var pass_error2 = document.getElementById('pass_error2');
function validated_signUp() {
    if (email2.value.length < 9) {
        email2.style.border = "1px solid white";
        email_error2.style.display = "block";
        email2.focus();
        return false;
    }
    if (password2.value.length < 6) {
        password2.style.border = "1px solid white";
        pass_error2.style.display = "block";
        password2.focus();
        return false;
    }

}