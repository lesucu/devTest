$(document).ready(function(){
    let bodyDiv = $('body').children('div').length;
    let dex = 0;

    let creatBar = (dex) => {
        let createB = $('.creatBar').children('ul'); 
        createB.eq(dex).children('li').css({"border":"2px solid #40b4e5"});
        createB.eq(dex).children('li').animate({height:"30px"});
        createB.eq(dex).children('span').animate({marginTop:"15px"},200);
        createB.eq(dex).siblings().children('li').css({"border":"2px solid #555"});
        createB.eq(dex).siblings().children('li').animate({height:"12px"});
        createB.eq(dex).siblings().children('span').animate({marginTop:"9px"},200);
    } 

    let step1B = () => {
        $('.step2').show();
        var tep1 = $('.step2').offset().top + 'px';
        $('body').animate({scrollTop:tep1},400);
        creatBar(1);
    };

    $('.rolTop').click(function(){
        var roltop = $(this).parents('.creatCom').index() - (bodyDiv-1);
        var comIndex = $('.creatCom').eq(roltop-1).offset().top + 'px';
        $('body').animate({scrollTop:comIndex},400,function(){
            $('.creatCom').eq(roltop).hide();
        });
        creatBar(roltop-1);
    });

    $('.rolBottom').click(function(){
        var rolBottom = $(this).parents('.creatCom').index() - (bodyDiv-1);
        $('.creatCom').eq(rolBottom+1).show();
        var comIndex = $('.creatCom').eq(rolBottom+1).offset().top + 'px';
        $('body').animate({scrollTop:comIndex},400);
        creatBar(rolBottom+1);
    });

    /* start */
    creatBar(dex);
    $('#step1Btn').click(() => step1B());
});
