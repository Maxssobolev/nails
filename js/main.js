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
});