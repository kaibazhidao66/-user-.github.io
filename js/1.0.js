			//请勿完全抄袭源码，请勿声明自己是原创
			//window.onbeforeunload=function(){ return '你确定要离开吗？';}
			function hello(){
				alert("我是小西欢迎来到自由网 ^o^ \n这是一款以劳逸结合为中心的小型学习网站")
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
			//隐藏属性
			function dian(thisa){
				nextNode = thisa.nextElementSibling;
				if(nextNode.style.display=='none'){
					nextNode.style.display='block';
				}else{
					nextNode.style.display='none';
				}
			}
   //百度统计
   var _hmt = _hmt || [];
  (function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?df074478403d5af4db116a2847d0e92e";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
  })();
