$(document).ready(function() {
    $("#bar").click(function() {
        $("ul#menu-respon").slideToggle();
    })
    $(window).scroll(function() {
        $("ul#menu-respon").slideUp();
        $("ul#menu-respon ul#sub-menu").slideUp();
        $("i.click").removeClass('open');
    })
    $(window).resize(function() {
        $("ul#menu-respon").slideUp();
        $("ul#menu-respon ul#sub-menu").slideUp();
        $("i.click").removeClass('open');
    })
    $("i.click").click(function() {
        $(this).toggleClass('open');
        $(this).parent('li').children('ul#sub-menu').slideToggle();
    })

})