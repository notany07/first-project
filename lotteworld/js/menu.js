$(function(){
    // menu_slideDown
    $(".bottom_nav>.header_inner>.menu, .bottom_box").mouseenter(function(){
        $(".bottom_box").stop().slideDown();
    });
    $(".bottom_nav>.header_inner>.menu, .bottom_box").mouseleave(function(){
        $(".bottom_box").stop().slideUp();
    });
    // hover
    $(".bottom_nav .header_inner .menu ul li").mouseenter(function(){
        var x = $(this).index();
        $(".bottom_box>.header_inner>.center>div").eq(x).removeClass("off").siblings().addClass("off");
    });
    // submenu hover
    $(".bottom_box>.header_inner>.center>div>ul>li, .bottom_box>.header_inner>.center>div>ul>li>ul").mouseenter(function(){
       $(this).find("ul").show();
    });
    $(".bottom_box>.header_inner>.center>div>ul>li, .bottom_box>.header_inner>.center>div>ul>li>ul").mouseleave(function(){
        $(this).find("ul").hide();
    });
})