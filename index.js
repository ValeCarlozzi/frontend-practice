const slides = document.querySelectorAll('.slides img');
const logos = document.querySelectorAll('.logos img');
const icons = document.querySelectorAll('.icons .icon');
let slideIndex = 0;
let intervalId = null;

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {


    if(slides.length > 0) {
        slides[slideIndex].classList.add('displaySlide');
        logos[slideIndex].classList.add('displayLogo');
        icons[slideIndex].classList.add('active');
    }

}

function showSlide(index, direction){
    
    
    slides.forEach(slide => {
        slide.classList.remove('displaySlide');
        slide.classList.remove('backgroundSlide');
    });

    logos.forEach(logo => {
        logo.classList.remove('displayLogo');
    });

    let backgroundIndex;

    if(direction === 'next') {
        backgroundIndex = index-1;
    }
    else if(direction === 'prev') {
        backgroundIndex = index+1;
    }

    if (index < 0) {
        slideIndex = slides.length - 1;
        backgroundIndex = 0;
    } else if (index >= slides.length) {
        slideIndex = 0;
        backgroundIndex = slides.length - 1;
    }

    if (direction === 'next') {
        slides[slideIndex].style.animationName = 'slideLeft';
    }
    else if (direction === 'prev') {
        slides[slideIndex].style.animationName = 'slideRight';
    }

    slides[backgroundIndex].classList.add('backgroundSlide');

    slides[slideIndex].classList.add('displaySlide');
    logos[slideIndex].classList.add('displayLogo');

    updateActiveIcon();
    
}

function prevSlide() {

    slideIndex--;
    showSlide(slideIndex,'prev');
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex,'next');
}

function updateActiveIcon() {
    icons.forEach((icon, index) => {
        if (index === slideIndex) {
            icon.classList.add('active');
        } else {
            icon.classList.remove('active');
        }
    });
}
