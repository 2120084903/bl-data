
$(function () {
    $(".tips-show").hover(function () {
        var scrollTop = $(window).scrollTop();
        var eleTopVal = $(this).offset().top;
        var eleLeftVal = $(this).offset().left;
        var tipsVal = $(this).attr("data-tips");                    // 获取data-tips的属性值
        var tipsHtml = '<div class="tipsTs tipsColor">' +
            '<div class="tips-con">' +
            '</div>' +
            '<div class="triangle-front">' +
            '</div>' +
            '<div class="triangle-back">' +
            '</div>' +
            '</div>';
        $('body').append(tipsHtml);                                 // 在body插入tips的html
        $('body').find('.tips-con').text(tipsVal);                  // 找到tips-con把data-tips放入

        var thisWidthVal = $(this).outerWidth();                    //获取当前鼠标hover的元素宽度
        var tipsHeightVal = $('.tipsTs').outerHeight();                 //获取tipsTs元素高度
        var tipsWidthVal = $('.tipsTs').outerWidth();                   //获取tipsTs元素宽度

        $('body').find('.tipsTs').css({
            'top': eleTopVal - scrollTop - tipsHeightVal - 20 + 'px',
            'left': eleLeftVal + (thisWidthVal / 2) - (tipsWidthVal / 2) + 'px',
        });
        $('body').find('.tipsTs').animate({
            'opacity': '1',
            'top': eleTopVal - scrollTop - tipsHeightVal - 10 + 'px',
        }, 300);                                                    //tips出现动画
    }, function () {
        $('body').find('.tipsTs').remove();                         //鼠标移出后清除tips
    });
});