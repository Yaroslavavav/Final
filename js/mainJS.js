 $(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper('.swiper-container', {
    	navigation: {
    		nextEl: '.swiper-button-next',
    		prevEl: '.swiper-button-prev',
    	},
    	pagination: {
    		el: '.swiper-pagination',
    		type: 'bullets',
    	},
    });
  });