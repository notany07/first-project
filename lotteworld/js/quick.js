$(function(){
    // quick_hover
    $(".quick_area>.quick_btn").mouseenter(function(){
        TweenMax.to($(".quick_area .quick_btn span"), 0.2, {left:"-100%", ease:Power3.easeOut, onComplete:function(){
            TweenMax.to($(".quick_area .quick_btn span"), 0, {left:"100%", ease:Power3.easeOut});
			TweenMax.to($(".quick_area .quick_btn span"), 0.2, {left:"0", ease:Power3.easeOut});
        }});
    });

    // quick_click
    $(".quick_area .quick_btn").on("click",function(){
        $(".quick_open").fadeIn();
        $(".quick_btn").addClass("off");
        $(".close_btn").removeClass("off");
        $(".quick_bg").css({"display":"block"});
    });
    $(".quick_area .close_btn").on("click",function(){
        $(".quick_open").fadeOut();
        $(".close_btn").addClass("off");
        $(".quick_btn").removeClass("off");
        $(".quick_bg").css({"display":"none"});
    });

    // quick_open
    $(".quick_open>ul>li>.links>.link1").on("click",function(event){
        event.preventDefault();
        var top = $(".info_main").offset().top + (-147) +"px";
        $('html, body').stop().animate({scrollTop:top});
    })
    $(".quick_open>ul>li>.links>.link2").on("click",function(event){
        event.preventDefault();
        var top = $(".play").offset().top + (-147) +"px";
        $('html, body').stop().animate({scrollTop:top});
    })
    $(".quick_open>ul>li>.links>.link3").on("click",function(event){
        event.preventDefault();
        var top = $(".event").offset().top + (-147) +"px";
        $('html, body').stop().animate({scrollTop:top});
    })
    $(".quick_open>ul>li>.links>.link4").on("click",function(event){
        event.preventDefault();
        var top = $(".help").offset().top + (-147) +"px";
        $('html, body').stop().animate({scrollTop:top});
    })
})