$('.js-button').click(function() {
	$('main').css('filter','blur(5px)');
	$('header').css('filter','blur(5px)');
	$('footer').css('filter','blur(5px)');
	$('.js-overlay').fadeIn();
	$('.js-overlay').addClass('disabled');
	$('html, body').animate({scrollTop: '0px'}, 300);
});

$('.js-close').click(function() {
	$('.js-overlay').fadeOut();
	$('main').css('filter','none');
	$('header').css('filter','none');
	$('footer').css('filter','none');
});

$(document).mouseup(function (e) {
	var popup = $('.js-popup');
	if (e.target!=popup[0]&&popup.has(e.target).length===0) {
		$('.js-overlay').fadeOut();
		$('main').css('filter', 'none');
		$('header').css('filter', 'none');
		$('footer').css('filter', 'none');
	}
})

//Галерея

$(function(){
  $('.minimized').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
     left: ($(document).width() - $('#magnify').outerWidth())/2,
     // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
            top: ($(window).height() - $('#magnify').outerHeight())/2
   });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});

$('#btn-obr').click(function() {
	$('#btn-pokr').removeClass('dwb-active');
	$('#btn-obr').addClass('dwb-active');
	$('#gal-pokr').hide();
	$('#gal-obr').show().css('display', 'flex');
});

$('#btn-pokr').click(function() {
	$('#btn-obr').removeClass('dwb-active');
	$('#btn-pokr').addClass('dwb-active');
	$('#gal-obr').hide();
	$('#gal-pokr').show().css('display', 'flex');
});

window.onscroll = function showHeader() {
	var header = document.querySelector('.header');
	var top_header_main = document.querySelector('.top-header-main');
	var logo = document.getElementById('logo');

	if (window.pageYOffset > 140) {
		header.classList.add('header_fixed');
		top_header_main.style.display = 'none';
		logo.style.top = '0';
	}
	else {
		header.classList.remove('header_fixed');
		top_header_main.style.display = 'block';
		logo.style.top = '-39px';
	}
}

window.onload = function () {
	setTimeout(function(){
		var move = anime({
		targets: '#ban_card1',
		translateY: 700
		});
	}, 1000);

	setTimeout(function(){
		var move = anime({
		targets: '#ban_card2',
		translateY: 700
		});
	}, 2000);

	setTimeout(function(){
		var move = anime({
		targets: '#ban_card3',
		translateY: 700
		});
	}, 3000);

}


