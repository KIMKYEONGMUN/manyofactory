$(function(){
    $('nav.pc .depth01').mouseenter(function(){
        $(this).children('.depth02').stop().slideDown();
    });
    $('nav.pc .depth01').mouseleave(function(){
        $(this).children('.depth02').stop().slideUp();
    });

    $('.mobile.menu_open').click(function(){
        $('#wrap').addClass('on');
        $('.mobile_gnb').addClass('on');
    });
    $('.mobile_gnb .menu_close').click(function(){
        $('#wrap').removeClass('on');
        $('.mobile_gnb').removeClass('on');
    });

    $('.mobile_gnb .gnb .depth01 > a').click(function(){
        // $(this).siblings().slideToggle();
        if ($(this).siblings().css('display') == 'none') {
            $('.mobile_gnb .gnb .depth01 .depth02').slideUp();
            $(this).siblings().slideDown();
        } else {
            $(this).siblings().slideUp();
        };
    });

    $('.mobile_gnb .gnb .depth01 .depth02').click(function(){
        $('#wrap').removeClass('on');
        $('.mobile_gnb').removeClass('on');
    });

});// jquery end