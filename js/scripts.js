//Initialize global variables
var newsGroupLength = $(".news-group").size() - 1;
var currentNewsGroup = 0;

//Disable left and right buttons as expected
var disableLatestNewsButtons = function(){
	$("#latest-news-right").removeAttr("disabled");
	$("#latest-news-left").removeAttr("disabled");

	if(currentNewsGroup == 0){
		$("#latest-news-left").attr("disabled", "disabled");
	}
	else if(currentNewsGroup == newsGroupLength){
		$("#latest-news-right").attr("disabled", "disabled");
	}
};

//Extend jQuery library
$.fn.extend({
  slideRightShow: function() {
    return this.each(function() {
        $(this).show('slide', {direction: 'right'}, 'slow');
    });
  },
  slideLeftHide: function() {
    return this.each(function() {
      $(this).hide('slide', {direction: 'left'}, 'slow');
    });
  },
  slideRightHide: function() {
    return this.each(function() {
      $(this).hide('slide', {direction: 'right'}, 'slow');
    });
  },
  slideLeftShow: function() {
    return this.each(function() {
      $(this).show('slide', {direction: 'left'}, 'slow');
    });
  }
});

//Prepare DOM elements' functionality upon page loading
$(document).ready(function(){
    $('body').jpreLoader();
	//Animate header and footer and mainpage
	$(".header2").hide();
	$(".news-group").hide();
	$(".navbar").hide();
	$(".header").hide();
	$(".footer").hide();
	$(".main-page").hide();

	$(".navbar").slideDown("slow");
	$(".header").slideDown("slow");
	$(".footer").slideDown("slow");
	$(".main-page").fadeIn("slow");

	//Adjust functionality of #back-to-top button here
	//Scroll slow to top of page
	$("#back-to-top").on("click", function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

	//Implement latest news carousel: show 1st group first
	$(".news-group").eq(currentNewsGroup).fadeIn();
	disableLatestNewsButtons();

	//Hide then bind effects to chevron buttons
	$("#latest-news-left").hide();
	$("#latest-news-right").hide();
	$("#latest-news-left").slideDown();
	$("#latest-news-right").slideDown();

	//Implement left chevron button and disable as expected
	$("#latest-news-left").on("click", function(){
		$(".news-group").eq(currentNewsGroup).hide();
		currentNewsGroup--;
		$(".news-group").eq(currentNewsGroup).fadeIn("slow");
		disableLatestNewsButtons();
	});

	//Implement right chevron button and disable as expected
	$("#latest-news-right").on("click", function(){
		$(".news-group").eq(currentNewsGroup).hide();
		currentNewsGroup++;
		$(".news-group").eq(currentNewsGroup).fadeIn("slow");
		disableLatestNewsButtons();
	});

	//search form on submit
	$("#search_Form").on("submit", function(){
		document.searchForm.q.value += " inurl:mediadotexchange.com";
		return true;
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