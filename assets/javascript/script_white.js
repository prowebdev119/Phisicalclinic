$(document).ready(function(){
    $(".dark_logo").css("display", "block");
    $(".header_items a").css("color","#2D468D");

    //mobile navbar definition
    $(".hamburger>img").click(function(){
        $(".nav_mob").css({"opacity":"1", "pointer-events": "auto", "transition":"0.5s"});
    })
    $(".close").click(function(){
        $(".nav_mob").css({"opacity":"0", "pointer-events": "none"});
    })
    $(".arrow_up").click(function(){
        $(this).css("display","none");
        $(".arrow_down").css("display","block");
        $(".nav_our_detail").css("height","243px");
    })
    $(".arrow_down").click(function(){
        $(this).css("display","none");
        $(".arrow_up").css("display","block");
        $(".nav_our_detail").css("height","0");
    })
    
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            // $("header").css("display","none");
        } else {
            // $(".dark_logo").css("display", "block");
            // $(".light_logo").css("display", "none");
            // $("header").css({"display":"block", "background":"#fff"});
            // $(".header_items a").css("color","#2D468D")
            // $(".icons").css("display", "flex");
            // $(".icons_hover").removeClass("icon_show");
            // $(".hamburger_btn").prop("src","assets/images/hamburger.svg");
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    // mouse scroll event
    // $("body").mousemove(function(event){
    //     if($(document).scrollTop() > 20){
    //         if(event.clientY <= 300){
    //             $(".dark_logo").css("display", "block");
    //             $(".light_logo").css("display", "none");
    //             $("header").css({"display":"block","background-color":"white", "box-shadow":"0px 4px 25px rgba(45, 70, 141, 0.25)"});
    //             $(".header_items a").css("color","#2D468D")
    //             // $(".icons").css("display", "none");
    //             // $(".icons_hover").addClass("icon_show");
    //             // $(".hamburger_btn").prop("src","assets/images/hamburger_1.svg")
    //         }else{
    //             $("header").css("display","none");
    //         }
    //     }else{
    //         $("header").css({"display":"block", "background":"white"});
    //     }
    // });
    $(".navbar_wrapper").hover(function(){
        $(".dark_logo").css("display", "block");
        $(".light_logo").css("display", "none");
        $(".header_main").css("background", "#fff");
        $(".header_items a").css("color","#2D468D")
        // $(".icons").css("display", "none");
        // $(".icons_hover").addClass("icon_show");
        $(".navbar_hover").css("height","250px");
    }, function(){
        $(".dark_logo").css("display", "block")
        $(".light_logo").css("display", "none")
        $(".header_items a").css("color","#2D468D")
        $(".header_main").css("background", "#fff");
        // $(".icons").css("display", "flex");
        // $(".icons_hover").removeClass("icon_show");
        $(".navbar_hover").css("height","0px");
    });

    $(window).click(function(event){
        var log_pro1 = document.getElementById("log_pro1");
        var log_pro2 = document.getElementById("log_pro2");

        if(event.target == log_pro1){
            $(".profile_items").fadeIn("300");
        }else if(event.target == log_pro2){
            $(".profile_items").fadeIn("300");
        }else{
            $(".profile_items").fadeOut("300");
        }
    })
});