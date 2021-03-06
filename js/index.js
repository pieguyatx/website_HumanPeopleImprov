// fade top title until needed
// http://stackoverflow.com/questions/13436455/only-showing-div-when-passed-scroll-position-issue
$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 10) {
            $("#siteName:hidden").css('visibility','visible');
            $("#siteName:hidden").fadeIn('fast');
        }
        else {
            $("#siteName:visible").fadeOut("fast");
        }
        if ($(this).scrollTop() > 100) {
            $("#aboutCaption:hidden").css('visibility','visible');
            $("#aboutCaption:hidden").fadeIn('slow');
        }
        else {
            $("#aboutCaption:visible").fadeOut("slow");
        }
    });
});

// http://www.w3schools.com/bootstrap/bootstrap_ref_js_scrollspy.asp
// Add smooth scrolling on all links inside the navbar
$("#menu li>a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (xxx) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 500, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  } // End if

});

// Add slideshow Buttons
var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
    showDivs(slideIndex += n);
}
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

// Cat transitions
$("#cat1").hover(
  function() {
    $(this).addClass("cat-fadeOut");
    $("#cat1b").addClass("cat-fadeIn");
    $("#cat1b").css("opacity",1);
  }
);
$("#cat2").hover(
  function() {
    $(this).addClass("cat-fadeOut");
    $("#cat2b").addClass("cat-fadeIn");
    $("#cat2b").css("opacity",1);
  }
);
$("#cat3").hover(
  function() {
    $(this).addClass("cat-fadeOut");
    $("#cat3b").addClass("cat-fadeIn");
    $("#cat3b").css("opacity",1);
  }
);
$("#cat4").hover(
  function() {
    $(this).addClass("cat-fadeOut");
    $("#cat4b").addClass("cat-fadeIn");
    $("#cat4b").css("opacity",1);
  }
);

// Profile hover changes
$("#amy").hover(
  function() {
    $(this).attr("src","img/profile/amy2.jpg");
    $(this).mouseleave(function() {
      $(this).attr("src","img/profile/amy1.jpg");
    })
  }
);
$("#bloom").hover(
  function() {
    $(this).attr("src","img/profile/bloom2.jpg");
    $(this).mouseleave(function() {
      $(this).attr("src","img/profile/bloom1.jpg");
    })
  }
);
$("#carolyn").hover(
  function() {
    $(this).attr("src","img/profile/carolyn2.jpg");
    $(this).mouseleave(function() {
      $(this).attr("src","img/profile/carolyn1.jpg");
    })
  }
);
$("#chris").hover(
  function() {
    $(this).attr("src","img/profile/chris2.jpg");
    $(this).mouseleave(function() {
      $(this).attr("src","img/profile/chris1.jpg");
    })
  }
);
$("#david").hover(
  function() {
    $(this).attr("src","img/profile/david2.jpg");
    $(this).mouseleave(function() {
      $(this).attr("src","img/profile/david1.jpg");
    })
  }
);
$("#eric").hover(
  function() {
    $(this).attr("src","img/profile/eric2.jpg");
    $(this).mouseleave(function() {
      $(this).attr("src","img/profile/eric1.jpg");
    })
  }
);
$("#greg").hover(
  function() {
    $(this).attr("src","img/profile/greg2.jpg");
    $(this).mouseleave(function() {
      $(this).attr("src","img/profile/greg1.jpg");
    })
  }
);
$("#kay").hover(
  function() {
    $(this).attr("src","img/profile/kay2.jpg");
    $(this).mouseleave(function() {
      $(this).attr("src","img/profile/kay1.jpg");
    })
  }
);
$("#kraab").hover(
  function() {
    $(this).attr("src","img/profile/kraab2.jpg");
    $(this).mouseleave(function() {
      $(this).attr("src","img/profile/kraab1.jpg");
    })
  }
);
$("#mary").hover(
  function() {
    $(this).attr("src","img/profile/mary2.jpg");
    $(this).mouseleave(function() {
      $(this).attr("src","img/profile/mary1.jpg");
    })
  }
);
$("#pius").hover(
  function() {
    $(this).attr("src","img/profile/pius2.jpg");
    $(this).mouseleave(function() {
      $(this).attr("src","img/profile/pius1.jpg");
    })
  }
);
$("#rich").hover(
  function() {
    $(this).attr("src","img/profile/rich2.jpg");
    $(this).mouseleave(function() {
      $(this).attr("src","img/profile/rich1.jpg");
    })
  }
);
$("#sheri").hover(
  function() {
    $(this).attr("src","img/profile/sheri2.jpg");
    $(this).mouseleave(function() {
      $(this).attr("src","img/profile/sheri1.jpg");
    })
  }
);
$("#sue").hover(
  function() {
    $(this).attr("src","img/profile/sue2.jpg");
    $(this).mouseleave(function() {
      $(this).attr("src","img/profile/sue1.jpg");
    })
  }
);
