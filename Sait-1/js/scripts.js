$(document).ready(function()
{
	$(".slide-one").owlCarousel
	({
		item: 3,
		loop:true,
		autoWidth:true,
		margin:10,
	});
	$(".slide-one").owlCarousel();
	$('.customNextBtn').click(function() {
		$(".slide-one").trigger('next.owl.carousel');
	})
	$('.customPrevBtn').click(function() {
		$(".slide-one").trigger('prev.owl.carousel');
	})
})
$('.languageBox  a').on('click', function(){
    
    if($(this).hasClass('backgroundActiv'))
	{
       
    }
	else
	{
        $('.languageBox  a').removeClass('backgroundActiv');
        $(this).addClass('backgroundActiv');
    }
   return false;
});
menu.onclick = function myFunction()
{
	var x = document.getElementById('myTopnav');
	if (x.className === "topnavru")
	{
		x.className += " responsive";
	}
	else
	{
		x.className = "topnavru";
	}
}


$('.InfoMapText').on('click', function(){
    
    if($(this).hasClass('map'))
	{
       $('.InfoMapText').removeClass('map');
    }
	else
	{
        $(this).addClass('map');
    }
   return false;
});

$(function(){
  $('.minimized').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"></div>');
    $('#magnify').css({
     left: ($(document).width() - $('#magnify').outerWidth())/2,
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
})
$(function(){
  $('.InfoMapText').click(function(event) {
    $('body').append('<div id="overlay"></div><div id="magnify"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.5369544319024!2d30.487627315942458!3d50.393829899323826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8dab3f4759d%3A0x67dced8fbfa28384!2z0YPQuy4g0JLQsNGB0LjQu9GM0LrQvtCy0YHQutCw0Y8sIDMwLCDQmtC40LXQsiwg0KPQutGA0LDQuNC90LAsIDAyMDAw!5e0!3m2!1sru!2sby!4v1621863532849!5m2!1sru!2sby" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
     left: ($(document).width() - $('#magnify').outerWidth())/2,
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
})