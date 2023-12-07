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

currentSlideIndex = 0

function moveToPreviousSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length
  updateSlide(currentSlideIndex)
}

function moveToNextSlide() {
  if (currentSlideIndex > 2) {
    currentSlideIndex = 0
    updateSlide(currentSlideIndex)
  } else {
    currentSlideIndex = currentSlideIndex + 1
    updateSlide(currentSlideIndex)
  }
}

// ARROW
const arrow_left = document.querySelector('.arrow_left')
const arrow_right = document.querySelector('.arrow_right')

// ARROW INTERACTION
arrow_left.addEventListener('click', () => {
  moveToPreviousSlide()
  updateDots()
})

arrow_right.addEventListener('click', () => {
  moveToNextSlide()
  updateDots()
})

arrow_left.style.cursor = 'pointer'
arrow_right.style.cursor = 'pointer'
// DOTS

const dots = document.querySelector('.dots')
const dotNumber = slides.length

for (let i = 0; i < dotNumber; i++) {
  const dot = document.createElement('div')
  dot.classList.add('dot')
  dots.appendChild(dot)
}

function updateDots() {
  const allDots = document.querySelectorAll('.dot')

  allDots.forEach((dot) => {
    dot.classList.remove('dot_selected')
  })

  allDots[currentSlideIndex].classList.add('dot_selected')
}
