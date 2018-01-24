/**
 * Created by shy on 2017/12/23.
 */
$(function(){
//产品详情导航部分开始
    $(".nav-right li").hover(function(){
        $(this).children("div").stop(true,true).slideDown();
    },function(){
        $(this).children("div").stop(true,true).slideUp();
    });
//产品详情导航部分结束

    //产品详情南京部分开始
    $(".englishPlay div").eq(0).show();
    $(".nTitle a").hover(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var $i=$(this).index();
        $(".englishPlay div").eq($i).show().siblings().hide();
    },function(){
        var $i=$(this).index();
        $(".englishPlay div").eq($i).siblings().hide();
    });
    //产品详情南京部分结束

    //支付方式的显示和隐藏部分开始
    $(".tm-pay span").click(function(){
        if($(".payType").is(":hidden")){
            $(".payType").show();
        }else{
            $(".payType").hide();
        }
    });
    //支付方式的显示和隐藏部分结束

    //商城图片放大效果部分开始
    //鼠标放在小图上改变中图
    var arrimg=['url(../img/detailImg/latbig1.jpg)','url(../img/detailImg/latbig1.jpg)',
        'url(../img/detailImg/latbig1.jpg)','url(../img/detailImg/latbig.jpg)','url(../img/detailImg/latbig2.jpg)'];
    $(".small-pho img").mouseover(function(){
        //获取小图的下标索引
        var i=$(this).index();
        $(".dLeft-big").css("background",arrimg[i]);
        $(this).css("border","2px solid #000").siblings().css("border","2px solid transparent");
    });

    $(".dLeft-big").mousemove(function(e){
        //获取鼠标的位置
        var x= e.pageX;
        var y= e.pageY;
        bigL=$(".dLeft-big").offset().left;
        bigT=$(".dLeft-big").offset().top;
        //鼠标移动时的动态位置
        zoomW=$(".zoom").outerWidth();
        zoomH=$(".zoom").outerHeight();
        var bigx=x-bigL-zoomW/2;
        var bigy=y-bigT-zoomH/2;
        $(".zoom").css({"left":bigx+"px","top":+bigy+"px"});

        var zoomL=parseInt($(".zoom").css('left'));
        var zoomT=parseInt($(".zoom").css('top'));
        if(zoomL<=0){
            $(".zoom").css('left',0);
        }else if(zoomL>=430){
            $(".zoom").css('left','230px');
        }
        if(zoomT<=0){
            $(".zoom").css('top',0);
        }else if(zoomT>=300){
            $(".zoom").css('top','300px');
        }
    });
    //商城图片放大效果部分结束

    //幻灯片部分开始
    var i=0;
    var timer;
    //第一张图片显示，其他隐藏
    $(".pd-right-pho .ig").eq(0).show().siblings().hide();

    //图片每2秒自动轮播
    showTimer();

    //当鼠标放在圆点上时，图片可以自动滑动
    $(".tab").hover(function(){
        clearInterval(timer);
        i=$(this).index();
        show();
    },function(){
        showTimer();
    });

    function showTimer(){
        timer=setInterval(function(){
            i++;
            if(i==8){
                i=0;
            }
            show();
        },1000);
    }

    function show(){
        $(".pd-right-pho .ig").eq(i).show().siblings().hide();
        $(".tabs .tab").eq(i).addClass("bg").siblings().removeClass("bg");
    }
    //幻灯片部分结束
});

//大家都在买部分点击箭头图片滑动开始
//点击右箭头切换
//"outerWidth"  默认包括元素的内边距(padding)、边框(border)，但不包括外边距(margin)部分的高/宽度
$(function(){
    var $small_width=$(".shop-list li").outerHeight(true);
    var $suojin=0;
    var $zong_suo=3;
    $(".arrow-right").bind("click",function () {
        if ($suojin==$zong_suo){
            $suojin=0;
            $(".shop-list").stop(true,true).animate({top:"0"},500);
        }else {
            $suojin++;
            $(".shop-list").stop(true,true).animate({top:"-="+$small_width},500);
        }
    });

//点击左箭头切换图片
    $(".arrow-left").bind("click",function () {
        if ($suojin==0){
            $suojin=$zong_suo;
            $(".shop-list").stop(true,true).animate({top:"-="+$zong_suo*$small_width},500);
        }else {
            $suojin--;
            $(".shop-list").stop(true,true).animate({top:"+="+$small_width},500);
        }
    });
})

//大家都在买部分点击箭头图片滑动结束