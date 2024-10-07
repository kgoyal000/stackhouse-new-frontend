$(document).ready(function(){


	$('.account__tab--switcher ul li a').on('click' ,function(e){
		e.preventDefault();
		if (!$(this).hasClass("current")) {
			$(this).closest("ul").find(".current").removeClass('current');
			$(this).addClass('current');
			$('.context__box').css('display' , "none");
			console.log($('.context__box.' + $(this).attr("data-class")));
			$('.context__box.' + $(this).attr("data-class")).fadeIn(300);
		}
	});



	$('.step__three .back-btn').on('click',function(e){
		e.preventDefault();
		$('.size__picker').css("display" ,"none");
		$('.uploaded__files , .upload__photos').fadeIn(300);
		$('.form__wrapper .steps>.elem__step:nth-child(3)').removeClass('current');
		$('.step__three').css('display' ,"none");
		$('.step__two').fadeIn(300);
	});

	$('.step__four .back-btn').on('click',function(e){
		e.preventDefault();
		$('.option__wrapper').css("display" ,"none");
		$('.size__picker').fadeIn(300);
		$('.form__wrapper .steps>.elem__step:nth-child(5)').removeClass('current');
		$('.step__four').css('display' ,"none");
		$('.step__three').fadeIn(300);
	});


	$('.added__cart .outline-btn').on("click" ,function(e){
		e.preventDefault();
		$('.added__cart').fadeOut(300);
		$('.form__modal').fadeOut(300);
		$('body,html').css("overflow-y" ,"initial");
		$('.header-container').css("top" , "0px");
		$('.header-container').css("position" , "sticky");
	});

	$('.cancel-btn').on("click"  ,function(e){
		e.preventDefault();
		$('.form__modal').fadeOut(300);
		$('body,html').css("overflow-y" ,"initial");
		$('.header-container').css("top" , "0px");
		$('.header-container').css("position" , "sticky");
	});

	$('.choose__box>a').on('click'  ,function(e){
		e.preventDefault();
		$(this).closest('.choose__box').find(".current").removeClass("current");
		$(this).addClass('current');
	});

	$('.dropdown>a').on('click' ,function(e){
		e.preventDefault();
		if ($(this).hasClass("opened")) {
			$(this).removeClass("opened");
			$(this).closest('.dropdown').find(".dropdown__box").fadeOut(300);
		} else {
			$('.dropdown>a').removeClass('opened');
			$('.dropdown .dropdown__box').fadeOut(300);
			$(this).addClass('opened');
			$(this).closest('.dropdown').find(".dropdown__box").fadeIn(300);
		}
	});

	$('.dropdown__box ul li a').on("click" ,function(e){
		e.preventDefault();
		let newP = $(this).find("p").clone();
		$(this).closest(".dropdown").find(">a>p").replaceWith(newP);
		$('.dropdown>a').removeClass('opened');
		$('.dropdown .dropdown__box').fadeOut(300);
	});

	$(document).click(function(event) { 
	  var $target = $(event.target);
	  if(!$target.closest('.dropdown').length) {
	  	$('.dropdown>a').removeClass('opened');
	  	$('.dropdown .dropdown__box').fadeOut(300);
	  }        
	});

	$('.more>a').on('click' ,function(e){
		e.preventDefault();
		if ($(this).hasClass("opened")) {
			$(this).removeClass("opened");
			$(this).closest('.desc').find('.controls').removeClass("active");
		} else {
			$('.more>a').removeClass('opened');
			$('.desc .controls').removeClass('active');
			$(this).addClass("opened");
			$(this).closest('.desc').find('.controls').addClass("active");
		}
	});


	$(document).click(function(event) { 
	  var $target = $(event.target);
	  if(!$target.closest('.more').length  && !$target.closest('.controls').length ) {
	  	$('.more>a').removeClass('opened');
	  	$('.controls').removeClass('active');
	  }        
	});

	if ($('.circle').length) {
		$('.circle').each(function(index,elem){
			$(elem).circleProgress({
			    value: 0.5,
			    size: 50,
			    animation:false,
			    fill: "#EE4B2B"
			  });
		});
	}


	$('.size__picker--list .elem').on('click' ,function(e){
		$(this).find("input").prop("checked" ,  true);
		$('.step__three .inn .regular-btn').removeClass('disabled');
	});

	$('.grid__photos .elem .media').on('click' ,function(e){
		if ($(this).find(".inn__loading").length == 0) {
			$(this).closest('.grid__photos').find(".elem .selected").removeClass("selected");
			$(this).addClass("selected");
			$('.form__wrapper .bottom__part  .step__one .regular-btn').removeClass('disabled');
		}
	});

	$('.info__button').on("mouseenter" ,function(){
		$('.tooltip__box[data-tool='+ $(this).attr("data-tool") +']').fadeIn(150);
		$('.tooltip__box[data-tool='+ $(this).attr("data-tool") +']').css("top" ,$(this).offset().top - $('.tooltip__box[data-tool='+ $(this).attr("data-tool") +']').outerHeight() - 5);
		$('.tooltip__box[data-tool='+ $(this).attr("data-tool") +']').css("left" ,$(this).offset().left - $('.tooltip__box[data-tool='+ $(this).attr("data-tool") +']').outerWidth()/2);
		if ($(this).closest('.choose__element').length) {
			$('.tooltip__box[data-tool='+ $(this).attr("data-tool") +']').addClass('no__space');
		}
	});
	$('.info__button').on("mouseleave" ,function(){
		$('.tooltip__box').fadeOut(150);
	});


	$('.droppable__area').on('click' ,function(e){
		e.preventDefault();
		$(this).closest('.upload__photos').find('input[type="file"]').click();
	});
	$('.bottom__part .step__one .regular-btn').on('click' ,function(e){
		e.preventDefault();
		$('.step__one').css("display" ,'none');
		$('.step__three').fadeIn(300);
		$('.upload__photos').css('display' , "none");
		$('.size__picker').fadeIn(300);
		$('.photos__info').css("display" , "none");
		$('.steps .elem__step:nth-child(3)').addClass('current');
		if ($(window).width() < 700) {
			$('.step__three .regular-btn').removeClass("disabled");
		}
	});


	

	$('.upload__photos input[type="file"]').on('change' ,function(){
		// $('.step__one').css("display" ,"none");
		// $('.step__two').fadeIn(300);
		// $('.bottom__part').addClass("second__state");
		// $('.uploaded__files').fadeIn(300);
		$('.grid__photos .elem').fadeIn(300);
		calculateHeight();
	});
	$('body').on('drop', '.droppable__area', function(e) {
		$('.step__one').css("display" ,"none");
		$('.step__two').fadeIn(300);
		$('.bottom__part').addClass("second__state");
		$('.uploaded__files').fadeIn(300);
		e.preventDefault();
	});

	$('.step__two .regular-btn').on('click'  ,function(e){
		e.preventDefault();
		$('.step__two').css("display" ,"none");
		$('.step__three').fadeIn(300);
		$('.upload__photos').css('display' , "none");
		$('.uploaded__files').css('display' , "none");
		$('.size__picker').fadeIn(300);
		$('.steps .elem__step:nth-child(3)').addClass('current');
		calculateHeight();
	});
	$('.step__three .regular-btn').on('click'  ,function(e){
		e.preventDefault();
		$('.step__three').css("display" ,"none");
		$('.step__four').fadeIn(300);
		$('.size__picker').css('display' , "none");
		$('.option__wrapper').fadeIn(300);
		$('.steps .elem__step:nth-child(5)').addClass('current');
		calculateHeight();
	});


	$('.step__four .regular-btn').on('click' ,function(e){
		e.preventDefault();
		$('.added__cart').fadeIn(300);
	});
	$('.added__cart .regular-btn').on("click" ,function(e){
		e.preventDefault();
	});

	$(window).on(
	    'dragover',
	    function(e) {
	        e.preventDefault();
	        e.stopPropagation();
	        $('.droppable__area .overlay').css('opacity' ,"1");
	    }
	)
	$(window).on(
	    'dragenter',
	    function(e) {
	        e.preventDefault();
	        e.stopPropagation();
	        $('.droppable__area .overlay').css('opacity' ,"1");
	    }
	)
	let dragLeaveTimer;
	$(window).on(
	    'dragleave',
	    function(e) {
	        e.preventDefault();
	        e.stopPropagation();
	        if (dragLeaveTimer){
	        	clearTimeout(dragLeaveTimer);
	        	dragLeaveTimer = setTimeout(function(){
	        		$('.droppable__area .overlay').css('opacity' ,"0");
	        	}, 300);
	        } else {
	        	dragLeaveTimer = setTimeout(function(){
	        		$('.droppable__area .overlay').css('opacity' ,"0");
	        	}, 300);
	        }
	    }
	)

	if ($('.form__modal').length) {
		let topSpace = 0;
		let floatTop = $('header').outerHeight();
		let topPartSpace = 0;
		if ($(window).scrollTop() < floatTop) {
			topPartSpace = floatTop - $(window).scrollTop();
		}
		$('.form__modal').css("top"  , topPartSpace + "px");	
		$('.form__modal').css("height", $(window).height() - topPartSpace);
		calculateHeight();
	}
	function calculateHeight(){
		$('.outer__form .top__part').css("height" , $('.outer__form').outerHeight() - $('.outer__form .bottom__part').outerHeight() -  $("header").outerHeight()  + "px");
	}
	$(window).on('resize' , function(){
		if ($('.form__modal').length) {
			let topSpace = 0;
			let floatTop = $('header').outerHeight();
			let topPartSpace = 0;
			// if ($(window).scrollTop() < floatTop) {
			// 	topPartSpace = floatTop - $(window).scrollTop();
			// }
			$('.form__modal').css("height", $(window).height() - topPartSpace);
			$('.form__modal').css("top"  , topPartSpace + $('header').outerHeight() + "px");	
			calculateHeight();
		}

	});


	$('.open__popup').on('click' ,function(e){
		e.preventDefault();
		$('body,html').css("overflow-y" ,"hidden");
		$('.form__modal').fadeIn(300);
		let topSpace = 0;
		let floatTop = $('header').outerHeight();
		let topPartSpace = 0;
		// if ($(window).scrollTop() < floatTop) {
		// 	topPartSpace = floatTop - $(window).scrollTop();
		// } 
		$('.form__modal').css("height", $(window).height() - topPartSpace);
		$('.form__modal').css("top"  , floatTop + "px");	
		calculateHeight();
		$('.outer__form .top__part').css("height" , $('.outer__form').outerHeight() - $('.outer__form .bottom__part').outerHeight() -  $("header").outerHeight() + "px");
	});







































	$('.order__id').on('click' ,function(e){
		e.preventDefault();
		$('.orders__list').css("display" ,"none");
		$('.order__inner').fadeIn(300);
	});

	$('.order__inner .title>.back>a').on('click' ,function(e){
		e.preventDefault();
		$('.order__inner').css('display' , "none");
		$('.orders__list').fadeIn(300);
	});

	$('.add__new--address').on('click' ,function(e){
		e.preventDefault();
		$('.context__box.addresses>.address__list , .context__box.addresses>.new__button').css("display" ,"none");
		$('.context__box.addresses .add__new--address--box').fadeIn(300);
	});

	$('.add__new--address--box .submit button , .add__new--address--box .submit a').on("click" ,function(e){
		e.preventDefault();
		$('.add__new--address--box').css('display' ,"none");
		$('.context__box.addresses>.address__list , .context__box.addresses>.new__button').fadeIn(300);
	});

	$('header .shop>a').on('click' ,function(e){
		e.preventDefault();
		$('.overlay__cart').fadeIn(300);
		$('body,html').css("overflow-y" ,"hidden");
		setTimeout(function(){
			$('.cart__side').addClass('opened');
		},150);
	});

	$('.overlay__cart , .cart__side .continue__shopping>a').on("click" ,function(e){
		e.preventDefault();
		$('.cart__side').removeClass('opened');
		setTimeout(function(){
			$('.overlay__cart').fadeOut(300);
		}, 150);
	});

	if ($('.small__squares').length) {
		$('.small__squares .inn__slider').slick({
			vertical: true,
			  verticalSwiping: true,
			infinite:false,
			swipe:true,
			swipeToSlide:true,
			arrows:false
		});
		$('.small__squares .inn__slider').css('display' , "block");
		$('.small__squares .inn__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
			$('.gallery__big--slider').slick('slickGoTo', $('.small__squares .slick-current .slide').attr("data-index")); 
		});
		$('body').on("click" , ".small__squares .slide>a" ,function(e){
			e.preventDefault();
			$('.small__squares .inn__slider').slick("slickGoTo" , $(this).closest('.slide').attr("data-index"))
			$('.gallery__big--slider').slick('slickGoTo', $(this).closest('.slide').attr("data-index")); 
		});
	}
	if ($('.gallery__big--slider').length) {
		$('.gallery__big--slider').slick({
			slidesToShow:1,
			arrows:true,
			infinite:false
		})
		$('.gallery__top--hero .prev__btn').on('click' ,function(e){
			e.preventDefault();
			$('.gallery__big--slider .slick-prev').click();
		});
		$('.gallery__top--hero .next__btn').on('click' ,function(e){
			e.preventDefault();
			$('.gallery__big--slider .slick-next').click();
		});
		$('.gallery__big--slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
			$('.small__squares .inn__slider').slick("slickGoTo" , $('.gallery__big--slider .slick-current .slide').attr("data-index"));
		});
	}



	$('.accordions>.elem>.head').on("click" ,function(){
		if ($(this).closest('.elem').hasClass("opened")) {
			$(this).closest('.elem').removeClass("opened");
			$(this).closest('.elem').find('.content').slideUp(300);
		} else {
			$(this).closest('.elem').addClass('opened');
			$(this).closest('.elem').find('.content').slideDown(300);
		}
	});

	$('.mobile__info>.menu>a').on('click' ,function(e){
		e.preventDefault();
		$('.menu__mobile').css('left' ,'0px');
		$('.overlay').fadeIn(300);
	});


	$('.overlay').on('click' ,function(e){
		e.preventDefault();
		$(this).fadeOut(300);
		$('.menu__mobile').css("left" ,'-340px');
	});

	$('.menu__mobile .main__step .title>a').on("click" ,function(e){
		e.preventDefault();
		$('.overlay').fadeOut(300);
		$('.menu__mobile').css("left" ,'-340px');
	});

	$('.menu__mobile .main__step>ul li a.sub__menu').on("click" ,function(e){
		e.preventDefault();
		$(this).closest('.main__step').addClass("closed");
		$('.secondary__step[data-id='+ $(this).attr("data-id") +']').addClass('current');
	});

	$('.menu__mobile .secondary__step>ul li a.inner__menu').on("click" ,function(e){
		e.preventDefault();
		$(this).closest('.secondary__step').addClass("closed");
		$('.secondary__step[data-id='+ $(this).attr("data-id") +']').addClass('current');
	});

	$('.secondary__step .back__btn>a').on('click' ,function(e){
		e.preventDefault();
		if ($(this).closest('.secondary__step').attr("data-parent") != undefined) {
			$(this).closest('.secondary__step').removeClass('current');
			$('.secondary__step[data-id='+ $(this).closest(".secondary__step").attr('data-parent') +']').removeClass('closed');
		} else {
			$(this).closest('.secondary__step').removeClass('current');
			$('.main__step').removeClass('closed');
		}
	});

	$("header .search>a").on('click' ,function(e){
		e.preventDefault();
		$('.search__box').fadeIn(300);
		$('header .float').addClass('active');
	});
	$('header .float').on("click" ,function(e){
		e.preventDefault();
		$('.search__box').fadeOut(300);
		$('header .float').removeClass('active');
	});

	if ($('.hero__slider').length) {
		$('.outer__hero').slick({
			slidesToShow:1,
			arrows:true,
			autoplay:true,
			speed:1500,
			autoplaySpeed:4000,
			responsive: [
		    {
		      breakpoint: 767,
		      settings: {
		        arrows:false,
		        dots:true
		      }
		    }
		  ]
		});
		$('.outer__hero').css("display" , "block");
		$('.hero__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
			$('.hero__slider .animated').removeClass("animated");
			$('.hero__slider .slick-current .desc>h2').addClass("animated");
			setTimeout(() =>{
				$('.hero__slider .slick-current .desc>p').addClass("animated");
			}, 40);
			setTimeout(() =>{
				$('.hero__slider .slick-current .desc>.btn').addClass("animated");
			}, 80);
		});
		$('.hero__slider .btn__back').on("click" ,function(e){
			e.preventDefault();
			$('.hero__slider .slick-prev').click();
		});
		$('.hero__slider .btn__next').on("click" ,function(e){
			e.preventDefault();
			$('.hero__slider .slick-next').click();
		});
	}
});