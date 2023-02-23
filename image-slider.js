let images = [];

class image {
	constructor (id, image, name) {
		this.id = id;
		this.image = image;
		this.name = name;
	};
};

const sliderMovement = (() => {

	const nextSlide = (id, image) => {
		fillDot(id);
	};
	
	const prevSlide = (id, image) => {
		fillDot(id);
	};
	
	const slideJump = (id, image) => {
		fillDot(id);
	};
	
	const fillDot = (id) => {
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

  let picture = document.createElement('img');
  picture.src = images[i].image;
	slide.appendChild(picture);
  carousel.appendChild(slide);

  let dot = document.createElement('span');
  dot.setAttribute('class', 'dot');
  dotSelectors.appendChild(dot);
}