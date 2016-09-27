$(function() {
$('.list2,.list3').hide();
    var itemIndex = 0;
    $('.tab .item').on('click',function(){
        var $this = $(this);
        itemIndex = $this.index();
        $this.addClass('topic_on').siblings('.item').removeClass('topic_on');
        $('.lists').eq(itemIndex).show().siblings('.lists').hide();
});

	var footerItem = $('#footer').find('li'); //页脚样式
	$.each(footerItem, function() {
		$(this).click(function() {
			$(this).addClass('on').siblings().removeClass('on');
		});
	});


});

