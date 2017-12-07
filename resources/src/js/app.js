/* global google dataLayer */


//map style
const map1 =[
  {
    'featureType': 'administrative',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#444444'
      }
    ]
  },
  {
    'featureType': 'administrative.country',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#757575'
      }
    ]
  },
  {
    'featureType': 'administrative.province',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#757575'
      }
    ]
  },
  {
    'featureType': 'administrative.locality',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#757575'
      }
    ]
  },
  {
    'featureType': 'administrative.neighborhood',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#9e9e9e'
      }
    ]
  },
  {
    'featureType': 'landscape',
    'elementType': 'all',
    'stylers': [
      {
        'color': '#f2f2f2'
      }
    ]
  },
  {
    'featureType': 'poi',
    'elementType': 'all',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'poi.park',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#e8f5e9'
      },
      {
        'visibility': 'on'
      }
    ]
  },
  {
    'featureType': 'road',
    'elementType': 'all',
    'stylers': [
      {
        'saturation': -100
      },
      {
        'lightness': 45
      }
    ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'all',
    'stylers': [
      {
        'visibility': 'simplified'
      }
    ]
  },
  {
    'featureType': 'road.arterial',
    'elementType': 'labels.icon',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'transit',
    'elementType': 'all',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'transit.station',
    'elementType': 'labels',
    'stylers': [
      {
        'visibility': 'on'
      }
    ]
  },
  {
    'featureType': 'transit.station',
    'elementType': 'labels.icon',
    'stylers': [
      {
        'visibility': 'on'
      }
    ]
  },
  {
    'featureType': 'transit.station.airport',
    'elementType': 'geometry',
    'stylers': [
      {
        'visibility': 'on'
      }
    ]
  },
  {
    'featureType': 'transit.station.airport',
    'elementType': 'geometry.stroke',
    'stylers': [
      {
        'color': '#492091'
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'all',
    'stylers': [
      {
        'color': '#b6dae0'
      },
      {
        'visibility': 'on'
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#bbdefb'
      }
    ]
  }
];


$(document).ready(function(){
  const $menu = $('.menu');
  const $hamburger = $('.hamburger');
  const $mobile = $('.mobile');
  const $scrollToTop = $('.scrollToTop');
  const $carousel = $('#eshop');
  const $carousel1 = $('#hidd');
  const $carousel2 = $('#mix');
  const $carousel3 = $('#code');
  const $carousel4 = $('#jamm');
  const $carousel5 = $('#rave');
  const $carousel6 = $('#colm');
  const $carousels = [$carousel, $carousel1, $carousel2, $carousel3, $carousel4, $carousel5, $carousel6];

  //hamburger responsive menu
  $menu.on('click', function(){
    $mobile.toggleClass('active');
    $hamburger.toggleClass('is-active');
  });

  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 150) {
      $scrollToTop.fadeIn();
    } else {
      $scrollToTop.fadeOut();
    }
  });

  //Click event to scroll to top
  $scrollToTop.click(function(){
    $('html, body').animate({scrollTop: 0},1000);
    return false;
  });

  //fadeIn text banner title
  $('.testing').fadeIn(3000);

  //Google map
  if ($('div#map').length > 0){
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 51.536342 , lng: -0.32307},
      zoom: 14,
      map: map,
      styles: map1,
      zoomControl: false,
      disableDefaultUI: true
    });
    this.cityCircle = new google.maps.Circle({
      strokeColor: '#06BC9B',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#06BC9B',
      fillOpacity: 0.35,
      map: map,
      center: {lat: 51.536342, lng: -0.32307},
      radius: 500,
      disableDefaultUI: true
    });
  }

  //carousel section
  if ($('div.carousel' === $carousels.length)){
    $carousels.map(carousel => carousel.lightSlider({
      // onSliderLoad: function (el) {
      //   el[0].height('40vh');
      // }
    }));
  }

  window.dataLayer = window.dataLayer || [];
  function gtag(){
    dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'UA-110589409-1');


});
