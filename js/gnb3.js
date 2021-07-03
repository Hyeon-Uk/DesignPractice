$(document).ready(function(){
    $('.gnb li').on('mouseover focusin',function(){
        $(this).children('ul').stop().fadeIn(300);
        $('.bg_gnb').stop().fadeIn(300);
    });
    $('.gnb li').on('mouseleave',function(){
        $(this).children('ul').stop().fadeOut(200);
        $('.bg_gnb').stop().fadeOut(200);
    });
    $('gnb > li').on('focusout',function(){
        $(this).children('ul').stop().fadeOut(200);
    })
})