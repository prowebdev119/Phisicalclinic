window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("header").css("display","show");
    } else {
      document.getElementById("navbar").style.padding = "80px 10px";
    }
  }