$(document).ready(function () {
    $('nav').on('click','a', function () {
        // 找到元件 ID
        const anchor = $(this).attr('href');
        // 找到該 ID 卷軸位置
        const linkScroll = $(anchor).offset().top;
        // 開滑
        $('html,body').stop().animate({
            scrollTop: linkScroll -65
        },500)
    });
});