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
