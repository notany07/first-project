$(function(){
    // 퀵메뉴 이동
    $(window).scroll(function(){
        var scrollTopNum = $(document).scrollTop()+15;
        if(scrollTopNum<=150){
            scrollTopNum=150;
        }
        $("#quick").stop().animate({top:scrollTopNum},700);
    });

    var slide=0;

    setInterval(function(){
        var next_slide=(slide+1)%3;
        
        $(".slideList").find("div").eq(slide).fadeOut();
        $(".slideList").find("div").eq(next_slide).fadeIn();

        slide=next_slide;
    },5000);
    
    // include로 불러오기

    // $(document).ready( function() {
    //     $("#quick_inclue").load("../quick.html");
    //     $("header").load("../header.html");
    //     $("footer").load("../footer.html");
    //     $("#background_include").load("../background.html");
    // });

   
});