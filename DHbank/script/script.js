$(function(){

    // 메뉴
    $(function(){
        $('nav>ul>li').mouseenter(function(){
            $('.submenu').stop().slideDown(300);
        });
        $('nav>ul>li').mouseleave(function(){
            $('.submenu').stop().slideUp(300);
        });
    });

    // 이미지 좌우슬라이딩
    var x=0;
    setInterval(function(){
        if(x<2){
            x++;
        }else{
            x=0;
        }
        var result = (-1200)*x+"px";
        $('.slidelist').animate({left:result});
    },3000);

    // 이미지 팝업
    $('.layerpop').on('click',function(e){
        e.preventDefault();
        $('#popup').fadeIn();
    });
    
    $('.close').on('click',function(e){
        $('#popup').fadeOut();
    });
});