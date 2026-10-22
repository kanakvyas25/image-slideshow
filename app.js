const slides = document.querySelectorAll('.slide');
let counter = 0;

// set slide positions
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
    counter--;
    if (counter < 0) counter = slides.length - 1; // fix
    slideImages();
};

const goNext = () => {
    counter++;
    if (counter >= slides.length) counter = 0; // fix
    slideImages();     
};

const slideImages = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};


