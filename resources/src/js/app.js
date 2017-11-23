$(document).ready(function(){
  console.log('hello');

  $('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    nextArrow: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
    prevArrow: '<i class="fa fa-chevron-left" aria-hidden="true"></i>'
  });


  $('.menu').on('click', function(){
    $('.mobile').toggleClass('active');
    // $('.mobile').toggleClass('show_list');
    // $('.mobile').fadeIn();
  });


  $('.hamburger').on('click', function(){
    $('.hamburger').toggleClass('is-active');
  });


  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 150) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });

  //Click event to scroll to top
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop: 0},1000);
    return false;

  });

  $('.testing').slideDown();




});
