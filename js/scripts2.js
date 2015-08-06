//Prepare DOM elements' functionality upon page loading
$(document).ready(function(){
	$(".header2").hide();
	$(".navbar").hide();
	$(".header").hide();
	$(".footer").hide();

  $(".navbar").slideDown("slow");
  $(".header").slideDown("slow");
  $(".footer").slideDown("slow");

	//Adjust functionality of #back-to-top button here
	//Scroll slow to top of page
	$("#back-to-top").on("click", function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

});

//Hide loading page if all resources ready
$(window).load(function(){

});

//Adjusts visibility of primary header, secondary header and back to top button via slide methods
$(window).scroll(function(){
    if ($(this).scrollTop() >= 100) {
        $("#back-to-top").fadeIn("slow");
        $(".header").fadeOut("slow");
        $(".header2").fadeIn("slow");
    } else {
        $("#back-to-top").fadeOut("slow");
        $(".header").fadeIn("slow");
        $(".header2").fadeOut("slow");
    }
});