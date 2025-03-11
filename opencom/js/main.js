var swiper = new Swiper("#portfolio .swiper", {
    spaceBetween: 10,
    centeredSlides: false,
    slidesPerView: 1,
    loop:true,
    loopedSlides: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    autoplay:false,
    breakpoints: {
        481: {
            slidesPerView: 2,
        }
    }
});

function fillProgressBar(container) {
    const fillValue = container.getAttribute('data-fill');
    const progressBar = container.querySelector('.progress-bar');
    progressBar.style.width = fillValue + "%";
}

function showProgressBars() {
    const trigger = document.querySelector('#skill');
    const triggerPosition = trigger.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (triggerPosition < screenPosition) {
        const progressContainers = document.querySelectorAll('.progress-container');
        progressContainers.forEach(container => {
            container.style.opacity = "1"; // 막대 보이게 하기
            fillProgressBar(container); // 막대 채우기
        });
        window.removeEventListener('scroll', showProgressBars); // 이벤트 리스너 제거
    }
}

window.addEventListener('scroll', showProgressBars);


$(function(){
    /* =============================버튼============================ */
    // btn_more
    var btn=0;
    $(".btn_more").on("click",function(){
        if(btn==0){
            $(".btn_top").fadeIn();
            $(".btn_bottom").fadeIn();
            $(".btn_more").css("transform","rotate(45deg)");
            btn++;
        }else if(btn==1){
            $(".btn_top").fadeOut();
            $(".btn_bottom").fadeOut();
            $(".btn_more").css("transform","rotate(0)");
            btn--;
        }
    });

    // btn-top
    $(".btn_top").on("click",function(){
        $("html, body").animate({scrollTop:0},400);
        $(".btn_top").fadeOut();
        $(".btn_bottom").fadeOut();
        $(".btn_more").css("transform","rotate(0)");
        btn=0;
    });
    // btn-bottom
    $(".btn_bottom").on("click",function(){
        $("html, body").animate({scrollTop:$(document).height()},400);
        $(".btn_top").fadeOut();
        $(".btn_bottom").fadeOut();
        $(".btn_more").css("transform","rotate(0)");
        btn=0;
    });

    /* =============================메뉴============================ */
    // 각 메뉴 클릭시 컨텐츠 영역의 아이디값을 가진 컨텐츠이동
    // about
    $(".header_main>ul>li:nth-child(1)").on("click",function(){
        var about = $("#intro").position();
        $("html, body").animate({
            scrollTop: about.top - 60
        },400);
    });
    // portfolio
    $(".header_main>ul>li:nth-child(2)").on("click",function(){
        var about = $("#about").position();
        $("html, body").animate({
            scrollTop: about.top - 60
        },400);
    });
    $(".header_main>ul>li:nth-child(3)").on("click",function(){
        var about = $("#skill").position();
        $("html, body").animate({
            scrollTop: about.top - 20
        },400);
    });
    $(".header_main>ul>li:nth-child(4)").on("click",function(){
        var about = $("#portfolio").position();
        $("html, body").animate({
            scrollTop: about.top - 20
        },400);
    });

    // 스크롤 이동시 메뉴색과 라인색 변경
    $(window).scroll(function(){
        var height = $(document).scrollTop();
        // about
        if(height >= 500 && height<=1284){
            $(".header_main>ul>li").removeClass("on on2");
            $(".header_main>ul>li:nth-child(2)").addClass("on on2");
        }
        // portifolo
        else if(height>=1285 && height<=1830){
            $(".header_main>ul>li").removeClass("on on2");
            $(".header_main>ul>li:nth-child(3)").addClass("on on2");
        }
        // etc
        else if(height>=1831){
            $(".header_main>ul>li").removeClass("on on2");
            $(".header_main>ul>li:nth-child(4)").addClass("on on2");
        }
        // no class
        else{
            $(".header_main>ul>li").removeClass("on on2");
            $(".header_main>ul>li:nth-child(1)").addClass("on on2");
        }
    });
})