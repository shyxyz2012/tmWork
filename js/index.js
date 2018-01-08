/**
 * Created by shy on 2017/12/5.
 */
$(function(){
    //首页导航部分开始
    $(".header-downRight li").hover(function(){
        $(this).children("div").stop(true,true).slideDown();
    },function(){
        $(this).children("div").stop(true,true).slideUp();
    });
    //首页导航部分结束

    //首页幻灯片部分开始
    var i=0;
    var timer;

    $(".igs").hover(function(){
        clearInterval(timer);
    },function(){
        showTimer();
    });
    $(".ig").eq(0).show().siblings().hide();
    showTimer();

    $(".tab").hover(function(){
        i= $(this).index();
        show();
        clearInterval(timer);
    },function(){
        showTimer();
    });

    function showTimer(){
        timer=setInterval(function(){
            i++;
            if(i==6){
                i=0;
            }
            show();
        },3000);
    }
    function show(){
        $(".ig").eq(i).show().siblings().hide();
        $(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
    };
    //首页幻灯片部分结束

    //商品分类隐藏部分开始
    $(".type-left li").hover(function(){
        var $i=$(this).index();
        $(".type-detail .type-detail-div").eq($i).show().siblings().hide();
    },function(){
        var $i=$(this).index();
        $(".type-detail .type-detail-div").eq($i).hide();
    });
    //商品分类隐藏部分结束
});
