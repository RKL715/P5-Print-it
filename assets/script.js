const slides = [
  {
    image: 'slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
  },
  {
    image: 'slide2.jpg',
    tagLine:
      'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
  },
  {
    image: 'slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
  },
  {
    image: 'slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
  },
]

// IMG

const bannerImg = document.querySelector('.banner-img')
const tagLine = document.querySelector('#banner p')

function updateSlide(index) {
  const currentSlide = slides[index]
  bannerImg.src = `./assets/images/slideshow/${currentSlide.image}`
  tagLine.innerHTML = currentSlide.tagLine
}

// MOVING IMG

let currentSlideIndex = 0

function moveToPreviousSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length
  updateSlide(currentSlideIndex)
}

function moveToNextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length
  updateSlide(currentSlideIndex)
}

// ARROW
const arrow_left = document.querySelector('.arrow_left')
const arrow_right = document.querySelector('.arrow_right')

// ARROW INTERACTION
arrow_left.addEventListener('click', () => {
  console.log('left')
  moveToPreviousSlide()
})

arrow_right.addEventListener('click', () => {
  console.log('right')
  moveToNextSlide()
})

// DOTS

const dots = document.querySelector('.dots')
const dotNumber = slides.length

for (let i = 0; i < dotNumber; i++) {
  const dot = document.createElement('div')
  dot.classList.add('dot')
  dots.appendChild(dot)
}
