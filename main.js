$(document).ready(function() {

	// Troca a cor do header ao descer a pagina
	$(window).scroll(function() {
		if ($(this).scrollTop() > 0) {
			$("header.main-header").css({
				background:"#FFFFFF",
        boxShadow: "0px 1px 1px #f0f0f0",
        color: 'black'
			});
		} else {
			$("header.main-header").css({
        background: "transparent",
        boxShadow: "none",
        color: 'white'
      });
		}
	});

	// Smooth Scroll By: Css tricks

	$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: (target.offset().top - 100)
        }, 1000);
        return false;
      }
    }
  });

	// Menu Responsivo
	$('.toggle').on("click", function() {
		$('.main-nav').toggleClass('open');
	});

	$('.main-nav a').on("click", function() {
		$('.main-nav').removeClass('open');
	});
	
  // Remove maps generator link
  //$('a[href="http://maps-generator.com/pt"]').css('display', 'none')

});