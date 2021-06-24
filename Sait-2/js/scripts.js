$('.Feedback').magnificPopup();
$('.btn_on_click').on('click', function(){
    if($(this).hasClass('place_the_cursor'))
    {

    }
    else
    {
        $('.btn_on_click').removeClass('place_the_cursor');
        $(this).addClass('place_the_cursor');
    }
    return false;
});
$('.btn_Fona_O_nAS').on('click', function(){
    if($(this).hasClass('click_use_item'))
    {

    }
    else
    {
        $('.btn_Fona_O_nAS').removeClass('click_use_item');
        $(this).addClass('click_use_item');
    }
    return false;
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    autoWidth: true,
})
$('.customPrevBtn-zero').click(function() {
    $(".owl-carousel").trigger('prev.owl.carousel');
})
$('.customNextBtn-zero').click(function() {
    $(".owl-carousel").trigger('next.owl.carousel');
})

$(function(){
  $('.top_Line_info_nav').click(function(event) {
    $('body').append('<div id="overlay"></div><div id="magnify"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.1009728728434!2d30.364652216210946!3d59.93046666971968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469631bb82e2fee7%3A0x66c603c9b63d947!2z0J3QtdCy0YHQutC40Lkg0L_RgC4sIDEzMCwg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsINCg0L7RgdGB0LjRjywgMTkxMDM2!5e0!3m2!1sru!2sby!4v1623139522177!5m2!1sru!2sby" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe><div id="close-popup"><i></i></div></div>');
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