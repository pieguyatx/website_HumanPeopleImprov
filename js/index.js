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
