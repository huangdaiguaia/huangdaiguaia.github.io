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
	(function(){
		$('.navppt .carousel .paging').show();
		$('.navppt .carousel .paging a:first').addClass('active');

		//让image_reel足够宽
		var imageWidth=$('.navppt .window').width();
		var imageSum=$('.navppt .image_reel img').size();
		var imageReelWidth=imageWidth*imageSum;

		$('.navppt .image_reel').css({'width':imageReelWidth});

		//幻灯片的关键 向左移图片
		var rotate=function(){
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
		var rotateSwitch=function(){
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

	})();



	//  主体 contentfirst
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
    (function(){
    	    $('.indexTuanBox .btnBox').show();
    		$('.indexTuanBox .btnBox a:first').addClass('active');

    		// 让image_reel足够宽
    		var imgTuanWidth=$('.indexTuanBox .windowTwo').width();
    		var imgTuanSum=$('.indexTuanBox .indexTuanList img').size();
    		var indexTuanListWidth=imgTuanWidth*imgTuanSum;

    		$('.indexTuanBox .indexTuanList').css({'width':indexTuanListWidth});

    		//幻灯片的关键 向左移图片
    		var rotateTwo=function(){
    			var triggerID=$actTwo.index();
    			var image_reelPosition=triggerID*imgTuanWidth;

    			$('.indexTuanBox .btnBox a').removeClass('active');
    			$actTwo.addClass('active');

    			$('.indexTuanBox .indexTuanList').animate({
    				left:-image_reelPosition
    			},500);
    		};

    		//此类幻灯片的特点 拽回到第一个
    		var rotateSwitchTwo=function(){
    			playTwo=setInterval(function(){
    				$actTwo=$('.indexTuanBox .btnBox a.active').next();        //当$active是第三个的下一个

    				if($actTwo.length==0){                      //第三个的下一个没有 即长度为0
    					$actTwo=$('.indexTuanBox .btnBox a:first');            //此时 直接让第一个激活
    				}
    				rotateTwo();                                    //继续执行幻灯片的关键 向左移图片
    			},2000);
    		};

    		rotateSwitchTwo();

    		//当鼠标划上的时候 停止 移开 继续
    		$('.indexTuanBox .indexTuanList a').hover(function(){
    			clearInterval(playTwo);
    		},function(){
    			rotateSwitchTwo();
    		});

    		//当点击1 2 3 时 让当前点击的这个为$act 然后停止动画 执行幻灯片关键
    		$('.indexTuanBox .btnBox a').click(function(){
    			$actTwo=$(this);
    			clearInterval(playTwo);
    			rotateTwo();
    			rotateSwitchTwo();
    			return false;                                  //防止a链接跳转 阻止默认行为
    		});	
    })();



	// 第二个小幻灯片
	(function(){
		    $('.indexAdFocus .btnBox').show();
			$('.indexAdFocus .btnBox a:first').addClass('active');

			// 让image_reel足够宽
			var imgAdWidth=$('.indexAdFocus .windowThree').width();
			var imgAdSum=$('.indexAdFocus .indexTuanList img').size();
			var indexAdListWidth=imgAdWidth*imgAdSum;

			$('.indexAdFocus .indexTuanList').css({'width':indexAdListWidth});

			//幻灯片的关键 向左移图片
			var rotateThree=function(){
				var triggerID=$actThree.index();
				var image_reelPosition=triggerID*imgAdWidth;

				$('.indexAdFocus .btnBox a').removeClass('active');
				$actThree.addClass('active');

				$('.indexAdFocus .indexTuanList').animate({
					left:-image_reelPosition
				},100);
			};

			//此类幻灯片的特点 拽回到第一个
			var rotateSwitchThree=function(){
				playThree=setInterval(function(){
					$actThree=$('.indexAdFocus .btnBox a.active').next();        //当$active是第三个的下一个

					if($actThree.length==0){                      //第三个的下一个没有 即长度为0
						$actThree=$('.indexAdFocus .btnBox a:first');            //此时 直接让第一个激活
					}
					rotateThree();                                    //继续执行幻灯片的关键 向左移图片
				},4000);
			};

			rotateSwitchThree();

			//当鼠标划上的时候 停止 移开 继续
			$('.indexAdFocus .indexTuanList a').hover(function(){
				clearInterval(playThree);
			},function(){
				rotateSwitchThree();
			});

			//当点击1 2 3 时 让当前点击的这个为$act 然后停止动画 执行幻灯片关键
			$('.indexAdFocus .btnBox a').click(function(){
				$actThree=$(this);
				clearInterval(playThree);
				rotateThree();
				rotateSwitchThree();
				return false;                                  //防止a链接跳转 阻止默认行为
			});	
	})();

	

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



	// 优惠推荐右上角指示灯控制

	// 优惠推荐

	$('.indexRaceBox .rightNavBox span').click(function(){
		$('.indexRaceBox .rightNavBox span').removeClass('on')
		$(this).addClass('on');

		fangidx=$(this).index();

		s=fangidx*v;
		$('.receBoxs').stop().animate({
			'left':s+'px'
		},1000);
	});



	// 白酒馆幻灯片
	(function(){
		    $('.whiteWine .titlebox .btnBox').show();
			$('.whiteWine .sliderBox .btnBox a:first').addClass('active');

			// 让image_reel足够宽
			var imgAdWidth=$('.whiteWine .sliderBox .imgBox').width();
			var imgAdSum=$('.whiteWine .sliderBox img').size();
			var indexAdListWidth=imgAdWidth*imgAdSum;
																								
			$('.whiteWine .sliderBox .imgList').css({'width':indexAdListWidth});

			//幻灯片的关键 向左移图片
			var rotateFour=function(){
				var triggerID=$activeFour.index();
				var imgPosition=triggerID*imgAdWidth;                //trigger 触发

				$('.whiteWine .sliderBox .btnBox a').removeClass('active');
				$activeFour.addClass('active');

				$('.whiteWine .sliderBox .imgList').animate({
					left:-imgPosition    //引号 分号
				},500);               //一个图片移动的速度
			};

			//此类幻灯片的特点 拽回到第一个
			var rotateSwitchFour=function(){
				playFour=setInterval(function(){
					$activeFour=$('.whiteWine .sliderBox .btnBox a.active').next();        //当$active是第三个的下一个

					if($activeFour.length==0){                      //第三个的下一个没有 即长度为0
						$activeFour=$('.whiteWine .sliderBox .btnBox a:first');            //此时 直接让第一个激活
					}
					rotateFour();                                    //继续执行幻灯片的关键 向左移图片
				},2000);              //两个图片之间的时间间隔
			};

			rotateSwitchFour();

			//当鼠标划上的时候 停止 移开 继续
			$('.whiteWine .sliderBox .imgList a').hover(function(){
				clearInterval(playFour);
			},function(){
				rotateSwitchFour();
			});

			//当点击1 2 3 时 让当前点击的这个为$act 然后停止动画 执行幻灯片关键
			$('.whiteWine .sliderBox .btnBox a').click(function(){
				$activeFour=$(this);
				clearInterval(playFour);
				rotateFour();
				rotateSwitchFour();
				return false;                                  //防止a链接跳转 阻止默认行为
			});	  
	})();



	// 葡萄酒馆
	// (function(){

	// })();
	

	(function(){
		$('.redWine .sliderBox .btnBox a:first').addClass('active');

		// 让imgList足够宽
		var imgWidth=$('.redWine .sliderBox .imgBox').width();                 //每个图片的宽度
		var imgSum=$('.redWine .sliderBox img').size();                        //有几个图片
		var imgListWidth=imgWidth*imgSum;   																							
		$('.redWine .sliderBox .imgList').css({'width':imgListWidth});
		
		//幻灯片开始   不是当什么什么时 是默认在鼠标啥事也不干的时候就发生的
		var rotateSwitch=function(){

			playRed=setInterval(function(){

				$activeRed=$('.redWine .sliderBox .btnBox a.active').next();     //每隔2秒 $activeRed这个对象代表的实体发生了变化

				if($activeRed.length==0){                                          //当$active是第三个的下一个,第三个的下一个没有 即长度为0
					$activeRed=$('.redWine .sliderBox .btnBox a:first');         //此时 直接让第一个激活 此类幻灯片的特点 拽回到第一个
				}

				//幻灯片的关键 向左移图片
				
				rotate();                                                       //继续执行幻灯片的关键 向左移图片

			},2000);                                                                //两个图片之间的时间间隔
		};

		rotateSwitch(); 

		var rotate=function(){
			var triggerID=$activeRed.index();
			var imgPosition=triggerID*imgWidth;                                   //trigger 触发

			$('.redWine .sliderBox .btnBox a').removeClass('active');
			$activeRed.addClass('active');

			$('.redWine .sliderBox .imgList').animate({
				left:-imgPosition,                           //left可以加引号,后面或者什么都不加,或者可以加上+'px';最后可以加逗号,一定不能用分号
			},500);                                                                //一个图片移动(移走这个-imgPosition)的速度
		}; 		

		//当鼠标划上的时候 停止 移开 继续
		$('.redWine .sliderBox .imgList a').hover(function(){
			clearInterval(playRed);
		},function(){
			rotateSwitch();
		});

		//当点击1 2 3 时 让当前点击的这个为$activeRed 然后停止动画 执行幻灯片关键
		$('.redWine .sliderBox .btnBox a').click(function(){
			$activeRed=$(this);
			clearInterval(playRed);
			rotate();
			rotateSwitch();
			return false;                                  //防止a链接跳转 阻止默认行为
		});
	})();


	// 洋酒馆
	(function(){
		$('.foreignWine .sliderBox .btnBox a:first').addClass('active');

		// 让imgList足够宽
		var imgWidth=$('.foreignWine .sliderBox .imgBox').width();
		var imgSum=$('.foreignWine .sliderBox img').size();
		var imgListWidth=imgWidth*imgSum;   																							
		$('.foreignWine .sliderBox .imgList').css({'width':imgListWidth});

		//幻灯片开始   不是当什么什么时 是默认在鼠标啥事也不干的时候就发生的
		var rotateSwitch=function(){

			playForeign=setInterval(function(){

				$activeForeign=$('.foreignWine .sliderBox .btnBox a.active').next();
				var rel=$('.foreignWine .sliderBox .btnBox a.active').attr('rel');

				if(rel==2){
					$activeForeign=$('.foreignWine .sliderBox .btnBox a:first');
					var end=true;
				}else{
					var end=false;
				}

				rotate(end);
			},2000);
		};

		rotateSwitch(); 

		var rotate=function(end){
			if(end){
				var triggerID=imgSum-1;                                     // var triggerID=$activeForeign.index();
				var imgPosition=triggerID*imgWidth;

				$('.foreignWine .sliderBox .btnBox a').removeClass('active');
				$activeForeign.addClass('active');

				$('.foreignWine .sliderBox .imgList').animate({
					left:-imgPosition,
				},500,function(){
					$(this).css({'left':'0px'});                            //神不知鬼不觉的从头开始
				});
			}else{
				var triggerID=$activeForeign.attr('rel')-1;
				var imgPosition=triggerID*imgWidth;

				$('.foreignWine .sliderBox .btnBox a').removeClass('active');
				$activeForeign.addClass('active');


				$('.foreignWine .sliderBox .imgList').animate({
					left:-imgPosition, 
				},500);  

			}
			
		}; 		
		
		
		//当鼠标划上的时候 停止 移开 继续
		$('.foreignWine .sliderBox .imgList a').hover(function(){
			clearInterval(playForeign);
		},function(){
			rotateSwitch();
		});

		//当点击1 2 3 时 让当前点击的这个为$activeForeign 然后停止动画 执行幻灯片关键
		$('.foreignWine .sliderBox .btnBox a').click(function(){
			$activeForeign=$(this);
			clearInterval(playForeign);
			rotate(false);
			rotateSwitch();
			return false;
		});
	})();

	// 养生酒&黄酒&啤酒

	(function(){
		$('.healthWine .sliderBox .btnBox a:first').addClass('active');

		// 让imgList足够宽
		var imgWidth=$('.healthWine .sliderBox .imgBox').width();
		var imgSum=$('.healthWine .sliderBox img').size();
		var imgListWidth=imgWidth*imgSum;   																							
		$('.healthWine .sliderBox .imgList').css({'width':imgListWidth});

		//幻灯片开始   不是当什么什么时 是默认在鼠标啥事也不干的时候就发生的
		var rotateSwitch=function(){

			playhealth=setInterval(function(){

				$activehealth=$('.healthWine .sliderBox .btnBox a.active').next();
				var rel=$('.healthWine .sliderBox .btnBox a.active').attr('rel');

				if(rel==2){
					$activehealth=$('.healthWine .sliderBox .btnBox a:first');
					var end=true;
				}else{
					var end=false;
				}

				rotate(end);
			},2000);
		};

		rotateSwitch(); 

		var rotate=function(end){
			if(end){
				var triggerID=imgSum-1;                                     // var triggerID=$activehealth.index();
				var imgPosition=triggerID*imgWidth;

				$('.healthWine .sliderBox .btnBox a').removeClass('active');
				$activehealth.addClass('active');

				$('.healthWine .sliderBox .imgList').animate({
					left:-imgPosition,
				},500,function(){
					$(this).css({'left':'0px'});                            //神不知鬼不觉的从头开始
				});
			}else{
				var triggerID=$activehealth.attr('rel')-1;
				var imgPosition=triggerID*imgWidth;

				$('.healthWine .sliderBox .btnBox a').removeClass('active');
				$activehealth.addClass('active');


				$('.healthWine .sliderBox .imgList').animate({
					left:-imgPosition, 
				},500);  

			}
			
		}; 		
		
		
		//当鼠标划上的时候 停止 移开 继续
		$('.healthWine .sliderBox .imgList a').hover(function(){
			clearInterval(playhealth);
		},function(){
			rotateSwitch();
		});

		//当点击1 2 3 时 让当前点击的这个为$activehealth 然后停止动画 执行幻灯片关键
		$('.healthWine .sliderBox .btnBox a').click(function(){
			$activehealth=$(this);
			clearInterval(playhealth);
			rotate(false);
			rotateSwitch();
			return false;
		});
	})();

	//食品
	(function(){
		$('.foodAndWine .sliderBox .btnBox a:first').addClass('active');

		// 让imgList足够宽
		var imgWidth=$('.foodAndWine .sliderBox .imgBox').width();
		var imgSum=$('.foodAndWine .sliderBox img').size();
		var imgListWidth=imgWidth*imgSum;   																							
		$('.foodAndWine .sliderBox .imgList').css({'width':imgListWidth});

		//幻灯片开始   不是当什么什么时 是默认在鼠标啥事也不干的时候就发生的
		var rotateSwitch=function(){

			playfoodAnd=setInterval(function(){

				$activefoodAnd=$('.foodAndWine .sliderBox .btnBox a.active').next();
				var rel=$('.foodAndWine .sliderBox .btnBox a.active').attr('rel');

				if(rel==2){
					$activefoodAnd=$('.foodAndWine .sliderBox .btnBox a:first');
					var end=true;
				}else{
					var end=false;
				}

				rotate(end);
			},2000);
		};

		rotateSwitch(); 

		var rotate=function(end){
			if(end){
				var triggerID=imgSum-1;                                     // var triggerID=$activefoodAnd.index();
				var imgPosition=triggerID*imgWidth;

				$('.foodAndWine .sliderBox .btnBox a').removeClass('active');
				$activefoodAnd.addClass('active');

				$('.foodAndWine .sliderBox .imgList').animate({
					left:-imgPosition,
				},500,function(){
					$(this).css({'left':'0px'});                            //神不知鬼不觉的从头开始
				});
			}else{
				var triggerID=$activefoodAnd.attr('rel')-1;
				var imgPosition=triggerID*imgWidth;

				$('.foodAndWine .sliderBox .btnBox a').removeClass('active');
				$activefoodAnd.addClass('active');


				$('.foodAndWine .sliderBox .imgList').animate({
					left:-imgPosition, 
				},500);  

			}
			
		}; 		
		
		
		//当鼠标划上的时候 停止 移开 继续
		$('.foodAndWine .sliderBox .imgList a').hover(function(){
			clearInterval(playfoodAnd);
		},function(){
			rotateSwitch();
		});

		//当点击1 2 3 时 让当前点击的这个为$activefoodAnd 然后停止动画 执行幻灯片关键
		$('.foodAndWine .sliderBox .btnBox a').click(function(){
			$activefoodAnd=$(this);
			clearInterval(playfoodAnd);
			rotate(false);
			rotateSwitch();
			return false;
		});
	})();


	/*所有酒馆结束*/


	// 官方推荐下的小滑块
	$('.contentThree .titleBox li').mouseenter(function(){
		var titleBoxLeft=$(this).position().left;
		$('.contentThree .titleBox li').removeClass('on');
		$(this).addClass('on');

		// document.title=titleBoxLeft; //测试


		// $('.contentThree .titleSlider').css({left:titleBoxLeft}); //没动画
		$('.contentThree .titleSlider').animate({                           //有动画效果
			left:titleBoxLeft
		},300);
	})


	// 官方推荐中品牌图标滑动效果   ----------------------------------------------------------------------------------------注意两个function怎么写
	$('.contentThree .logoBox ul li img').hover(
		function(){
			$(this).stop().animate({
				left:-100
			},200);
		},
		function(){
			$(this).stop().animate({
				left:0
			},200);
		}
	);


	// --------------------------------------------------------------------------------------------------------------官方推荐中品牌图标标签页效果
	$('.contentThree .logoBox .gftj').hide();
	$('.contentThree .logoBox .gftj').first().show();
	$('.contentThree .titleBox li').mouseenter(function(){
		var idx=$(this).index();

		$('.contentThree .logoBox .gftj').hide();
		$('.contentThree .logoBox .gftj').eq(idx).show();
	})
	// ---------------------------------------------------------------------------------------------------------------官方推荐中品牌图标标签页效果


	// 优惠推荐中第一个的左右移动幻灯片
	$('.contentThree .logoBox .raceRight').click(function(){
		$('.contentThree .logoBox .gftj1').stop().animate({
			left:-1200
		},400);
	});
	$('.contentThree .logoBox .raceLeft').click(function(){
		$('.contentThree .logoBox .gftj1').stop().animate({
			left:0
		},400);
	});

	// 酒仙微信
	$('.footer .footerTopBox .footerServices .jxMicroblogging .item .weixinCon').hover(
		function(){
			$('.footer .footerTopBox .footerServices .jxMicroblogging .item .weixinCode').show();
		},
		function(){
			$('.footer .footerTopBox .footerServices .jxMicroblogging .item .weixinCode').hide();
		}
	);



	// 右侧
	sw=$(window).width();
	$('.rightSidebar').css({'height':sw+'px'});



	$('.rightSidebar .me').hover(
		function(){
			$('.rightSidebar .me .publicIcon').css('backgroundPosition','-20px -163px');
		},
		function(){
			$('.rightSidebar .me .publicIcon').css('backgroundPosition','0px -163px');
		}
	);

	$('.rightSidebar .cang').hover(
		function(){
			$('.rightSidebar .cang .publicIcon').css('backgroundPosition','-60px -163px');
		},
		function(){
			$('.rightSidebar .cang .publicIcon').css('backgroundPosition','-40px -163px');
		}
	);

	$('.rightSidebar .che').hover(
		function(){
			$('.rightSidebar .che .publicIcon').css('backgroundPosition','-140px -163px');
		},
		function(){
			$('.rightSidebar .che .publicIcon').css('backgroundPosition','-120px -163px');
		}
	);

	$('.rightSidebar .fu').hover(
		function(){
			$('.rightSidebar .fu .publicIcon').css('backgroundPosition','-65px -331px');
		},
		function(){
			$('.rightSidebar .fu .publicIcon').css('backgroundPosition','-45px -331px');
		}
	);

	$('.rightSidebar .fankui').hover(
		function(){
			$('.rightSidebar .fankui .publicIcon').css('backgroundPosition','3px -203px');
		},
		function(){
			$('.rightSidebar .fankui .publicIcon').css('backgroundPosition','3px -186px');
		}
	);
	// 用户反馈
	$('.rightSidebar .fankui').hover(
		function(){
			$('.rightSidebar .fankui .tip').show();
		},
		function(){
			$('.rightSidebar .fankui .tip').hide();
		}
	);





	// $('.rightSidebar .erweima').hover(
	// 	function(){
	// 		$('.rightSidebar .erweima .publicIcon').css('backgroundPosition','-19px -204px');
	// 	},
	// 	function(){
	// 		$('.rightSidebar .erweima .publicIcon').css('backgroundPosition','-19px -186px');
	// 	}
	// );
	
	$('.rightSidebar .erweima').mouseenter(function(){
		$(this).find('i').css({'background-position':'-19px -204px'});
	})
	$('.rightSidebar .erweima').mouseleave(function(){
		$(this).find('i').css({'background-position':'-19px -186px'});
	})



	// 二维码
	$('.rightSidebar .erweima').hover(
		function(){
			$('.rightSidebar .erweima .img').show();
		},
		function(){
			$('.rightSidebar .erweima .img').hide();
		}
	);

	



	$('.rightSidebar .return').hover(
		function(){
			// 没有中括号时 只能逗号 不能冒号;backgroundPosition background-position都可以;不能没有引号
			// $('.rightSidebar .return .publicIcon').css('background-position','-40px -203px');
			// $('.rightSidebar .return .publicIcon').css('backgroundPosition','-40px -203px');
			// 没有引号不行
			// $('.rightSidebar .return .publicIcon').css({background-position:-40px -203px});
			// 有中括号时 只能冒号 不能逗号
			// $('.rightSidebar .return .publicIcon').css({'background-position':'-40px -203px'});
			// $('.rightSidebar .return .publicIcon').css({'backgroundPosition':'-40px -203px'});
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
	// 换图标
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
	// 默认是一楼
	// var floor1Name=$('.leftnav .floor1').find('a').attr('name');
	// 显示1F
	// $('.leftnav .floor1').find('a').html(floor1Name).css({'display':'block'});
	// $('.leftnav .floor1').find('i').hide();

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
				'width':'90px'
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
				'width':'70px'
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
				'width':'130px'
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

	$('.leftnav .floor5').hover(
		function(){
			var floor1Name2=$('.leftnav .floor5').find('a').attr('name2');
			$('.leftnav .floor5 a').html(floor1Name2).css({'display':'block'}).animate({
				'width':'70px'
			},300);
		},
		function(){
			$('.leftnav .floor5 a').animate({
				'width':'30px'
			},300,function(){
				$('.leftnav .floor5 a').css({'display':'none'})
				// myscroll();


			});
		}
	);

	// 点击鼠标 页面滚到对应楼层
	$('.leftnav .floor1').click(function(){
		var f=$(this).find('a').attr('name');
		var t=$('#'+f).offset().top-200;
		$(window).scrollTop(t);
	})
	$('.leftnav .floor2').click(function(){
		var f=$(this).find('a').attr('name');
		var t=$('#'+f).offset().top-200;
		$(window).scrollTop(t);
	})
	$('.leftnav .floor3').click(function(){
		var f=$(this).find('a').attr('name');
		var t=$('#'+f).offset().top-200;
		$(window).scrollTop(t);
	})
	$('.leftnav .floor4').click(function(){
		var f=$(this).find('a').attr('name');
		var t=$('#'+f).offset().top-200;
		$(window).scrollTop(t);
	})
	$('.leftnav .floor5').click(function(){
		var f=$(this).find('a').attr('name');
		var t=$('#'+f).offset().top-200;
		$(window).scrollTop(t);
	})



	// 真正的滚动监听才开始
	$(window).scroll(function(){
		myscroll();
	});

	function myscroll(){
		var st=$(window).scrollTop();

		firstTop=$('.comTitle .comIcon1').first().offset().top-200;
		
		if(st<firstTop){
			$('.leftnav').hide();
		}else{
			$('.comTitle .comIcon1').each(function(){
				var ot=$(this).offset().top-200;

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


//BUG 鼠标点击之后显示几楼而不是具体名字









});


