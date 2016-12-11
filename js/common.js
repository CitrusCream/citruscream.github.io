$(function() {

	var asideWidth 		 = $('aside').width(),
			wrapperMargin  = $('.page-wrapper').css('marginLeft');

	$('#resize').on('click', function() {

		if($('aside').hasClass('animated')) {
			$('aside').toggleClass('animated').animate({width:asideWidth},500);
			$('.page-wrapper').animate({marginLeft:wrapperMargin},500);
		} else { 
			$('aside').toggleClass('animated').animate({width:'50px'}, 500);
			$('.page-wrapper').animate({marginLeft: '65px'}, 500);
		}

	})

});
