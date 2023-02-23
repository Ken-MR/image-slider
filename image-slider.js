let images = [];

class image {
	constructor (id, image, name) {
		this.id = id;
		this.image = image;
		this.name = name;
	}
}

const sliderMovement = (() => {

	const nextSlide = () => {
    let slides = document.getElementsByClassName('slide');
    let index = 0;

    for (let i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains('active')) {
        index = i + 1;
      }
    }

    if (index < slides.length) {
      slideJump(images[index].id, images[index].image, images[index].name);
    }
    else {
      slideJump(images[0].id, images[0].image, images[0].name);
    }
	};
	
	const prevSlide = () => {
    let slides = document.getElementsByClassName('slide');
    let index = 0;

    for (let i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains('active')) {
        index = i - 1;
      }
    }

    if (index >= 0) {
      slideJump(images[index].id, images[index].image, images[index].name);
    }
    else {
      slideJump(images[images.length - 1].id, images[images.length - 1].image, images[images.length - 1].name);
    }
	};
	
	const slideJump = (id, image, name) => {
    let current = document.querySelector('.active');
    current.classList.remove('active');

    let chosen = document.getElementById(`${name}`);
    chosen.classList.add('active');
		fillDot(id);
	};
	
	const fillDot = (id) => {
    let dots = document.querySelectorAll('.dot');
    dots.forEach(d => d.setAttribute('class', 'dot'));
    dots[id].classList.add('dot-active');
	};

	return { nextSlide, prevSlide, slideJump };
})();

images.push(new image (images.length, './img/island.png', 'island'));
images.push(new image (images.length, './img/waterfall.png', 'waterfall'));
images.push(new image (images.length, './img/frog.png', 'frog'));
images.push(new image (images.length, './img/field.png', 'field'));
images.push(new image (images.length, './img/skyline.png', 'skyline'));

const carousel = document.getElementById('carousel');
const dotSelectors = document.getElementById('dot-select');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

for (let i = 0; i < images.length; i++) {
	let slide = document.createElement('div');
	slide.setAttribute('class', 'slide');
  slide.setAttribute('id', `${images[i].name}`);

  let picture = document.createElement('img');
  picture.src = images[i].image;
	slide.appendChild(picture);
  carousel.appendChild(slide);

  let dot = document.createElement('span');
  dot.setAttribute('class', 'dot');
  dotSelectors.appendChild(dot);
  dot.addEventListener('click', function () {sliderMovement.slideJump(images[i].id, images[i].image, images[i].name)}); //
}

let display = document.querySelectorAll('.slide');
display[0].classList.add('active');

let dot = document.querySelector('.dot');
dot.classList.add('dot-active');

nextButton.addEventListener('click', function () {sliderMovement.nextSlide()});

prevButton.addEventListener('click', function () {sliderMovement.prevSlide()});

setInterval(function () {sliderMovement.nextSlide()}, 5000);