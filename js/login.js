/**
 * Created by shy on 2017/12/29.
 */
$(function(){
    //手机扫码登录和密码登录的切换部分开始
    $(".divFirst > img").click(function(){
        $(".divFirst").css("display","none");
        $(".divTwo").css("display","block");
    });
    $(".divTwo > img").click(function(){
        $(".divTwo").css("display","none");
        $(".divFirst").css("display","block");
    });
    //手机扫码登录和密码登录的切换部分结束

    //密码登录部分用户名和密码的要求
    //var isok1=false;
    //$("#username").onblur(function(){
    //    var patterName=/^.{5,15}$/;
    //    if(patterName.test(this.value)){
    //        document.querySelectorAll('span')[0].innerHTML='√';
    //        isok1=true;
    //    }
    //});
    //
    //var isok2=false;
    //$("#username").onblur(function(){
    //    var patterPsw=/^.{5,15}$/;
    //    if(patterPsw.test(this.value)){
    //        document.querySelectorAll('span')[1].innerHTML='√';
    //        isok2=true;
    //    }
    //});


    //注册页面的js
    $(".many-play").click(function(){
        if($(".play-hide").is(":hidden")){//如果当前隐藏
            $(".play-hide").show();//那么就显示div
        }else {//否则
            $(".play-hide").hide();//就隐藏div
        }
    });
})
