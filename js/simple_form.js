const text = document.querySelector("#text");
const textError = document.querySelector(".text-error");
text.oninput = function () {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (nameRegex.test(text.value))
        textError.textContent = "";
    else
        textError.textContent = "Name too Short!"
};
const email = document.querySelector("#email");
const emailError = document.querySelector(".email-error");
email.oninput = function () {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(email.value))
        emailError.textContent = "";
    else
        emailError.textContent = "Email is Incorrect!"
};
const tel = document.querySelector("#tel");
const telError = document.querySelector(".tel-error");
number.oninput = function () {
    let telRegex = RegExp('^\\d{2}(\\s{1}\\d{10})$');
    if (telRegex.test(tel.value))
        telError.textContent = "";
    else
        telError.textContent = "Tel. Number is Incorrect!"
};
const pwd = document.querySelector("#pwd");
const pwdError = document.querySelector(".pwd-error");
pwd.oninput = function () {
    let pwdRegex1 = RegExp('^(?=.*[A-Z])(?=.*\\d)(?=.*[^\\dA-Z]).{8,}$');
    let pwdRegex2 = RegExp('^[0-9a-zA-Z]*[@#$%][0-9a-zA-Z]*$');
    if (pwdRegex1.test(pwd.value) && pwdRegex2.test(pwd.value))
        pwdError.textContent = "";
    else
        pwdError.textContent = "Didn't Match Minimum Requirements!"
};

const salary = document.querySelector("#salary");
const output = document.querySelector(".salary-output");
output.textContent = salary.value;
salary.addEventListener('input', function () {
    output.textContent = salary.value;
});
