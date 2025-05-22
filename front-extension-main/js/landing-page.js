$(function(){
    $('.open-btn-menu').click(function() {
        var header = $(this).closest('header');
        
        $(header).addClass('hide-header')

        var menu = $('.menu')

        $(menu).addClass('show-menu')
    })

    $('.close-btn-menu').click(function() {
        console.log('teste')
        var menu = $(this).closest('.menu');
        
        $(menu).removeClass('show-menu')

        var header = $('header')

        $(header).removeClass('hide-header')
    })
})