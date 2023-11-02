const form = document.querySelector('.popup-form');
const buttonSubmit = form.querySelector('.popup-submit');
const inputName = form.querySelector('.popup-input-name');
const inputPhone = form.querySelector('.popup-input-phone');
const fields = form.querySelectorAll('.field');
const iconCorrectName= form.querySelector('.icon-correct-value-name');
const iconIncorrectName= form.querySelector('.icon-incorrect-value-name');
const iconCorrectPhone= form.querySelector('.icon-correct-value-phone');
const iconIncorrectPhone= form.querySelector('.icon-incorrect-value-phone');

function validatePhoneNumber(validate) {
    let validPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return validPhone.test(validate);
}
function validateName(validate) {
    let validName = /^\w+[\w\s-]*$/;
    return validName.test(validate);
}

function validateForm(event) {
    event.preventDefault();
    let phone = inputPhone.value;
    if (!validatePhoneNumber(phone)) {
        inputPhone.classList.add('incorrect');
        inputPhone.classList.remove('correct');
        document.getElementById('phone_error').classList.remove('d-none');
        iconIncorrectPhone.classList.remove('d-none');
        iconCorrectPhone.classList.add('d-none');
        buttonSubmit.style = "margin-top: 20px";
    } else {
        inputPhone.classList.add('correct');
        inputPhone.classList.remove('incorrect');
        iconCorrectPhone.classList.remove('d-none');
        iconIncorrectPhone.classList.add('d-none');
        document.getElementById('phone_error').classList.add('d-none');
    }

    let name = inputName.value;
    if (!validateName(name)) {
        buttonSubmit.style = "margin-top: 20px";
        inputName.classList.add('incorrect');
        inputName.classList.remove('correct');
        document.getElementById('name_error').classList.remove('d-none');
        iconIncorrectName.classList.remove('d-none');
        iconCorrectName.classList.add('d-none');
    } else {
        inputName.classList.add('correct');
        inputName.classList.remove('incorrect');
        iconCorrectName.classList.remove('d-none');
        iconIncorrectName.classList.add('d-none');
        document.getElementById('name_error').classList.add('d-none');
    }
    if(validateName(name) && validatePhoneNumber(phone)){
        body.classList.add('popup-is-work');
        popup.classList.add('d-none');
        popupConfirmation.classList.remove('d-none');
        popupBurger.classList.add('d-none');
        buttonBurger.classList.remove('d-none');
        buttonBurgerClose.classList.add('d-none');
        body.classList.remove('popup-is-work-burger');
        main.classList.remove('opacity-0');
    }


}  
form.addEventListener('submit', validateForm);
