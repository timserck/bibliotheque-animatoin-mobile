 $(document).ready(function() {

var a = $('.a');
var span = $('span');


a.next("div").hide();
	//hide the next div  after the div with the class ascenseur

	a.click(function(event){
		//if we click on the div with the class ascenseur
event.preventDefault()
		if($(this).next("div").is(":hidden")){
			//if the next div is hidden 
			a.next("div:visible").slideUp();
			//show the next div and anime with a slide up 
			$(this).next("div").slideDown();
			//the other div slidedown  
			$('.span_active').toggleClass('span_active');
			$(this).find("span").toggleClass('span_active');

   		}

	});
    });