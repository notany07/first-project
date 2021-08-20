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
        var about = $("#skill").position();
        $("html, body").animate({
            scrollTop: about.top - 60
        },400);
    });
    // portfolio
    $(".header_main>ul>li:nth-child(2)").on("click",function(){
        var about = $("#portfolio").position();
        $("html, body").animate({
            scrollTop: about.top - 60
        },400);
    });
    $(".header_main>ul>li:nth-child(3)").on("click",function(){
        var about = $("#etc").position();
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
            $(".header_main>ul>li:nth-child(1)").addClass("on on2");
        }
        // portifolo
        else if(height>=1285 && height<=5902){
            $(".header_main>ul>li").removeClass("on on2");
            $(".header_main>ul>li:nth-child(2)").addClass("on on2");
        }
        // etc
        else if(height>=5903){
            $(".header_main>ul>li").removeClass("on on2");
            $(".header_main>ul>li:nth-child(3)").addClass("on on2");
        }
        // no class
        else{
            $(".header_main>ul>li").removeClass("on on2"); 
        }
    });

    /* =============================팝업============================ */
    // #popup1
    $(function(){
        // 클릭시 이미지 + 화살표 나타나고 사라짐
        $("#etc>.etc_main>.etc_1").on("click",function(e){
            e.preventDefault();
            $("#popup>.popup_main>.bg").fadeIn();
            $("#popup>.popup_main>#popup1").fadeIn();
            $("#popup>.popup_main>#popup>button").fadeIn();
        });
        // 이미지에 마우스 들어가면 버튼 나타남
        $("#popup>.popup_main>#popup1").mouseenter(function(){
            $("#popup>.popup_main>#popup1>button").stop().fadeIn();
        });
        // 이미지에 마우스 나가면 버튼 사라짐
        $("#popup>.popup_main>#popup1").mouseleave(function(){
            $("#popup>.popup_main>#popup1>button").stop().fadeOut();
        });
        // bg클릭시 popup창 사라짐
        $("#popup>.popup_main>.bg").on("click",function(){
            $("#popup>.popup_main>.bg").fadeOut();
            $("#popup>.popup_main>#popup1").fadeOut();
            $("#popup>.popup_main>#popup>button").fadeOut();
        });
        $("#popup>.popup_main>#popup1>.popList>.popImg").on("click",function(){
            $("#popup>.popup_main>.bg").fadeOut();
            $("#popup>.popup_main>#popup1").fadeOut();
            $("#popup>.popup_main>#popup1>button").fadeOut();
        });
        
        // #popup1 - slide
        var max = 0;
        var current = 0;
        var container;

        function animate($direction){
            if($direction == "next"){
                $(container.children()[1]).css("margin-left","800px");
                container.append(container.children()[0]);
                TweenMax.to(container.children()[0],0.8,{
                    marginLeft:0,
                    ease:Expo.easeOut
                });
            }else if($direction == "prev"){
                container.prepend(container.children()[max - 1]);
                $(container.children()[0]).css("margin-left","-800px");
                TweenMax.to(container.children()[0],0.8,{
                    marginLeft:0,
                    ease:Expo.easeOut
                });
            }
        };

        function prev(){
            current--;
            if (current < 0) current = max - 1;
            animate("prev");
        }
        function next(){
            current++;
            if (current > max -1) current - 0;
            animate("next");
        }
        function events(){
            $("#popup>.popup_main>#popup1>button.prev").on("click", prev);
            $("#popup>.popup_main>#popup1>button.next").on("click", next);
        }
        function init(){
            container = $("#popup>.popup_main>#popup1>.popList");
            max = container.children().length;
            container.css("margin-left","-800px");
            container.prepend(container.children()[max - 1]);
            // .prepend() : 선택한 요소 내의 앞 위치에 새 요소 생성
            // .append() : 선택한 요소 내의 마지막 위치에 새 요소 생성
            events();
        }
        $(document).ready(init);
    });

    // #popup2
    $(function(){
        // 클릭시 이미지 + 화살표 나타나고 사라짐
        $("#etc>.etc_main>.etc_2").on("click",function(e){
            e.preventDefault();
            $("#popup>.popup_main>.bg").fadeIn();
            $("#popup>.popup_main>#popup2").fadeIn();
            $("#popup>.popup_main>#popup>button").fadeIn();
        });
        // 이미지에 마우스 들어가면 버튼 나타남
        $("#popup>.popup_main>#popup2").mouseenter(function(){
            $("#popup>.popup_main>#popup2>button").stop().fadeIn();
        });
        // 이미지에 마우스 나가면 버튼 사라짐
        $("#popup>.popup_main>#popup2").mouseleave(function(){
            $("#popup>.popup_main>#popup2>button").stop().fadeOut();
        });
        // bg클릭시 popup창 사라짐
        $("#popup>.popup_main>.bg").on("click",function(){
            $("#popup>.popup_main>.bg").fadeOut();
            $("#popup>.popup_main>#popup2").fadeOut();
            $("#popup>.popup_main>#popup>button").fadeOut();
        });
        $("#popup>.popup_main>#popup2>.popList>.popImg").on("click",function(){
            $("#popup>.popup_main>.bg").fadeOut();
            $("#popup>.popup_main>#popup2").fadeOut();
            $("#popup>.popup_main>#popup2>button").fadeOut();
        });
        $("#popup>.popup_main>#popup2>.popList>.pdf").on("click",function(){
            $("#popup>.popup_main>.bg").stop();
            $("#popup>.popup_main>#popup2").stop();
            $("#popup>.popup_main>#popup2>button").stop();
        });

        // #popup2 - slide
        var max = 0;
        var current = 0;
        var container;

        function animate($direction){
            if($direction == "next"){
                $(container.children()[1]).css("margin-left","800px");
                container.append(container.children()[0]);
                TweenMax.to(container.children()[0],0.8,{
                    marginLeft:0,
                    ease:Expo.easeOut
                });
            }else if($direction == "prev"){
                container.prepend(container.children()[max - 1]);
                $(container.children()[0]).css("margin-left","-800px");
                TweenMax.to(container.children()[0],0.8,{
                    marginLeft:0,
                    ease:Expo.easeOut
                });
            }
        };

        function prev(){
            current--;
            if (current < 0) current = max - 1;
            animate("prev");
        }
        function next(){
            current++;
            if (current > max -1) current - 0;
            animate("next");
        }
        function events(){
            $("#popup>.popup_main>#popup2>button.prev").on("click", prev);
            $("#popup>.popup_main>#popup2>button.next").on("click", next);
        }
        function init(){
            container = $("#popup>.popup_main>#popup2>.popList");
            max = container.children().length;
            container.css("margin-left","-800px");
            container.prepend(container.children()[max - 1]);
            // .prepend() : 선택한 요소 내의 앞 위치에 새 요소 생성
            // .append() : 선택한 요소 내의 마지막 위치에 새 요소 생성
            events();
        }
        $(document).ready(init);
    });

    // #popup3
    $(function(){
        // 클릭시 이미지 + 화살표 나타나고 사라짐
        $("#etc>.etc_main>.etc_3").on("click",function(e){
            e.preventDefault();
            $("#popup>.popup_main>.bg").fadeIn();
            $("#popup>.popup_main>#popup3").fadeIn();
            $("#popup>.popup_main>#popup>button").fadeIn();
        });
        // 이미지에 마우스 들어가면 버튼 나타남
        $("#popup>.popup_main>#popup3").mouseenter(function(){
            $("#popup>.popup_main>#popup3>button").stop().fadeIn();
        });
        // 이미지에 마우스 나가면 버튼 사라짐
        $("#popup>.popup_main>#popup3").mouseleave(function(){
            $("#popup>.popup_main>#popup3>button").stop().fadeOut();
        });
        // bg클릭시 popup창 사라짐
        $("#popup>.popup_main>.bg").on("click",function(){
            $("#popup>.popup_main>.bg").fadeOut();
            $("#popup>.popup_main>#popup3").fadeOut();
            $("#popup>.popup_main>#popup>button").fadeOut();
        });
        $("#popup>.popup_main>#popup3>.popList>.popImg").on("click",function(){
            $("#popup>.popup_main>.bg").fadeOut();
            $("#popup>.popup_main>#popup3").fadeOut();
            $("#popup>.popup_main>#popup3>button").fadeOut();
        });
    
        // #popup3 - slide
        var max = 0;
        var current = 0;
        var container;

        function animate($direction){
            if($direction == "next"){
                $(container.children()[1]).css("margin-left","800px");
                container.append(container.children()[0]);
                TweenMax.to(container.children()[0],0.8,{
                    marginLeft:0,
                    ease:Expo.easeOut
                });
            }else if($direction == "prev"){
                container.prepend(container.children()[max - 1]);
                $(container.children()[0]).css("margin-left","-800px");
                TweenMax.to(container.children()[0],0.8,{
                    marginLeft:0,
                    ease:Expo.easeOut
                });
            }
        };

        function prev(){
            current--;
            if (current < 0) current = max - 1;
            animate("prev");
        }
        function next(){
            current++;
            if (current > max -1) current - 0;
            animate("next");
        }
        function events(){
            $("#popup>.popup_main>#popup3>button.prev").on("click", prev);
            $("#popup>.popup_main>#popup3>button.next").on("click", next);
        }
        function init(){
            container = $("#popup>.popup_main>#popup3>.popList");
            max = container.children().length;
            container.css("margin-left","-800px");
            container.prepend(container.children()[max - 1]);
            // .prepend() : 선택한 요소 내의 앞 위치에 새 요소 생성
            // .append() : 선택한 요소 내의 마지막 위치에 새 요소 생성
            events();
        }
        $(document).ready(init);
    });

    // #popup4
    $(function(){
        // 클릭시 이미지 + 화살표 나타나고 사라짐
        $("#etc>.etc_main>.etc_4").on("click",function(e){
            e.preventDefault();
            $("#popup>.popup_main>.bg").fadeIn();
            $("#popup>.popup_main>#popup4").fadeIn();
            $("#popup>.popup_main>#popup>button").fadeIn();
        });
        // 이미지에 마우스 들어가면 버튼 나타남
        $("#popup>.popup_main>#popup4").mouseenter(function(){
            $("#popup>.popup_main>#popup4>button").stop().fadeIn();
        });
        // 이미지에 마우스 나가면 버튼 사라짐
        $("#popup>.popup_main>#popup4").mouseleave(function(){
            $("#popup>.popup_main>#popup4>button").stop().fadeOut();
        });
        // bg클릭시 popup창 사라짐
        $("#popup>.popup_main>.bg").on("click",function(){
            $("#popup>.popup_main>.bg").fadeOut();
            $("#popup>.popup_main>#popup4").fadeOut();
            $("#popup>.popup_main>#popup>button").fadeOut();
        });
        $("#popup>.popup_main>#popup4>.popList>.popImg").on("click",function(){
            $("#popup>.popup_main>.bg").fadeOut();
            $("#popup>.popup_main>#popup4").fadeOut();
            $("#popup>.popup_main>#popup4>button").fadeOut();
        });

        // #popup4 - slide
        var max = 0;
        var current = 0;
        var container;

        function animate($direction){
            if($direction == "next"){
                $(container.children()[1]).css("margin-left","800px");
                container.append(container.children()[0]);
                TweenMax.to(container.children()[0],0.8,{
                    marginLeft:0,
                    ease:Expo.easeOut
                });
            }else if($direction == "prev"){
                container.prepend(container.children()[max - 1]);
                $(container.children()[0]).css("margin-left","-800px");
                TweenMax.to(container.children()[0],0.8,{
                    marginLeft:0,
                    ease:Expo.easeOut
                });
            }
        };

        function prev(){
            current--;
            if (current < 0) current = max - 1;
            animate("prev");
        }
        function next(){
            current++;
            if (current > max -1) current - 0;
            animate("next");
        }
        function events(){
            $("#popup>.popup_main>#popup4>button.prev").on("click", prev);
            $("#popup>.popup_main>#popup4>button.next").on("click", next);
        }
        function init(){
            container = $("#popup>.popup_main>#popup4>.popList");
            max = container.children().length;
            container.css("margin-left","-800px");
            container.prepend(container.children()[max - 1]);
            // .prepend() : 선택한 요소 내의 앞 위치에 새 요소 생성
            // .append() : 선택한 요소 내의 마지막 위치에 새 요소 생성
            events();
        }
        $(document).ready(init);
    });

    // #popup5
    $(function(){
        // 클릭시 이미지 + 화살표 나타나고 사라짐
        $("#etc>.etc_main>.etc_5").on("click",function(e){
            e.preventDefault();
            $("#popup>.popup_main>.bg").fadeIn();
            $("#popup>.popup_main>#popup5").fadeIn();
            $("#popup>.popup_main>#popup>button").fadeIn();
        });
        // 이미지에 마우스 들어가면 버튼 나타남
        $("#popup>.popup_main>#popup5").mouseenter(function(){
            $("#popup>.popup_main>#popup5>button").stop().fadeIn();
        });
        // 이미지에 마우스 나가면 버튼 사라짐
        $("#popup>.popup_main>#popup5").mouseleave(function(){
            $("#popup>.popup_main>#popup5>button").stop().fadeOut();
        });
        // bg클릭시 popup창 사라짐
        $("#popup>.popup_main>.bg").on("click",function(){
            $("#popup>.popup_main>.bg").fadeOut();
            $("#popup>.popup_main>#popup5").fadeOut();
            $("#popup>.popup_main>#popup>button").fadeOut();
        });
        $("#popup>.popup_main>#popup5>.popList>.popImg").on("click",function(){
            $("#popup>.popup_main>.bg").fadeOut();
            $("#popup>.popup_main>#popup5").fadeOut();
            $("#popup>.popup_main>#popup5>button").fadeOut();
        });

        // #popup5 - slide
        var max = 0;
        var current = 0;
        var container;

        function animate($direction){
            if($direction == "next"){
                $(container.children()[1]).css("margin-left","800px");
                container.append(container.children()[0]);
                TweenMax.to(container.children()[0],0.8,{
                    marginLeft:0,
                    ease:Expo.easeOut
                });
            }else if($direction == "prev"){
                container.prepend(container.children()[max - 1]);
                $(container.children()[0]).css("margin-left","-800px");
                TweenMax.to(container.children()[0],0.8,{
                    marginLeft:0,
                    ease:Expo.easeOut
                });
            }
        };

        function prev(){
            current--;
            if (current < 0) current = max - 1;
            animate("prev");
        }
        function next(){
            current++;
            if (current > max -1) current - 0;
            animate("next");
        }
        function events(){
            $("#popup>.popup_main>#popup5>button.prev").on("click", prev);
            $("#popup>.popup_main>#popup5>button.next").on("click", next);
        }
        function init(){
            container = $("#popup>.popup_main>#popup5>.popList");
            max = container.children().length;
            container.css("margin-left","-800px");
            container.prepend(container.children()[max - 1]);
            // .prepend() : 선택한 요소 내의 앞 위치에 새 요소 생성
            // .append() : 선택한 요소 내의 마지막 위치에 새 요소 생성
            events();
        }
        $(document).ready(init);
    });
});