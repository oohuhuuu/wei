$(function(){
var swiper2 = new Swiper('#detail_banner', {         //轮播
    speed: 300,
        loop: true,
    pagination: '.swiper-pagination',
    autoplayDisableOnInteraction:false ,
    autoplay: 4000,
paginationClickable :true,
    });


$('.phone, .collect').click(function(){
    $(this).toggleClass('on');
   
});






// var str=$('.reason p').text();
// var newStr=str.replace(/●/g, "●\r\n");
// alert(newStr);
// $('.reason p').text(newStr);
function spl(){
     var datastr=$('.reason p').text();        
  var str= new Array();      
     
  str=datastr.split("●"); 
$('.reason p').text("");
    for (i=1;i<str.length ;i++ )      
    {  

	$('.reason p').append("<br/>●"+str[i]+"<br/>");      
    } 

};
spl();


});