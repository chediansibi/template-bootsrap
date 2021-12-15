$(document).ready(function (){

$('html').niceScroll();
$('.carousel').carousel({
	interval:5000
});
/*show tool option*/
$('.gear-check').click(function ()

{
	$('.color-option').fadeToggle();
});
/* change theme color */
 var colorLi = $('.color-option ul li');
colorLi
.eq(0).css('backgroundColor','#e41b17').end()
.eq(1).css('backgroundColor','#35108f').end()
.eq(2).css('backgroundColor','#0a7622').end()
.eq(3).css('backgroundColor','#8f8b10').end()
.eq(4).css('backgroundColor','#83086e');

colorLi.click(function()

{
$("link[href*='theme']").attr("href",$(this).attr("data-value"));
});
var scrollbutton = $("#scroll-top");
$(window).scroll(function ()

{
	if ($(this).scrollTop()>=700)
{
	scrollbutton.show();
}
else
{
    scrollbutton.hide();
}

});

scrollbutton.click(function ()

{
   $("html,body").animate({scrollTop:0},600)

});


});

//loading screen

$(window).load(function ()

{
  $(".loading-overlay .loader").fadeOut(2000,function () {

  	$("body").css("overflow","auto");
  $(this).parent().fadeOut(2000,function () {

  	$(this).remove();
  });
  });
  });

