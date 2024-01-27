const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
    slider[currentSlide].classList.add('on')
}

function nextSlider() {
    hideSlider()
    if (currentSlide === slider.length -1) {
        currentSlide = 0
    }
    else {
        currentSlide++
    }
    showSlider()
}

function prevSlider() {
    hideSlider()
    if (currentSlide === 0) {
        currentSlide = slider.length -1
    }
    else {
        currentSlide--
    }
    showSlider()
}


btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

console.log(slider)

currentSlide = currentSlide + 1
currentSlide = currentSlide - 1


setInterval(nextSlider, 3000)



const slidermob = document.querySelectorAll('.mob-slider');
const btnPrevmob = document.getElementById('mobp-button');
const btnNextmob = document.getElementById('mobn-button');

let currentSlidemob = 0;

function hideSlidermob() {
    slidermob.forEach(item => item.classList.remove('on'))
}

function showSlidermob() {
    slidermob[currentSlidemob].classList.add('on')
}

function nextSlidermob() {
    hideSlidermob()
    if (currentSlidemob === slidermob.length -1) {
        currentSlidemob = 0
    }
    else {
        currentSlidemob++
    }
    showSlidermob()
}

function prevSlidermob() {
    hideSlidermob()
    if (currentSlidemob === 0) {
        currentSlidemob = slidermob.length -1
    }
    else {
        currentSlidemob--
    }
    showSlidermob()
}


btnNextmob.addEventListener('click', nextSlidermob)
btnPrevmob.addEventListener('click', prevSlidermob)

console.log(slidermob)

currentSlidemob = currentSlidemob + 1
currentSlidemob = currentSlidemob - 1


setInterval(nextSlidermob, 3000)


