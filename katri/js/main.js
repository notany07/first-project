$(function(){
    // swipe-slide
    var main_slide = new Swiper('.slider .swiper-container', {
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        loop: true,
        paginationClickable: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        pagination: '.swiper-pagination',
		paginationClickable: true,
    });
    // 자동재생 시작
    $(".auto_btn span.auto").on("click",function(){
        $(this).removeClass("on");
        $(".auto_btn span.pause").addClass("on");
        main_slide.startAutoplay();
    });
    // 자동재생 정지
    $(".auto_btn span.pause").on("click",function(){
        $(this).removeClass("on");
        $(".auto_btn span.auto").addClass("on");
        main_slide.stopAutoplay();
    });

    // swipe-service
    new Swiper('.service_slider .swiper-container', {
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        loop: true,
        paginationClickable: true,
        slidesPerView: 6,
        grabCursor: true,
        // 이전,다음 버튼 실행
        nextButton: '.nextBtn',
		prevButton: '.prevBtn'
    });

    // notice 공지사항~채용공고
    $(".notice .notice_inner .left .title ul li").on("click",function(){
        $(this).addClass('on').siblings().removeClass('on');

        var x = $(this).index();
        $(".notice .notice_inner .left .contents>ul>li").eq(x).removeClass('off').siblings().addClass('off');
        if((x+1)==1){
            $(".more>a").attr("href","sub_notice.html")
        }
    });
    
});