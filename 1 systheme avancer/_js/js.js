   $(document).ready(function() {

var up = $('.up');
var down = $('.down');
var cours = $('.cours');
var current = $('.cours > *').length;
var length = $('.cours > *').length;
var moins = "+=50";
var plus = "-=50";
var arrow_up = $('.arrow_up');
var arrow_down = $('.arrow_down');
console.log(length);

up.hover(function() {

arrow_up.toggleClass("arrow_up_active");


});

down.hover(function() {

arrow_down.toggleClass("arrow_down_active");


});
        up.click(function(){


if (current>length){
length++;
console.log(length);

cours.transition({ y: moins });

}
    });

                down.click(function(){

                    if ( length >=5){
length--;
console.log(length);

cours.transition({ y: plus });
}
    });

    });