$(function(){
    $(".seach_click").on("click",function(){
        $(".search").show();
    });

    $(".close_bar").on("click",function(){
        $(".search").hide();
    });
})