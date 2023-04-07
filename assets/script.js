const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const arrows = document.querySelectorAll('.arrow')
const arrowRight = document.querySelector('.arrow_right')
const arrowLeft = document.querySelector('.arrow_left')

arrows.forEach(arrow => arrow.addEventListener('click', function() {
	this.classList.contains('arrow_left') ? console.log('le click gauche est utlisé') : console.log('le click droit est utilisé')
}))

for (var i = 0; i < slides.length; i++)
    {
        var li = document.createElement('li');
		li.className = 'dot';
		if ( i === 0) {
			li.classList.add('dot_selected');
		}
		document.getElementById('mydot').appendChild(li);
    }

position = 0;
arrowRight.addEventListener('click', function(){
	if (position < slides.length - 1) {
		position++;
	} else {
		position = 0
	}
	console.log(slides[position])
	})
arrowLeft.addEventListener('click', function(){
	if (position > 0) {
		position--;
	} else {
		position = slides.length - 1
	}
	console.log(slides[position])
	})