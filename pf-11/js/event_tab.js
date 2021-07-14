$(function(){
    $(".touchTab ul li").on("click",function(){
        $(this).addClass('on').siblings().removeClass('on');
        var x = $(this).index();
        
        $('.list').eq(x).removeClass('off').siblings().addClass('off');
    })
})