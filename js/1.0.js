			//请勿完全抄袭源码，请勿声明自己是原创
			//window.onbeforeunload=function(){ return '你确定要离开吗？';}
			function hello(){
				alert("我是小西欢迎来到自由导航 ^o^ \n这是一款以劳逸结合为中心的小型学习导航页面")
			}
			function ziyou(){
				alert("*欢迎关注微信公众号以防丢失~\n里面还有我精心准备的其它学习资料哦")
			}
			function tishi1(){
				alert("*提示：学习两小时后别忘了多出去走走或刷五分钟小破站让眼睛和大脑适当的休息下哦~")
			}
			function tishi2(){
				alert("*提示：如有不懂的使用方法可以在此处复制点击回到顶部或下方百度图标自行百度蜘蛛")
			}
			//隐藏
			function dian(thisa){
				nextNode = thisa.nextElementSibling;
				if(nextNode.style.display=='none'){
					nextNode.style.display='block';
				}else{
					nextNode.style.display='none';
				}
			}
                        //统计
                        var _hmt = _hmt || [];
                        (function() {
                        var hm = document.createElement("script");
                        hm.src = "https://hm.baidu.com/hm.js?df074478403d5af4db116a2847d0e92e";
                        var s = document.getElementsByTagName("script")[0]; 
                        s.parentNode.insertBefore(hm, s);
                        })();
//返回顶部
var Back2top = (function($,undefined){

    /**
     * 动画时间，默认为：300ms
     * @type {Number}
     * @private
     */
    var _timeInterval = 300;

    /**
     * 浏览器信息
     * @type {*}
     */
    var browserInfo = (function(){
        var userAgent = navigator.userAgent.toLowerCase();
        return {
            version: (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [])[1],
            msie: /msie/.test( userAgent ) && !/opera/.test( userAgent )
        };
    })();

    /**
     * 节点安装
     */
    var setup = function(){
        /**
         * 创建返回顶部的节点
         * @type {*|jQuery}
         */
        var elBack2Top = $('<div id="doitbegin_Back2top">回到顶部</div>')
            .appendTo('body')
            .click(function() {
                $("html, body").animate({ scrollTop: 0 }, parseInt(_timeInterval,10) || 300);
            });

        /**
         * 返回顶部的处理逻辑
         */
        var fnBack2Top = function() {
            var scrollTop = $(document).scrollTop(), winHeight = $(window).height();

            (scrollTop > 0)? elBack2Top.show(): elBack2Top.hide();

            //IE6下单独处理
            if (browserInfo.msie && parseInt(browserInfo.version,10) == 6) {
                elBack2Top.css("top", scrollTop + winHeight - 150);
            }
        };

        // 滚动事件绑定
        $(window).bind("scroll", fnBack2Top);

        fnBack2Top();
    };

    /**
     * 初始化，可控制动画时间
     * @param {Integer}     timeInterval  动画时间，默认300ms
     */
    var init = function(timeInterval){
        _timeInterval = timeInterval;
        $(function(){
            setup();
        });
    };

    return {
        init : init,
        version : '1.0'
    };

})(jQuery);
