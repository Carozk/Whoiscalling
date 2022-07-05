$(function() {
	$('.banner').unslider({
		arrows: true,
		dots: true
	});
	$('.section4 .dots').eq(1).hide();
	$('.banner .dot').mouseover(function() {
		$(this).closest('.banner').find('ul').stop();
		$(this).click();
	});
	$('.banner').hover(function() {
		$(this).toggleClass('hover');
	});
});
