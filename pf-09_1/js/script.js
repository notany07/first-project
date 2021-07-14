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

    function includeHTML(callback) {
        var z, i, elmnt, file, xhr;
        /*loop through a collection of all HTML elements:*/
        z = document.getElementsByTagName("*");
        for (i = 0; i < z.length; i++) {
          elmnt = z[i];
          /*search for elements with a certain atrribute:*/
          file = elmnt.getAttribute("include-html");
          //console.log(file);
          if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
              if (this.readyState == 4) {
                if (this.status == 200) {
                  elmnt.innerHTML = this.responseText;
                }
                if (this.status == 404) {
                  elmnt.innerHTML = "Page not found.";
                }
                /*remove the attribute, and call this function once more:*/
                elmnt.removeAttribute("include-html");
                includeHTML(callback);
              }
            };
            xhr.open("GET", file, true);
            xhr.send();
            /*exit the function:*/
            return;
          }
        }
        setTimeout(function() {
          callback();
        }, 0);
      }
});