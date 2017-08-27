if ($(window).width() < 1200) {
	som = 1;
} else {
	som = 0;
}

function he() {
	$(".f-ia-2").hide();
	$('.f-ia li').mouseenter(function() {
		if (som == 1) {
			return false;
		}
		$(this).stop(true, true).animate({
			top: -50
		}, 600);
		$(this).css({
			'background': '#fff'
		})
		$('.f-ia-1', this).css({
			'border': '1px #e9e9e9 solid'
		})
		$('.f-ia-2', this).stop(true, true).slideDown(600);
	})
	$('.f-ia li').mouseleave(function() {
		if (som == 1) {
			return false;
		}
		$(this).stop(true, true).animate({
			top: 0
		}, 600);
		$(this).css({
			'background': 'none'
		})
		$('.f-ia-1', this).css({
			'border': '0px #e9e9e9 solid'
		})
		$('.f-ia-2', this).stop(true, true).slideUp(600);
	})

}

function she() {
	$(".f-ia-2").hide();
	if (som == 0) {
		return false;
	}
	
}

$(function(){

	if (som == 1) {
		she();
	} else {
		he();
	}

	$('#sliderPro').sliderPro({
		width:'100%',
		height:$(window).height(),
		visibleSize:'100%',
		slideDistance:0,
		autoplayDelay:5e3,
		autoplay:true,
		forceSize:'fullWidth'
	});
	
	$('#sliderPro2').sliderPro({
		width:'100%',
		height:$(window).height(),
		visibleSize:'100%',
		slideDistance:0,
		autoplayDelay:5e3,
		autoplay:true,
		forceSize:'fullWidth'
	});
	

	$("#fullpage").fullpage({
		'css3': true,
	//	'resize':true,
		'anchors': ['page1','page2','page3','page4','page5','page6','page7','page8','page9'],
		'menu':'#fullpageMenu',
		'sectionsColor':['#fff','#fff','#f3f3f3','#fff','#f3f3f3','#fff','#fff','#fff','#fff'],
		//'autoScrolling': true,
		//'scrollOverflow': true,
		//loopTop: true,
		'navigation': false,		
		'navigationPosition': 'right',		
		'navigationTooltips': ['首页','服务','案例','新闻','客户','联系我们'],
		'slidesNavigation': true,
		'slidesNavPosition': 'bottom',
		afterLoad: function(anchorLink, index) {
			if (index == 2) {
				$('.pg2 li').delay(100).animate({
					opacity: 1
				}, 800, 'easeOutExpo');
				$('.f2 .d_b1').delay(0).animate({
					bottom: 0,
					opacity: 1
				}, 800, 'easeOutExpo');
				$('.p2bt').delay(0).animate({
					opacity: 1
				}, 800, 'easeOutExpo');
				$('.d_b-3').delay(200).animate({
					opacity: 1
				}, 800, 'easeOutExpo');
			}

			if (index == 3) {
				$('.f3 .d_b1').delay(0).animate({
					bottom: 0,
					opacity: 1
				}, 800, 'easeOutExpo');
				$('.p3img').delay(200).animate({
					opacity: 1
				}, 800, 'easeOutExpo');
				$('.p3list').delay(200).animate({
					opacity: 1
				}, 800, 'easeOutExpo');
			}

			if (index == 4) {
				$('.f5p1 .whitetitle').delay(0).animate({
					opacity: 1
				}, 800, 'easeOutExpo');
				$('.contbox').delay(500).animate({
					opacity: 1
				}, 800, 'easeOutExpo');
			}

			if (index == 5) {
				$('.bf1 .whitetitle').delay(0).animate({
					opacity: 1
				}, 800, 'easeOutExpo');
				$('.bfbox>img').delay(400).animate({
					bottom: 0,
				}, 800, 'easeOutExpo');
				$('.bf1 .advbox').delay(0).animate({
					opacity: 1
				}, 800, 'easeOutExpo');
			}
			if(index == 6){
				$('.bf2 .advbox').delay(0).animate({
					opacity: 1
				}, 800, 'easeOutExpo');
			}
			if(index == 7){
				$('.bf3 .advbox').delay(0).animate({
					opacity: 1
				}, 800, 'easeOutExpo');
			}
			if(index == 8){
				$('.pricebg .redtitle,.redtitlesm,.tab').delay(0).animate({
					opacity:1
				}, 800, 'easeOutExpo');
				$('#smprice').delay(200).animate({
					opacity:1
				}, 800, 'easeOutExpo');
			}

		},
		onLeave: function(index,nextindex,direction){
			if (index == '2') {
				$('.f2 .d_b1').delay(0).animate({
					bottom: 10,
					opacity: 0
				}, 800, 'easeOutExpo');
				$('.pg2 li').delay(100).animate({
					opacity: 0
				}, 800, 'easeOutExpo');
				$('.p2bt').delay(0).animate({
					opacity: 0
				}, 800, 'easeOutExpo');
				$('.d_b-3').delay(200).animate({
					opacity: 0
				}, 800, 'easeOutExpo');
			}

			if (index == '3') {
				$('.f3 .d_b1').delay(0).animate({
					bottom: 10,
					opacity: 0
				}, 500, 'easeOutExpo');
				$('.p3img').delay(200).animate({
					opacity: 0
				}, 500, 'easeOutExpo');
				$('.p3list').delay(200).animate({
					opacity: 0
				}, 800, 'easeOutExpo');
			}

			if (index == '4') {
				$('.f5p1 .whitetitle').delay(0).animate({
					opacity: 0
				}, 800, 'easeOutExpo');
				$('.contbox').delay(500).animate({
					opacity: 0
				}, 800, 'easeOutExpo');
			}

			if (index == '5') {
				$('.bf1 .whitetitle').delay(0).animate({
					opacity: 0
				}, 800, 'easeOutExpo');
				$('.bfbox>img').delay(400).animate({
					bottom: '-100%',
				}, 800, 'easeOutExpo');
				$('.bf1 .advbox').delay(0).animate({
					opacity: 0
				}, 800, 'easeOutExpo');
			}
			if(index == 6){
				$('.bf2 .advbox').delay(0).animate({
					opacity: 0
				}, 800, 'easeOutExpo');
			}
			if(index == 7){
				$('.bf3 .advbox').delay(0).animate({
					opacity: 0
				}, 800, 'easeOutExpo');
			}
			if(index == 8){
				$('.pricebg .redtitle,.redtitlesm,.tab').delay(0).animate({
					opacity:0
				}, 800, 'easeOutExpo');
				$('#smprice').delay(200).animate({
					opacity:0
				}, 800, 'easeOutExpo');
			}
		}

	});


})
/*
var have=false;
var inner='<div class="full-screen"><div class="thumbnail-list"><div class="slide"><div class="s02"><h3 class="whitetitle">极速订货系统帮助他们成功转型</h3><div class="contbox container"><div class="row"><div class="col-xs-12 col-sm-6"><h3>ONLYST母婴</h3><p>厦门欧雅鹭电子商务有限公司成立于2015年，致力于互联网销售，主要从事母婴用品、家庭用品、化妆品及卫生用品批发与零售业务，短期实现线下拥有200余家实体店销售额超过3000万。<br />通过使用极速订货系统，有助于企业拓广更多区域渠道，降低采购成本，订购更便捷、信息更全面、自主性更强。</p></div><div class="col-xs-12 col-sm-6"><img src="images/prod/4_14.png" alt="" /></div></div></div></div></div></div></div>';
*/
$(window).resize(function() {
	if ($(window).width() < 1200) {
		som = 1;
	} else {
		som = 0;
	}
	/*
	if($(window).width()<768&&!have){
			var div=document.createElement('div');
			div.id='create';
			div.className='section f5p2';
			div.innerHTML=inner;
			$('.bf1').before(div);
			have=true;
	}
	else{
		console.log($('#create'));
	}
	*/
	if (som == 1) {
		she();
	} else {
		he();
	}
}); 