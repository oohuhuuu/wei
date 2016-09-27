$(function(){
	var w=$(window).width();
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
        if (window.orientation === 180 || window.orientation === 0) {
        	location.reload();
        }
        if (window.orientation === 90 || window.orientation === -90 ){

        	location.reload();

        } 
    }, false); 
















	$('.back').click(function(){
		history.back();
	});
		var footerItem = $('#footer').find('li'); //页脚样式
	$.each(footerItem, function() {
		$(this).click(function() {
			$(this).addClass('on').siblings().removeClass('on');
		});
	});
});