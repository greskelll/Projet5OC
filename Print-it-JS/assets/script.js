const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image: "slide2.jpg",
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const rightArrow = document.querySelector(".arrow_right");
const leftArrow = document.querySelector(".arrow_left");
const slideNumber = 3;

function setImage(img) {
	img.setAttribute('src', "./assets/images/slideshow/" + slides[i].image)
}

function setText(txt) {
	txt.innerHTML = slides[i].tagLine
}

function setActiveDot() {
	dots[i].classList.add("dot_selected")
}

function setImageTextAndDot(a, b) {
	setImage(a),
		setText(b),
		setActiveDot()
}

let i = 0;
let image = document.querySelector('#banner img');
let texte = document.querySelector('#banner p');
let dots = document.getElementsByClassName('dot');

rightArrow.addEventListener('click', function (event) {
	event.preventDefault();

	if (i < slideNumber) {
		i++
		setImageTextAndDot(image, texte, '')

		dots[i - 1].classList.remove("dot_selected")
	} else if (i === slideNumber) {
		i = 0
		setImageTextAndDot(image, texte, '')
		dots[3].classList.remove("dot_selected")
	} else {
		return null
	}
});

leftArrow.addEventListener('click', function (event) {
	event.preventDefault();

	if (i === 0) {
		i = 3
		setImageTextAndDot(image, texte, '')
		dots[0].classList.remove("dot_selected")
	} else if (i === slideNumber) {
		i--
		setImageTextAndDot(image, texte, '')
		dots[3].classList.remove("dot_selected")
	} else if (i < slideNumber) {
		i--
		setImageTextAndDot(image, texte, '')
		dots[i + 1].classList.remove("dot_selected")
	} else {
		return null
	}
})
	;