 $(document).ready(function() {

var button = $('button');
var span = $('span');
var nombre = 0;
var result = $('.result');

	button.click(function(event){
		
event.preventDefault();

if (nombre < 5) {
//il n y a que 5 places
nombre++;
console.log(nombre);
span.text(" "+ nombre +" ");	
}
else{
	alert("plus de place");
	//grise le li si tu veux;
	result.css("color","red");

}



		

	});
    });