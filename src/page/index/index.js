$(function() {
    let windowH = $(window).height()
    let windowW = $(window).width()

    $('.container').css({
        'withd': windowW,
        'height': windowH
    })
    $('.mask').css({
        'withd': windowW,
        'height': windowH
    })
})