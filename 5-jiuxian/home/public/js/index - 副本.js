$(function(){

// 我的酒仙的小三角
	$('.main-right .jiuxian').mouseenter(function(){
		$(this).find('.myjiu').css({'transform':'rotate(180deg)','margin-left':'3px','margin-top':'7px'});
		$(this).find('.jiuxiantop').css({'background':'#fff'});
		$(this).find('.mydropdown').show();
	});

	$('.main-right .jiuxian').mouseleave(function(){
		$(this).find('.myjiu').css({'transform':'rotate(0deg)','margin-left':'3px','margin-top':'2px'});
		$(this).find('.jiuxiantop').css({'background':'#F2F2F2'});
		$(this).find('.mydropdown').hide();
	});

// 幻灯片左侧导航栏
	$('.div3 .left-menu').mouseenter(function(){
		$(this).css({'background':'#eee'});
		$(this).find('.right').show();
		$('.right').not($(this)).find('.right').hide();
	})

	$('.div3 .left-menu').mouseleave(function(){
		$(this).find('.right').hide();
		$(this).css({'background':'#fff'})
	});



	// 幻灯片
	$('.navppt .carousel .paging').show();
	$('.navppt .carousel .paging a:first').addClass('active');

	//让image_reel足够宽
	var imageWidth=$('.navppt .window').width();
	var imageSum=$('.navppt .image_reel img').size();
	var imageReelWidth=imageWidth*imageSum;

	$('.navppt .image_reel').css({'width':imageReelWidth});

	//幻灯片的关键 向左移图片
	rotate=function(){
		var triggerID=$active.index();
		var image_reelPosition=triggerID*imageWidth;

		$('.navppt .paging a').removeClass('active');
		$active.addClass('active');

		$('.navppt .image_reel').animate({
			left:-image_reelPosition
		},500);


	// 幻灯片右侧随机出现三个广告
		arr=[1,2,3,4,5,6,7,8,9];

		$('.navppt .img').hide();

		act=$('.navppt .paging a.active').attr('rel');

		imgs=arr.slice((act-1)*3,act*3);

		for(i=0;i<imgs.length;i++){
			$('.'+imgs[i]).show();
		}
	};

	//此类幻灯片的特点 拽回到第一个
	rotateSwitch=function(){
		play=setInterval(function(){

			$active=$('.navppt .paging a.active').next();        //当$active是第三个的下一个

			if($active.length===0){                      //第三个的下一个没有 即长度为0
				$active=$('.navppt .paging a:first');            //此时 直接让第一个激活
			}
			rotate();                                    //继续执行幻灯片的关键 向左移图片
		},2000);
	};

	rotateSwitch();

	//当鼠标划上的时候 停止 移开 继续
	$('.navppt .image_reel a').hover(function(){
		clearInterval(play);
	},function(){
		rotateSwitch();
	});

	//当点击1 2 3 时 让当前点击的这个为$active 然后停止动画 执行幻灯片关键
	$('.navppt .paging a').click(function(){
		$active=$(this);
		clearInterval(play);
		rotate();
		rotateSwitch();
		return false;                                  //防止a链接跳转 阻止默认行为
	});	



	// contentfirst
	$('.indexTabBoxBottom .indexTabCon').first().show();

	$('.indexTabBoxTop ul li').mouseenter(function(){
		$(this).addClass('active');
		$('.indexTabBoxTop ul li').not($(this)).removeClass('active');

		idx=$(this).index();

		$('.indexTabBoxBottom .indexTabCon').eq(idx).show();
		$('.indexTabBoxBottom .indexTabCon').not($('.indexTabBoxBottom .indexTabCon').eq(idx)).hide();
	});


	/*右侧小导航*/
	$('.indexTabNewCon .indexTabNewList').first().show();

	$('.indexTabNewNav ul li').mouseenter(function(){
		$(this).addClass('active');
		$('.indexTabNewNav ul li').not($(this)).removeClass('active');

		idx=$(this).index();

		$('.indexTabNewCon .indexTabNewList').eq(idx).show();
		$('.indexTabNewCon .indexTabNewList').not($('.indexTabNewCon .indexTabNewList').eq(idx)).hide();
	});



    
    // 团购小幻灯片
    $('.btnBox').show();
	$('.btnBox a:first').addClass('active');

	// 让image_reel足够宽
	var imgTuanWidth=$('.windowTwo').width();
	var imgTuanSum=$('.indexTuanList img').size();
	var indexTuanListWidth=imgTuanWidth*imgTuanSum;

	$('.indexTuanList').css({'width':indexTuanListWidth});

	//幻灯片的关键 向左移图片
	rotateTwo=function(){
		var triggerID=$actTwo.index();
		var image_reelPosition=triggerID*imgTuanWidth;

		$('.btnBox a').removeClass('active');
		$actTwo.addClass('active');

		$('.indexTuanList').animate({
			left:-image_reelPosition
		},500);
	};

	//此类幻灯片的特点 拽回到第一个
	rotateSwitchTwo=function(){
		playTwo=setInterval(function(){
			$actTwo=$('.btnBox a.active').next();        //当$active是第三个的下一个

			if($actTwo.length===0){                      //第三个的下一个没有 即长度为0
				$actTwo=$('.btnBox a:first');            //此时 直接让第一个激活
			}
			rotateTwo();                                    //继续执行幻灯片的关键 向左移图片
		},2000);
	};

	rotateSwitchTwo();

	//当鼠标划上的时候 停止 移开 继续
	$('.indexTuanList a').hover(function(){
		clearInterval(playTwo);
	},function(){
		rotateSwitchTwo();
	});

	//当点击1 2 3 时 让当前点击的这个为$act 然后停止动画 执行幻灯片关键
	$('.btnBox a').click(function(){
		$actTwo=$(this);
		clearInterval(playTwo);
		rotateTwo();
		rotateSwitchTwo();
		return false;                                  //防止a链接跳转 阻止默认行为
	});	






});


