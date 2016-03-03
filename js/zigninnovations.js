// $(document).ready(function() {
//   $('#fullpage').fullpage({
//     anchors: ['start', 'about_us', 'about_us', 'about_us', 'expertise', 'projects', 'contact'],
//     navigation: false,
//     menu: "#navigation",
//     responsiveWidth: 900,
//     scrollBar:true,
//     autoScrolling: false,
// 		fitToSection: false,
//     normalScrollElements: '#section2, #section1',
//
//   });

  $('.bottomBar .btn').click(function(e) {
				e.preventDefault();
				$.fn.fullpage.moveTo(2);
  });


	////////////////////////////////////
  /*
  	var box1poz = $('.box1 .inverse').outerWidth()
  	$('#aboutTop').css({
  		left: box1poz + 18 + "px"
  	})

	var box1position = $('.box1').position()
	var box2position = $('.box2').position()
	console.log(box2position.left - (box1poz + 18))

	var draw = SVG('aboutTop').size(700,450)

	var liniiBox1 = draw.group()
  	var linie01 = liniiBox1.line(0,102, box2position.left - box1position.left - box1poz, box2position.top - box1position.top + 150 ).stroke({ color: '#fff' , width: 1 })
  	var linie02 = liniiBox1.line(0,112, box2position.left - box1position.left - box1poz + 10, box2position.top - box1position.top + 160 ).stroke({ color: '#fff' , width: 1 })
	var linie03 = liniiBox1.line(0,122, box2position.left - box1position.left - box1poz + 20, box2position.top - box1position.top + 170 ).stroke({ color: '#fff' , width: 1 })
	var linie04 = liniiBox1.line(0,132, box2position.left - box1position.left - box1poz + 30, box2position.top - box1position.top + 180 ).stroke({ color: '#fff' , width: 1 })
	var linie05 = liniiBox1.line(0,142, box2position.left - box1position.left - box1poz + 40, box2position.top - box1position.top + 190 ).stroke({ color: '#fff' , width: 1 })
	var linie06 = liniiBox1.polyline('1,0 1,152.7 253.9,299.2').fill('none').stroke({ color: '#fff' , width: 1 })
	*/
// });

$(window).scroll(function() {

  if( $(this).scrollTop() < 300 ) {
    $(".navbar-brand .logo").removeClass('visible');
    $(".navbar").removeClass('sticky');
    $("#navbarframe").addClass("visible");
  } else {
    $("#navbarframe").removeClass("visible");
    $(".navbar-brand .logo").addClass("visible");
    $(".navbar").addClass("sticky");

  }
});

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


$( document ).ready(function() {
  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
      target: '.navbar-fixed-top'
  })

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
  });

});



  // Google Maps Scripts
  var map = null;
  // When the window has finished loading create our google map below
  google.maps.event.addDomListener(window, 'load', init);
  google.maps.event.addDomListener(window, 'resize', function() {
      map.setCenter(new google.maps.LatLng(52.0327419, 5.1015501));
  });

  function init() {
      // Basic options for a simple Google Map
      // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
      var mapOptions = {
          // How zoomed in you want the map to start at (always required)
          zoom: 15,

          // The latitude and longitude to center the map (always required)
          center: new google.maps.LatLng(52.0327419, 5.1015501), // New York

          // Disables the default Google Maps UI components
          disableDefaultUI: true,
          scrollwheel: false,
          draggable: false,

          // How you would like to style the map.
          // This is where you would paste any style found on Snazzy Maps.
          styles: [{
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [{
                  "color": "#000000"
              }, {
                  "lightness": 17
              }]
          }, {
              "featureType": "landscape",
              "elementType": "geometry",
              "stylers": [{
                  "color": "#000000"
              }, {
                  "lightness": 20
              }]
          }, {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [{
                  "color": "#000000"
              }, {
                  "lightness": 17
              }]
          }, {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [{
                  "color": "#000000"
              }, {
                  "lightness": 29
              }, {
                  "weight": 0.2
              }]
          }, {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [{
                  "color": "#000000"
              }, {
                  "lightness": 18
              }]
          }, {
              "featureType": "road.local",
              "elementType": "geometry",
              "stylers": [{
                  "color": "#000000"
              }, {
                  "lightness": 16
              }]
          }, {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [{
                  "color": "#000000"
              }, {
                  "lightness": 21
              }]
          }, {
              "elementType": "labels.text.stroke",
              "stylers": [{
                  "visibility": "on"
              }, {
                  "color": "#000000"
              }, {
                  "lightness": 16
              }]
          }, {
              "elementType": "labels.text.fill",
              "stylers": [{
                  "saturation": 36
              }, {
                  "color": "#000000"
              }, {
                  "lightness": 40
              }]
          }, {
              "elementType": "labels.icon",
              "stylers": [{
                  "visibility": "off"
              }]
          }, {
              "featureType": "transit",
              "elementType": "geometry",
              "stylers": [{
                  "color": "#000000"
              }, {
                  "lightness": 19
              }]
          }, {
              "featureType": "administrative",
              "elementType": "geometry.fill",
              "stylers": [{
                  "color": "#000000"
              }, {
                  "lightness": 20
              }]
          }, {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers": [{
                  "color": "#000000"
              }, {
                  "lightness": 17
              }, {
                  "weight": 1.2
              }]
          }]
      };

      // Get the HTML DOM element that will contain your map
      // We are using a div with id="map" seen below in the <body>
      var mapElement = document.getElementById('map');

      // Create the Google Map using out element and options defined above
      map = new google.maps.Map(mapElement, mapOptions);

      // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
      var image = '../img/map-marker.png';
      var myLatLng = new google.maps.LatLng(52.0327419, 5.1015501);
      var beachMarker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: image
      });
  }
