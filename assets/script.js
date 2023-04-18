// déclaration de variables et constantes
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

i = 0

// fonctions
function slide() {
	// changer la source de l'image principale
	myimg = document.getElementsByTagName("img")[1];
	myimg.src = "./assets/images/slideshow/" + slides[i]["image"];
	// changer le texte
	document.getElementById('tagline').innerHTML = slides[i]["tagLine"];
	//changer la bullet active
	document.querySelector('.dot_selected').classList.remove('dot_selected');
	document.getElementById("bullet-" + i).classList.add('dot_selected');
}

// instructions
for (var i = 0; i < slides.length; i++)
    {
        var li = document.createElement('li');
		li.id = "bullet-" + i;
		li.className = 'dot';
		if ( i === 0) {
			li.classList.add('dot_selected');
		}
		document.getElementById('mydot').appendChild(li);
    }

arrowRight.addEventListener('click', function(){
	// i = (i < 3) ? i + 1 : 3;
	if (i < 3) {
		i++;
		slide();
	} else {
		i = 0;
		slide();
	}
	})

arrowLeft.addEventListener('click', function(){
	if (i > 0) {
		i--;
		slide();
	} else {
		i = 3;
		slide();
	}
	})