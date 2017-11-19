$(document).ready(function(){
  console.log('hello');

  $('.test').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});


$(document).ready(function(){
  $('.hamburger').click(function(){
    $(this).toggleClass('is-active');
  });
});
