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
const salary = document.querySelector("#salary");
const output = document.querySelector(".salary-output");
output.textContent = salary.value;
salary.addEventListener('input', function () {
    output.textContent = salary.value;
});
