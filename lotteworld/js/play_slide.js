$(function(){
    new Swiper('.roll_area .swiper-container', {
        autoplay: false,
        autoplayDisableOnInteraction: false,
        loop: false,
        paginationClickable: true,
        slidesPerView: 'auto',
        grabCursor: true,
        scrollbar: {
			el: '.play .swiper-scrollbar',
			draggable: true,
			snapOnRelease: false,
			dragSize: 46
		},
        spaceBetween: 30,
        mousewheel: false
    });
})