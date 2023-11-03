const formPopup = document.querySelector('.popup-form');
const buttonSubmit = formPopup.querySelector('.popup-button');
const inputName = formPopup.querySelector('.popup-input-name');
const inputPhone = formPopup.querySelector('.popup-input-phone');
const fields = formPopup.querySelectorAll('.field');
const iconCorrectName= formPopup.querySelector('.icon-correct-value-name');
const iconIncorrectName= formPopup.querySelector('.icon-incorrect-value-name');
const iconCorrectPhone= formPopup.querySelector('.icon-correct-value-phone');
const iconIncorrectPhone= formPopup.querySelector('.icon-incorrect-value-phone');

function validatePhoneNumber(validate) {
    let validPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return validPhone.test(validate);
}
function validateName(validate) {
    let validName = /^\w+[\w\s-]*$/;
    return validName.test(validate);
}

function validateFormPopup(event) {
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
formPopup.addEventListener('submit', validateFormPopup);

const formContacts = document.querySelector('.contacts-form');
const inputNameContacts = formContacts.querySelector('.contacts-block-form-name');
const inputEmailContacts = formContacts.querySelector('.contacts-block-form-email');
const textAreaContacts = formContacts.querySelector('.contacts-block-form-interest');
const iconCorrectContactsName = formContacts.querySelector('.icon-correct-value-name');
const iconIncorrectContactsName = formContacts.querySelector('.icon-incorrect-value-name');
const iconCorrectContactsEmail = formContacts.querySelector('.icon-correct-value-email');
const iconIncorrectContactsEmail = formContacts.querySelector('.icon-incorrect-value-email');
const fieldsContacts = formContacts.querySelectorAll('.field');
const validateEmail = (validate) => {
    const validEmail =  /^[\w\.-]+@([\w-]+\.)+[\w-]{2,4}$/;
    return validEmail.test(validate);
}
const validationContacts = (event) => {
    event.preventDefault();
    const name = inputNameContacts.value;
    if (!validateName(name)) {
        inputNameContacts.classList.add('incorrect');
        iconCorrectContactsName.classList.remove('correct');
        document.getElementById('contacts-name_error').classList.remove('d-none');
        iconIncorrectContactsName.classList.remove('d-none');
        iconCorrectContactsName.classList.add('d-none');
    } else {
        inputName.classList.add('correct');
        inputName.classList.remove('incorrect');
        iconCorrectContactsName.classList.remove('d-none');
        iconIncorrectContactsName.classList.add('d-none');
        document.getElementById('contacts-name_error').classList.add('d-none');
    }
    const email = inputEmailContacts.value;
    if (!validateEmail(email)) {
        inputEmailContacts.classList.add('incorrect');
        iconCorrectContactsEmail.classList.remove('correct');
        document.getElementById('contacts-email_error').classList.remove('d-none');
        iconIncorrectContactsEmail.classList.remove('d-none');
        iconCorrectContactsEmail.classList.add('d-none');
    } else {
        inputEmailContacts.classList.add('correct');
        inputEmailContacts.classList.remove('incorrect');
        iconCorrectContactsEmail.classList.remove('d-none');
        iconIncorrectContactsEmail.classList.add('d-none');
        document.getElementById('contacts-email_error').classList.add('d-none');
    }
    const textArea = textAreaContacts.value;
    if (textArea === ""){
        textAreaContacts.classList.add('incorrect');
        document.getElementById('contacts-textarea_error').classList.remove('d-none');
    } else {
        textAreaContacts.classList.remove('incorrect');
        document.getElementById('contacts-textarea_error').classList.add('d-none');
    }
    if(validateName(name) && validateEmail(email) && textArea !== ""){
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

formContacts.addEventListener('submit', validationContacts);