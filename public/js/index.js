$(window).on("load", function(){

// home section slide show
	let slideIndex = $(".slide.active").index();
	const slideLen = $(".slide").length;
	
	function slideShow(){
		$('.slide').removeClass("active").eq(slideIndex).addClass("active");
		if(slideIndex == slideLen-1){
			slideIndex = 0;
		} else {
			slideIndex++;
		}
		setTimeout(slideShow,6000);
	}
	slideShow();

// counter js
    $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
      
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
        {
          duration: 3000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        });
      });

// book section carousel slider
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        nav:true,
        margin:10,
        responsive:{
            0:{
                items:2
            },
            768:{
                items:3
            },            
            992:{
                items:4
            }
        }
    });
});

const topBtn = document.querySelector('.top-button');
window.addEventListener("scroll", function(){
    topBtn.classList.toggle('visible', window.scrollY > 500);
});