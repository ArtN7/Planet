const popup = document.querySelector('.popup-order');
const buttonClose = document.querySelectorAll('.popup-button-close');
const buttonOrder = document.querySelectorAll('.button-order');
const buttonsSubmit = document.querySelectorAll('.popup-submit');
const body = document.querySelector('body');
const popupConfirmation = document.querySelector('.popup-confirmation');
const buttonOK = popupConfirmation.querySelector('.button-ok');
const buttonBurger = document.querySelector('.burger-menu-button');
const buttonBurgerClose = document.querySelector('.burger-popup-button-close');
const popupBurger = document.querySelector('.popup-burger');
const main = document.querySelector('.page-main');

buttonBurger.addEventListener('click', () => {
    popupBurger.classList.remove('d-none');
    buttonBurger.classList.add('d-none');
    buttonBurgerClose.classList.remove('d-none');
    body.classList.add('popup-is-work-burger');
    if (window.innerWidth <= 400){
        main.classList.add('opacity-0');
    }
})
buttonBurgerClose.addEventListener('click', () => {
    popupBurger.classList.add('d-none');
    buttonBurger.classList.remove('d-none');
    body.classList.remove('popup-is-work-burger');
    buttonBurgerClose.classList.add('d-none');
    main.classList.remove('opacity-0');
    bigImg.classList.add('d-none');

})

for (const button of buttonOrder) {
    button.addEventListener('click', () => {
        popup.classList.remove('d-none');
        body.classList.add('popup-is-work');
        if (window.innerWidth > 400){
            popupBurger.classList.add('opacity-25');
        }
        popupBurger.classList.add('d-none');
        buttonBurger.classList.remove('d-none');
        buttonBurgerClose.classList.add('d-none');
        body.classList.remove('popup-is-work-burger');
        main.classList.remove('opacity-0');
    })
};

for (const button of buttonClose) {
    button.addEventListener('click', () => {
        popup.classList.add('d-none');
        body.classList.remove('popup-is-work');
        popupConfirmation.classList.add('d-none');
        if (document.querySelector(".button-video") !== null){
            videoPopup.classList.add('d-none');
        }
        if (body.querySelector('.div-glass') !== null) {
            bigImg.classList.add('d-none');
            body.classList.remove('popup-is-work');
        } 
        popupBurger.classList.remove('opacity-25');
    })
};
buttonOK.addEventListener('click', () => {
    popupConfirmation.classList.add('d-none');
    body.classList.remove('popup-is-work');
    popupBurger.classList.remove('opacity-25');
});

let buttonVideo = '';
let videoPopup = '';
if (document.querySelector(".button-video") !== null) {
    buttonVideo = document.querySelector('.button-video');
    videoPopup = document.querySelector('.popup-video-index-container');
    buttonVideo.addEventListener('click', () => {
        body.classList.add('popup-is-work');
        videoPopup.classList.remove('d-none');
    })
}
let bigImg = '';
if (body.querySelector('.div-glass') !== null) {
    const glass = body.querySelector('.div-glass');
    bigImg = body.querySelector('.div-click-glass');
    glass.addEventListener('click', () => {
        bigImg.classList.remove('d-none');
        body.classList.add('popup-is-work');
    })
}

body.addEventListener('keydown', (e) => {
	if( e.key === "Escape" ){ // код клавиши Escape, но можно использовать e.key
        if (document.querySelector('.button-video')!== null) {
            videoPopup.pause();
            videoPopup.classList.add('d-none');
            body.classList.remove('popup-is-work');
        }
        if (body.querySelector('.div-glass') !== null) {
            console.log(bigImg);
            bigImg.classList.add('d-none');
            body.classList.remove('popup-is-work');
        } 
        if (popup.classList.contains('d-none')) {
            body.classList.remove('popup-is-work');
            popupConfirmation.classList.add('d-none');
        } else {
            popup.classList.add('d-none');
            body.classList.remove('popup-is-work');
        }
        if (!popupBurger.classList.contains('d-none')){
            popupBurger.classList.add('d-none');
            body.classList.remove('popup-is-work-burger');
            buttonBurger.classList.remove('d-none');
            buttonBurgerClose.classList.add('d-none');
        }
	}
});

if (body.querySelector(".gallary-main-img") !== null) {
    const gallaryImages = body.getElementsByClassName('gallary-main-img');
    const firstImageGallary = body.querySelector('.first-image-gallary');
    const slideToLeft = body.querySelector('.slide-to-left');
    const slideToRight = body.querySelector('.slide-to-right');
    let id = 0;
    const imagesLength = gallaryImages.length - 1;
    firstImageGallary.textContent = '0' + gallaryImages[id].id;

    slideToRight.addEventListener('click', () => {
        id += 1;
        if (id > imagesLength) {
            gallaryImages[imagesLength].classList.add('gallery-img-none');
            id = 0;
            gallaryImages[id].classList.remove('gallery-img-none');
            firstImageGallary.textContent = '0' + gallaryImages[id].id;
            return;
        } 
        firstImageGallary.textContent = '0' + gallaryImages[id].id;
        gallaryImages[id].setAttribute('src', gallaryImages[id].getAttribute('src'));
        gallaryImages[id - 1].classList.add('gallery-img-none');
        gallaryImages[id].classList.remove('gallery-img-none');

    });

    slideToLeft.addEventListener('click', () => {
        id -= 1;
        if (id < 0) {
            gallaryImages[id + 1].classList.add('gallery-img-none');
            id = imagesLength;
            gallaryImages[id].classList.remove('gallery-img-none');
            firstImageGallary.textContent = '0' + gallaryImages[id].id;
            return;
        } 
        firstImageGallary.textContent = '0' + gallaryImages[id].id;
        gallaryImages[id].setAttribute('src', gallaryImages[id].getAttribute('src'));
        gallaryImages[id + 1].classList.add('gallery-img-none');
        gallaryImages[id].classList.remove('gallery-img-none');
    });
}

const buttonsMoreInfo = document.querySelectorAll('.main-question-button-more-info');
const answer = document.querySelectorAll('.main-question-answer');
for (let i = 0; i < buttonsMoreInfo.length; i += 1) {
    const buttonPlus = buttonsMoreInfo[i].querySelector('.main-question-button-plus');
    buttonsMoreInfo[i].addEventListener('click', () => {
        if (!answer[i].classList.contains('open')){
            answer[i].classList.add('open');
            buttonPlus.classList.add('open');
            console.log('open')
        } else {
            answer[i].classList.remove('open');
            buttonPlus.classList.remove('open');
        }

    })
}