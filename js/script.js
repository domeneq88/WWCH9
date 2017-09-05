$(document).ready(function(){
	$('#myCarousel').carousel({
		interval : 2500
	});

	var canvas = document.getElementById('canvas');
	canvas.height = 550;
	canvas.width = 550;
	var canvasContext = canvas.getContext('2d');

	
	canvasContext.beginPath();
	canvasContext.moveTo(0, 25);
	canvasContext.lineTo(200, 200);
	canvasContext.stroke();

	canvasContext.beginPath();
	canvasContext.moveTo(500, 450);
	canvasContext.lineTo(300, 275);
	canvasContext.stroke();


});


//smooth scroll


$('a[href*="#"]')

  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {

    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
 
      if (target.length) {

        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {

          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus();
          };
        });
      }
    }
  });


$(function () {
  $(document).scroll(function () {
    var $header = $(".header");
    var $nav = $(".navbar-default")
    $nav.toggleClass('navbar-fixed-top', $(this).scrollTop() > $header.height());
  });
});