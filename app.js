//轮播开始
$('.carousel').carousel({
	interval: 2000 // in milliseconds
})
//轮播结束


var config = {
	debug: true,
	getIp: function() {
		if(config.debug) {
			return '192.168.0.105:12138/xq';
		} else {
			return '';
		}
	},
	getGroup: function() {
		return 'Origin';
	},
	getUrl: function(controllerName) {
		return 'http://' + config.getIp() + '/index.php/' + config.getGroup() + '/' + controllerName;
	}
}

//调用示例：

//导航栏样式  开始
var nav = {
	pageName:"",
	init: function() {
		var length = $(".top-nav-list").length;
		var width;
		if(length <= 6) {
			width = "14";
			$(".top-nav-list").css("padding", "0 20px");
		} else {
			width = 100 / length;
		}
		$(".top-nav-list").css("width", width + "%");
		$(".top-nav-list").css("opacity", "1");
		//  ========== 
		//  = 开始active = 
		//  ========== 
		var location_href = window.location.href;
		
		var pageName = location_href.split("=")[1];
		nav.pageName = pageName;
		$(".top-nav-list").each(function(){
			var $a  = $(this).find("a");
			var href = $a.attr('href');
			if(href.indexOf(pageName)>0){
				$(this).find("a").addClass("active");
				
			}
		});
	}
}
nav.init();

//导航栏样式结束


var app = (function(){
	var obj = {
		init:function(f){
			
			
			if(f!=null){
				f();
			}
		}
	};
	return obj;
}());
app.init();
