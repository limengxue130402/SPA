var timerButton = (function(){
var $btn = $('<input class="timer-button" type="button" disabled>'),
    cfg = {
        container:"body",
        num :6,
        title:'同意',
    },
    num,
    timer;

function show(conf) {
    //1、DOM draw
    $(cfg.container).append($btn);
    $.extend(cfg,conf);
    $btn.val(cfg.title+"("+cfg.num+"s)");
    timer = setInterval(function(){
        num--;
        if(num=== 0){
            clearInterval(timer);
            $btn.val("同意");
            $btn.removeAttr("disabled");
        }else{
            $btn.val("同意（"+num+"s）");
        }
    },1000);
    //2、event bind
}

$btn.click(function () {
    alert('就知道你会同意的！');
})
return{
    show:show
}
}())





















// $(function(){
//     var $btn = $('input'),
//         num = 6,
//         timer;
//         timer = setInterval(function(){
//             num--;
//             if(num=== 0){
//                 clearInterval(timer);
//                 $btn.val("同意");
//                 $btn.removeAttr("disabled");
//             }else{
//                 $btn.val("同意（"+num+"s）");
//             }
//         },1000);
//         $btn.click(function () {
//             alert('就知道你会同意的！');
//           })
// });

//不用page load event
//封装成对象，有几种方案
//1、全局对象，简单对象字面量，不完全是面向对象，不能包括私有方法
// var timerBtn = {show:function(){}}
//2、工厂函数，一个函数返回值是一个简单对象
// var timerBtn = (function(){
//     return{
//         show:function(){

//         }
//     }
// }())自己执行
//3、构造函数
// function TimerBtn(){

// } 
// var tb = new TimerBtn(); 