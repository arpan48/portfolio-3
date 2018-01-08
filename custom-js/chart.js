$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	if(wScroll > $('#skills').offset().top - ($(window).height() / 1.5)){
		$('.chart').easyPieChart({
		    easing: 'easeOutBounce',
		    onStep: function (from, to, percent) {
		        $(this.el).find('.percent').text(Math.round(percent));
		    },
		    barColor: 'rgb(197,94,83)', //FORCOLOR OF CHART
		    lineWidth: 5, //WIDTH OF STRIP OF SKILL CHART
		    size: 200, //WIDTH - HEIGHT OF SKILL CHART(SHOULD BE IN SQUARE) -  SHOUL BE EQUAL - Like 200px 
		});
	};	
});
