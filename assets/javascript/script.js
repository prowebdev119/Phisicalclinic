$(document).ready(function(){

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
    
    // window.onscroll = function() {scrollFunction()};

    // function scrollFunction() {
    //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //         $("header").css("background-color","white");
    //     } else {
    //         $(".dark_logo").css("display", "none");
    //         $(".light_logo").css("display", "block");
    //         $("header").css({"display":"block", "background":"transparent"});
    //         $(".header_items a").css("color","#fff")
    //         $(".icons").css("display", "flex");
    //         $(".icons_hover").removeClass("icon_show");
    //         $(".hamburger_btn").prop("src","assets/images/hamburger.svg");
    //     }
    // }

    // // mouse scroll event
    // $("body").mousemove(function(event){
    //     if($(document).scrollTop() > 20){
    //         if(event.clientY <= 300){
    //             $(".dark_logo").css("display", "block");
    //             $(".light_logo").css("display", "none");
    //             $("header").css({"display":"block","background-color":"white", "box-shadow":"0px 4px 25px rgba(45, 70, 141, 0.25)"});
    //             $(".header_items a").css("color","#2D468D")
    //             $(".icons").css("display", "none");
    //             $(".icons_hover").addClass("icon_show");
    //             $(".hamburger_btn").prop("src","assets/images/hamburger_1.svg")
    //         }else{
    //             $("header").css("display","none");
    //         }
    //     }else{
    //         $("header").css({"display":"block", "background":"transparent"});
    //     }
    // });

    var position = $(window).scrollTop(); 
    
    if(position > 80) {
        $(".dark_logo").css("display", "block");
        $(".light_logo").css("display", "none");
        $("header").css({"display":"block","background-color":"white", "box-shadow":"0px 4px 25px rgba(45, 70, 141, 0.25)"});
        $(".header_items a").css("color","#2D468D")
        $(".icons").css("display", "none");
        $(".icons_hover").addClass("icon_show");
        $(".hamburger_btn").prop("src","assets/images/hamburger_1.svg");
    } else {
        
    }
    // should start at 0
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 80){
            // $("header").css("display","none")
            $(".dark_logo").css("display", "block");
            $(".light_logo").css("display", "none");
            $("header").css({"display":"block","background-color":"white", "box-shadow":"0px 4px 25px rgba(45, 70, 141, 0.25)"});
            $(".header_items a").css("color","#2D468D")
            $(".icons").css("display", "none");
            $(".icons_hover").addClass("icon_show");
            $(".hamburger_btn").prop("src","assets/images/hamburger_1.svg");
        } else {
            
        }
        if(scroll > position) {
            // scroll down
            // $("header").css("display","none")
        } else {
            // scrill up
            // $(".dark_logo").css("display", "block");
            // $(".light_logo").css("display", "none");
            // $("header").css({"display":"block","background-color":"white", "box-shadow":"0px 4px 25px rgba(45, 70, 141, 0.25)"});
            // $(".header_items a").css("color","#2D468D")
            // $(".icons").css("display", "none");
            // $(".icons_hover").addClass("icon_show");
            // $(".hamburger_btn").prop("src","assets/images/hamburger_1.svg");
            
            // console.log(document.documentElement.scrollTop);
            
            if(scroll < 20 ){
                $(".dark_logo").css("display", "none");
                $(".light_logo").css("display", "block");
                $("header").css({"display":"block", "background":"transparent"});
                $(".header_items a").css("color","#fff");
                $(".header_main").css("background", "none");
                $(".icons").css("display", "flex");
                $(".icons_hover").removeClass("icon_show");
                $(".hamburger_btn").prop("src","assets/images/hamburger.svg");

                $(".navbar_wrapper").hover(function(){

                }, function(){
                    $(".dark_logo").css("display", "none")
                    $(".light_logo").css("display", "block")
                    $(".header_items a").css("color","#fff")
                    $(".header_main").css("background", "none");
                    $(".icons").css("display", "flex");
                    $(".icons_hover").removeClass("icon_show");
                    $(".navbar_hover").css("height","0px");
                })
            } else {
                // $("header").css("background-color","white");
                $(".dark_logo").css("display", "block");
                $(".light_logo").css("display", "none");
                $("header").css({"display":"block","background-color":"white", "box-shadow":"0px 4px 25px rgba(45, 70, 141, 0.25)"});
                $(".header_items a").css("color","#2D468D")
                $(".icons").css("display", "none");
                $(".icons_hover").addClass("icon_show");
                $(".hamburger_btn").prop("src","assets/images/hamburger_1.svg");
                $(".navbar_wrapper").hover(function(){
                //     // console.log("it has hovered")
                // }, function(){
                //     console.log("it can be fixed");
                    $(".dark_logo").css("display", "block");
                    $(".light_logo").css("display", "none");
                    $(".header_main").css("background", "#fff");
                    $(".header_items a").css("color","#2D468D")
                    $(".icons").css("display", "none");
                    $(".icons_hover").addClass("icon_show");
                })
            }
        }
        // position = scroll;
    });
    
    $(".navbar_wrapper").hover(function(){
        $(".dark_logo").css("display", "block");
        $(".light_logo").css("display", "none");
        $(".header_main").css("background", "#fff");
        $(".header_items a").css("color","#2D468D")
        $(".icons").css("display", "none");
        $(".icons_hover").addClass("icon_show");
        $(".navbar_hover").css("height","250px");
    }, function(){
        // $(".dark_logo").css("display", "none")
        // $(".light_logo").css("display", "block")
        // $(".header_items a").css("color","#fff")
        // $(".header_main").css("background", "none");
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

    "use strict";
    
});