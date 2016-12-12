$(function() {

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	if(isMobile.any()) { $('aside').addClass('aside-mobile') };

	$(document).pjax('a, aside a, strong a button', '.pjax-container', {fragment: '.pjax-container'});

	$('.pjax-container').on('pjax:success', function() {
		$.pjax({
			url: window.location.href,
			container: 'aside',
			fragment: 'aside'
		})
	})

	var asideWidth = $('aside').width(),
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
