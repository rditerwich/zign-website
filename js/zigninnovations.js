$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['start', 'about_us', 'about_us', 'about_us', 'expertise', 'projects', 'contact'],
    navigation: false,
    menu: "navigation",
    responsiveWidth: 900,
    scrollBar:true,
    // autoScrolling: false,
		fitToSection: false,
    normalScrollElements: '#section2, #section1',

  });

  $('.bottomBar .btn').click(function(e) {
				e.preventDefault();
				$.fn.fullpage.moveTo(2);
  });



});

  $(window).scroll(function() {
    // console.log($(this).scrollTop());

    if( $(this).scrollTop() > 35 ) {
      $("#navigation").addClass("nav-scrolled");
    } else {
      $("#navigation").removeClass("nav-scrolled");
    }
  });
