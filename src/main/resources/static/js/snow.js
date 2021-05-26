//&#10047 小红花 #FF0000（红色）  &#10052; 雪花  &#10084 心形 #FF0000（红色）  &#9752 三叶草 #32CD32（绿色）
(function($){
//     $.fn.snow = function(options){
//         var $flake = $('<div id="snowbox" />').css({'position': 'absolute','z-index':'9999', 'top': '-50px'}).html('&#10052;'),
//             documentHeight 	= $(document).height(),
//             documentWidth	= $(document).width(),
//             defaults = {
//                 minSize		: 10,
//                 maxSize		: 20,
//                 newOn		: 1000,
//                 flakeColor	: "#FFFFFF" /* 此处可以定义雪花颜色，若要白色可以改为#FFFFFF   #AFDAEF*/
//             },
//             options	= $.extend({}, defaults, options);
//         var interval= setInterval( function(){
//             var startPositionLeft = Math.random() * documentWidth - 100,
//                 startOpacity = 0.5 + Math.random(),
//                 sizeFlake = options.minSize + Math.random() * options.maxSize,
//                 endPositionTop = documentHeight - 200,
//                 endPositionLeft = startPositionLeft - 500 + Math.random() * 500,
//                 durationFall = documentHeight * 10 + Math.random() * 5000;
//             $flake.clone().appendTo('body').css({
//                 left: startPositionLeft,
//                 opacity: startOpacity,
//                 'font-size': sizeFlake,
//                 color: options.flakeColor
//             }).animate({
//                 top: endPositionTop,
//                 left: endPositionLeft,
//                 opacity: 0.2
//             },durationFall,'linear',function(){
//                 $(this).remove()
//             });
//         }, options.newOn);
//     };
// })(jQuery);
// $(function(){
//     $.fn.snow({
//         minSize: 5, /* 定义雪花最小尺寸 */
//         maxSize: 50,/* 定义雪花最大尺寸 */
//         newOn: 500  /* 定义密集程度，数字越小越密集 */
//     });





//    测试
    $.fn.snow = function(options){
        var $flake = $('<div id="snowbox" />').css({'position': 'absolute','z-index':'9999', 'top': '-50px'}).html('&#10047'),
            documentHeight 	= $(document).height(),
            documentWidth	= $(document).width(),
            defaults = {
                minSize		: 10,
                maxSize		: 20,
                newOn		: 1000,
                flakeColor	: "#FF0000" /* 此处可以定义雪花颜色，若要白色可以改为#FFFFFF   #AFDAEF*/
            },
            options	= $.extend({}, defaults, options);
        var interval= setInterval( function(){
            var startPositionLeft = Math.random() * documentWidth - 100,
                startOpacity = 0.5 + Math.random(),
                sizeFlake = options.minSize + Math.random() * options.maxSize,
                endPositionTop = documentHeight - 200,
                endPositionLeft = startPositionLeft - 500 + Math.random() * 500,
                durationFall = documentHeight * 10 + Math.random() * 5000;
            $flake.clone().appendTo('body').css({
                left: startPositionLeft,
                opacity: startOpacity,
                'font-size': sizeFlake,
                color: options.flakeColor
            }).animate({
                top: endPositionTop,
                left: endPositionLeft,
                opacity: 0.2
            },durationFall,'linear',function(){
                $(this).remove()
            });
        }, options.newOn);
    };
})(jQuery);
$(function(){
    $.fn.snow({
        minSize: 5, /* 定义雪花最小尺寸 */
        maxSize: 50,/* 定义雪花最大尺寸 */
        newOn: 500  /* 定义密集程度，数字越小越密集 */
    });


});
