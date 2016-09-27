  
    function list_slid(){
        var choose=$("#headerl").find(".place");
choose.click(function(){
    $('.travel_list_choose').slideToggle("fast");               //下拉
});
    }
    list_slid();


function vchoosed(){        
                                                                            //下拉选择
    var item=$('#wrap').find('.travel_list_choose').find('li');
    var dui=$('#wrap').find('.travel_list_choose').find('li').find('.li_dui');
    $.each(item,function(){

        $(this).click(function(){
          var thisText=$(this).find('.gai').text();
          $('.choose').text(thisText);
               $('.travel_list_choose').slideUp("fast");
               $(this).addClass('dui').siblings().removeClass('dui');
               $(this).find('.li_dui').show();
               $(this).siblings().find('.li_dui').hide();

            });
    });
    $('.jt').on("click",function(){
             $('.card_title').hide();
       $('#jt_title').show();
        $('.visa_title').hide();
    });
    $('.card').bind("click",function(){
       $('.card_title').show();
       $('#jt_title').hide();
        $('.visa_title').hide();
    });
        $('.visa').bind("click",function(){
       $('.visa_title').show();
       $('#jt_title').hide();
        $('.card_title').hide();
    });
};
vchoosed();
var swiper1 = new Swiper('#jt_title', {            //标题滑动
    slidesPerView: 4,
    speed: 300,
    freeMode: true
    });
$("#jt_title .topic-item").on('click', function(e) {
    e.preventDefault();

    $(this).addClass('topic_on').siblings().removeClass('topic_on');
});

$('.download').bind("click",function(){
    var t=confirm('下载app');
    if(t==true){
      window.location.href="http://dwz.cn/3nP1OQ";
    }
});