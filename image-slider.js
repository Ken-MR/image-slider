let images = [];

class image {
	constructor (id, image, name) {
		this.id = id;
		this.image = image;
		this.name = name;
	}
}

const sliderMovement = (() => {

	const nextSlide = (id, image, name) => {
		fillDot(id);
	};
	
	const prevSlide = (id, image, name) => {
		fillDot(id);
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

images.push(new image (`${images.length}`, './img/island.png', 'island'));
images.push(new image (`${images.length}`, './img/waterfall.png', 'waterfall'));
images.push(new image (`${images.length}`, './img/frog.png', 'frog'));
images.push(new image (`${images.length}`, './img/field.png', 'field'));
images.push(new image (`${images.length}`, './img/skyline.png', 'skyline'));

const carousel = document.getElementById('carousel');
const dotSelectors = document.getElementById('dot-select');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

for (let i = 0; i < images.length; i++) {
	// add code to create divs for each iamge. These divs will have HTMl that calls the various slideMovement functions 
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