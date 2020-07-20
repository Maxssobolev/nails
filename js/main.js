$(document).ready(function() {
	$('.slider').slick({
		arrows: false,
		dots:true,
		appendDots: $('.menu'),
		infinite: false, //небесконечный слайдер
		draggable: false, //no-swipe
		waitForAnimate:false,
		fade: true,
  		cssEase: 'ease-in'
	});


$("button[aria-controls=slick-slide00]").text("МАНИКЮР");
$("button[aria-controls=slick-slide01]").text("ПЕДИКЮР");
$("button[aria-controls=slick-slide02]").text("БРОВИ | РЕСНИЦЫ");
$("button[aria-controls=slick-slide03]").text("ПЕРМАНЕНТНЫЙ МАКИЯЖ");

if($(window).width() <= 900){
	$(".headers h2:nth-child(2)").fadeOut();
} 

$(window).resize(
	function(){
		if($(window).width() <= 900){
			$(".headers h2:nth-child(2)").fadeOut();
			
		} 
		else {
			$(".headers h2:nth-child(2)").fadeIn();
			
		}
	});

});