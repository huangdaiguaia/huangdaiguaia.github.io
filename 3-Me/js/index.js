$(function(){
// 幻灯片
(function(){
	$('.slide .slideBox .btnBox a:first').addClass('active');

	// 让imgList足够宽
	var imgWidth=$('.slide .slideBox').width();                 //每个图片的宽度
	var imgSum=$('.slide .slideBox img').size();                        //有几个图片
	var imgListWidth=imgWidth*imgSum;   																							
	$('.slide .slideBox .imgBox').css({'width':imgListWidth});
	
	//幻灯片开始   不是当什么什么时 是默认在鼠标啥事也不干的时候就发生的
	var rotateSwitch=function(){

		playChange=setInterval(function(){

			$activeChange=$('.slide .slideBox .btnBox a.active').next();     //每隔2秒 $activeChange这个对象代表的实体发生了变化

			if($activeChange.length==0){                                          //当$active是第三个的下一个,第三个的下一个没有 即长度为0
				$activeChange=$('.slide .slideBox .btnBox a:first');         //此时 直接让第一个激活 此类幻灯片的特点 拽回到第一个
			}

			//幻灯片的关键 向左移图片
			
			rotate();                                                       //继续执行幻灯片的关键 向左移图片

		},2000);                                                                //两个图片之间的时间间隔
	};

	rotateSwitch(); 

	var rotate=function(){
		var triggerID=$activeChange.index();
		var imgPosition=triggerID*imgWidth;                                   //trigger 触发

		$('.slide .slideBox .btnBox a').removeClass('active');
		$activeChange.addClass('active');

		$('.slide .slideBox .imgBox').animate({
			left:-imgPosition,                           //left可以加引号,后面或者什么都不加,或者可以加上+'px';最后可以加逗号,一定不能用分号
		},500);                                                                //一个图片移动(移走这个-imgPosition)的速度
	}; 		

	//当鼠标划上的时候 停止 移开 继续
	$('section .slide .slideBox .imgBox a').hover(function(){
		clearInterval(playChange);
	},function(){
		rotateSwitch();
	});

	//当点击1 2 3 时 让当前点击的这个为$activeChange 然后停止动画 执行幻灯片关键
	$('section .slide .slideBox .btnBox a').click(function(){
		$activeChange=$(this);
		clearInterval(playChange);
		rotate();
		rotateSwitch();
		return false;                                  //防止a链接跳转 阻止默认行为
	});
})();

// 之前的标签页
$('section .before .boforeBottom .duoluo').first().show();

$('section .before .beforeTop ul li').mouseenter(function(){
	$(this).addClass('active');
	$('section .before .beforeTop ul li').not($(this)).removeClass('active');

	idx=$(this).index();

	$('section .before .boforeBottom .duoluo').eq(idx).show();
	$('section .before .boforeBottom .duoluo').not($('section .before .boforeBottom .duoluo').eq(idx)).hide();

});




// 优惠推荐下幻灯片的左右滑动
s=0;
v=-1200;
$('.raceListWrap .raceRight').click(function(){
	s+=v;
	if(s<=-2400){
		s=-2400;
	}

	n=s/v;
	$('.indexRaceBox .rightNavBox span').removeClass('on')
	$('.indexRaceBox .rightNavBox span').eq(n).addClass('on');


	$('.receBoxs').stop().animate({
		'left':s+'px'
	},1000);
	// $('.receBoxs').css({'left':'-1188px'})
});

$('.raceListWrap .raceLeft').click(function(){
	s-=v;
	if(s>=0){
		s=0;
	}

	n=s/v;
	$('.indexRaceBox .rightNavBox span').removeClass('on')
	$('.indexRaceBox .rightNavBox span').eq(n).addClass('on');

	$('.receBoxs').stop().animate({
		'left':s
	},1000);
	// $('.receBoxs').css({'left':'-1188px'})
});



// 前端技术
$('.indexRaceBox .rightNavBox span').click(function(){
	$('.indexRaceBox .rightNavBox span').removeClass('on')
	$(this).addClass('on');

	fangidx=$(this).index();

	s=fangidx*v;
	$('.receBoxs').stop().animate({
		'left':s+'px'
	},1000);
});


// 回到顶部
sw=$(window).width();
$('.rightSidebar').css({'height':sw+'px'});

$('.rightSidebar .return').hover(
	function(){
		$('.rightSidebar .return').find('i').css({'background-position':'-40px -203px'});
	},
	function(){
		$('.rightSidebar .return .publicIcon').css('backgroundPosition','-40px -186px');
	}
);


$('.rightSidebar .return').click(function(){
	var s=$(window).scrollTop();
	v=100;
	// 50和10老师写的
	var sobj=setInterval(function(){
		s-=v;

		if(s<=0){
			s=0;
			clearInterval(sobj);
		}
		$(window).scrollTop(s);
	},1)
})




// 左侧滚动监听
// 回到顶部 换图标
$('.leftnav .floorBack').hover(
	function(){
		$('.leftnav .floorBack .newIndexIcon').css('backgroundPosition','-95px -190px');
	},
	function(){
		$('.leftnav .floorBack .newIndexIcon').css('backgroundPosition','-74px -190px');
	}
);
// 回到顶部
$('.leftnav .floorBack').click(function(){
	var s=$(window).scrollTop();
	v=100;
	// 50和10老师写的
	var sobj=setInterval(function(){
		s-=v;

		if(s<=0){
			s=0;
			clearInterval(sobj);
			// $('.leftnav').hide();
		}
		$(window).scrollTop(s);
	},1)
})


// css后接动画animate---------------------------------------------------

$('.leftnav .floor1').hover(
	function(){
		var floor1Name2=$('.leftnav .floor1').find('a').attr('name2');
		$('.leftnav .floor1 a').html(floor1Name2).css({'display':'block'}).animate({
			'width':'70px'
		},300);
	},
	function(){
		$('.leftnav .floor1 a').animate({
			'width':'30px'
		},300,function(){
			$('.leftnav .floor1 a').css({'display':'none'})
			// myscroll();
		});
	}
);

$('.leftnav .floor2').hover(
	function(){
		var floor1Name2=$('.leftnav .floor2').find('a').attr('name2');
		$('.leftnav .floor2 a').html(floor1Name2).css({'display':'block'}).animate({
			'width':'70px'
		},300);
	},
	function(){
		$('.leftnav .floor2 a').animate({
			'width':'30px'
		},300,function(){
			$('.leftnav .floor2 a').css({'display':'none'})
			// myscroll();
		});
	}
);

$('.leftnav .floor3').hover(
	function(){
		var floor1Name2=$('.leftnav .floor3').find('a').attr('name2');
		$('.leftnav .floor3 a').html(floor1Name2).css({'display':'block'}).animate({
			'width':'100px'
		},300);
	},
	function(){
		$('.leftnav .floor3 a').animate({
			'width':'30px'
		},300,function(){
			$('.leftnav .floor3 a').css({'display':'none'})
			// myscroll();
		});
	}
);

$('.leftnav .floor4').hover(
	function(){
		var floor1Name2=$('.leftnav .floor4').find('a').attr('name2');
		$('.leftnav .floor4 a').html(floor1Name2).css({'display':'block'}).animate({
			'width':'100px'
		},300);
	},
	function(){
		$('.leftnav .floor4 a').animate({
			'width':'30px'
		},300,function(){
			$('.leftnav .floor4 a').css({'display':'none'})
			// myscroll();
		});
	}
);



// 点击鼠标 页面滚到对应楼层
$('.leftnav .floor1').click(function(){
	var f=$(this).find('a').attr('name');
	var t=$('#'+f).offset().top-100;
	$(window).scrollTop(t);
})
$('.leftnav .floor2').click(function(){
	var f=$(this).find('a').attr('name');
	var t=$('#'+f).offset().top-100;
	$(window).scrollTop(t);
})
$('.leftnav .floor3').click(function(){
	var f=$(this).find('a').attr('name');
	var t=$('#'+f).offset().top-100;
	$(window).scrollTop(t);
})
$('.leftnav .floor4').click(function(){
	var f=$(this).find('a').attr('name');
	var t=$('#'+f).offset().top-100;
	$(window).scrollTop(t);
})



// 真正的滚动监听才开始
$(window).scroll(function(){
	myscroll();
});

function myscroll(){
	var st=$(window).scrollTop();

	firstTop=$('.each').first().offset().top-100;
	
	if(st<firstTop){
		$('.leftnav').hide();
	}else{
		$('.each').each(function(){
			var ot=$(this).offset().top-100;

			if(st>=ot){
				$('.leftnav').show();

				fname=$(this).attr('id');
				$('.leftnav a[name='+fname+']').html(fname).css({'display':'block'});
				// $('.leftnav a[name='+fname+']').next('i').hide();

				$('.leftnav .leftnavA').not($('.leftnav a[name='+fname+']')).each(function(){
					fname2=$(this).attr('name2');
					$(this).html(fname2).hide();
					// $(this).next().show();
				});
			}
		});
	}
}




});


