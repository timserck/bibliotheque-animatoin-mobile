$(document).ready(function() {

	var next = $('.next');
		next.click( function(event) { // Au clic sur un élément
			
			console.log('testingscrool');
			var page = $(this).attr('href'); // Page cible
			var speed = 800; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
	});