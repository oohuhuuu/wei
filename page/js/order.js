$(function() {









	function dialogd() {
		$('.close').click(function() { //弹窗
			$('#dialogd').hide();
		});
		$('#customer').find('.add_customer').click(function() {
			$('#dialogd').show();
		});
		var li = $('#dialogd').find('li');
		$.each(li, function() {
			$(this).one("click", function() {
				var html = $(this).find('span').html();
				$('.add_box>ul').append('<li class="add_list">' + html + '</li>');
			});
		});



	};

	dialogd();

	$('.add_box').delegate(".add_list", "click", function() {
		$(this).remove();
	});







  $(".common_add").click(function(){	
        var text=$('.hidden').val("1");
													//可叠加相加
  	$(this).addClass('active_color');
	 		$(this).siblings('.common_re').addClass('active_color');
			$(this).siblings('.count').addClass('active_bg');
    var t=$(this).parent().find('.count');
    t.text(parseInt(t.text())+1)
    setTotal();
  });
    $(".common_re").click(function(){
  	$(this).addClass('active_color');
	 		$(this).siblings('.common_re').addClass('active_color');
			$(this).siblings('.count').addClass('active_bg');
    var t=$(this).parent().find('.count');
    t.text(parseInt(t.text())-1);
     if(parseInt(t.text())<=0){
      t.text(0);
            $('.hidden').val("");

    } 
    setTotal();
  }); 
 
function setTotal(){
    var s=0;
    $(".order_list").each(function(){
      s+=parseInt($(this).find('.yuan').text())
   *parseFloat($(this).find('.count').text());
    });
    $(".count_money").text(s.toFixed(2));
  }




    $(".add").each(function(){

    $(this).click(function(){
            var text=$('.hidden').val("1");

    	$(this).addClass('active_color');
	 		$(this).siblings('.common_re').addClass('active_color');
			$(this).siblings('.count').addClass('active_bg');
    var t=$(this).parent().find('.count');
    var ts=$(this).parent().parent().siblings('.order_list').find('.count');
    t.text(parseInt(t.text())+1)
    ts.text(0);
       var s=0;
      s=parseInt($(this).parent().parent().find('.yuan').text())
   *parseFloat($(this).parent().find('.count').text());  
    $(".count_money").text(s.toFixed(2));
    })														//不可叠加相加
  	
  });






    $(".reduce").each(function(){
    $(this).click(function(){
    	$(this).addClass('active_color');
	 		$(this).siblings('.common_re').addClass('active_color');
			$(this).siblings('.count').addClass('active_bg');
    var t=$(this).parent().find('.count');
    var ts=$(this).parent().parent().siblings('.order_list').find('.count');
    t.text(parseInt(t.text())-1)
    ts.text(0);
         if(parseInt(t.text())<=0){
      t.text(0);
       $('.hidden').val("");
    } 
       var s=0;
      s=parseInt($(this).parent().parent().find('.yuan').text())
   *parseFloat($(this).parent().find('.count').text());  
    $(".count_money").text(s.toFixed(2));
    })														//不可叠加相加
  	
  });













 $('.sub').on("click",function(){

    $('#order').submit();
    // alert();

    });


        $.mvalidateExtend({

            phone:{
                required : true,   
                pattern : /^0?1[3|4|7|5|8][0-9]\d{8}$/,
                each:function(){ 
                },
                descriptions:{
                    required : '<div class="field-invalidmsg">请输入手机号码</div>',
                    pattern : '<div class="field-invalidmsg">手机号码格式不正确</div>',
                }
            },
             email:{
                required : true,   
                pattern :  /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
                each:function(){                  
                },
                descriptions:{
                    required : '<div class="field-invalidmsg">请输入邮箱地址</div>',
                    pattern : '<div class="field-invalidmsg">邮箱地址格式不正确</div>',
                }
            }
        });
                $("#order").mvalidate({
            type:1,
            sendForm:false,
            firstInvalidFocus:false,
            invalid:function(event, status, options){
               
            },
            valid:function(event,options){
                //点击提交按钮时,表单通过验证触发函数
                //alert("验证通过！接下来可以做你想做的事情啦！");
               
            },
        	// conditional:dataCompare(),
			conditional:{
				dataCompare:function(){
			 var odate=Date.parse(cc);		            
			var date1=new Date();				               
            var  dd = date1.format('yyyy-mm-dd');
            var ndate=Date.parse(dd);
            var  c=odate-ndate;
             if(c>=0){
                return true;
             }else{
                return false;
             };  
			}
		},	
		  descriptions:{
                dated:{
                    required : '请选择日期',
                   conditional : '只能选择当日及以后的日期'
                },
                address1:{
                    required : '请选择地址'
                },
                address2:{
                    required : '请输入详细地址'
                },
                name:{
                    required : '请输入姓名'
                },
                count:{
                    required : '请选择产品'
                } ,
                 passport:{
                    required : '请输入护照号码'
                },
                passport_start:{
                    required : '请输入入境时间'
                },
                passport_end:{
                    required : '请输入护照激活日期'
                },
                urgent_passport:{
                    required : '请输入联系人护照号码'
                }       

            }
        });

var currYear = (new Date()).getFullYear();	
			var opt={};
			opt.date = {preset : 'date'};
			opt.datetime = {preset : 'datetime'};
			opt.time = {preset : 'time'};
			opt.default = {
				theme: 'android-ics light', //皮肤样式
		        display: 'modal', //显示方式 
		        mode: 'scroller', //日期选择模式
				dateFormat: 'yyyy-mm-dd',
				lang: 'zh',
				showNow: true,
				nowText: "今天",
		        startYear: currYear - 10, //开始年份
		        endYear: currYear + 10 //结束年份
			};

		  	$("#passport_start,#passport_end").mobiscroll($.extend(opt['date'], opt['default']));

});