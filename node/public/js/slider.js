$(document).ready(function(){
    var slide = $('.slide').find('li');
    var slideNum = slide.length;
    var count = 1;
    var btn = $('.btn').children();
    var slideStart = null;
    slide.eq(0).show();
    btn.eq(0).css('background','#fff');
    function slider(){
        slideStart = setInterval(function(){
            slide.eq(count).siblings().hide();
            slide.eq(count).show();
            btn.eq(count).siblings().css('background','0');
            btn.eq(count).css('background','#fff');
            count++;
            if(slideNum <= count){
                count = 0;
            }
        },3000);
    }
    function btns(){
        $('.btn').children().click(function(){
            var btnIn = $(this).index(); 
            btn.eq(btnIn).siblings().css('background','0');
            btn.eq(btnIn).css('background','#fff');
        });
    }
    btns();
    slider();
});