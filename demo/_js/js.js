$(document).ready(function() {

	var next = $('.next');
	 next.fadeOut();
	
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            next.fadeIn();
        } else {
            next.fadeOut();
        }
		});
        
    

		next.click( function(event) { // Au clic sur un élément
			
			console.log('testingscrool');
			var page = $(this).attr('href'); // Page cible
			var speed = 800; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
	});