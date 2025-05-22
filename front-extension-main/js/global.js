$(function(){
    $('.password-icon').click(function(){
        var idInput = $(this).attr('data-input')
        var enable = $(this).attr('data-enable')
        var input = $('#'+idInput)    
        
        if (enable == 0) {
            $(this).attr('data-enable', 1)
            $(this).addClass('fa-eye-slash')
            $(this).removeClass('fa-eye')
            $(input).attr('type', 'text')
        }else {
            $(this).attr('data-enable', 0)
            $(this).addClass('fa-eye')
            $(this).removeClass('fa-eye-slash')
            $(input).attr('type', 'password')
        }
    })
})