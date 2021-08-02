$(function(){
    
    // 개별메뉴
    $('.gmenu>ul>li').mouseenter(function(){
        $('.gmenu>ul>li>ul>li').stop().slideDown(100);
    });
    $('.gmenu>ul>li').mouseleave(function(){
        $('.gmenu>ul>li>ul>li').stop().slideUp(100);
    });

    // 위아래 슬라이드
    var x=0;
    setInterval(function(){
        if(x<2){
            x++;
        }else{
            x=0;
        }
        var result = x*(-300)+"px";
        $(".slideList").animate({top:result},400);
    },3000);

    // 팝업
    $(".layerpopup").on('click',function(e){
        e.preventDefault(); 
        $("#popup").fadeIn();
    }); 
    $(".close").on('click',function(e){
        $("#popup").fadeOut();
    });
});