let hero = document.querySelector('.hero')

let slider = document.querySelector('.slider')

let slides = slider.querySelectorAll('.slide')

let slide_index = 0

let hero_bgs = [
    './images/bun-bo-bg.png',
    './images/pho-ga-bg.png',
    './images/goi-cuon-bg.jpg'
]

showSlide = (index) => {
    slides.forEach(e => e.classList.remove('active'))
    slides[index].classList.add('active')
    hero.style.backgroundImage = `url(${hero_bgs[index]})`
}

nextSlide = () => {
    slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1
    showSlide(slide_index)
}

slider.querySelectorAll('.slider-control-item').forEach((item, index) => {
    item.addEventListener('click', () => {
        showSlide(index)
    })
})

showSlide(slide_index)

// setInterval(() => {
//     nextSlide()
// }, 1000);