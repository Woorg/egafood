
$(document).ready(function() {

	// svg4everybody();

	// Basket
	var basket = $('.basket__dropdown'),
		basketLink = $('.basket__link'),
		indexClick = 0;

	$ ( function() {
		basketLink.click( function(event) {
			if (indexClick === 0) {
				basket.fadeIn(300);
				basket.addClass('basket__dropdown_active')
				indexClick = 1;
			}
			else {
				basket.fadeOut(300);
				indexClick = 0;
			}
			// event.stopPropagation();
			return false;
		});
	});
	$(document).click(function(event) {
		if ($(event.target).closest(".basket__dropdown_active").length) return;
				basket.fadeOut(700);
				indexClick = 0;
		event.stopPropagation();
	});


	// hero slider

	$('.slider__list').owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		dots: false,
		// dotsContainer: '.slider__pagination',
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true
		// responsive: false
	});


	// spinner

	$('.quant__input').click(function() {
		return false;
	})

	$('.quant__input').spinner({
		max: 100,
		min: 0
	});

	$('.quant__button_minus').click(function() {
		$(this).parent().find('.quant__input').spinner('stepDown');
		// $('.quant__input').spinner('stepDown');
		return false;
	});
	$('.quant__button_plus').click(function() {
		$(this).parent().find('.quant__input').spinner('stepUp');
		// $('.quant__input').spinner('stepDown');
		return false;
	});


	$('.quant__input').bind("change keyup input", function() {
		if (this.value.match(/[^0-9]/g)) {
			this.value = this.value.replace(/[^0-9]/g, '');
		}
	});

	//Magnific popup

	var w = $(window).outerWidth();
	var bW = window.innerWidth;
	var tW = bW - w ;

	$('.product__image a').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		},
		callbacks: {
			open: function() {
				$('.header').css('paddingRight' , tW + 'px');
			},
			close: function() {
				$('.header').css('paddingRight' , 0 + 'px');
			}
		}
	});


	// Favorite

	$('.favorite_product').on('click', function() {
		$(this).toggleClass('favorite_active');
		return false;
	});


	// Custom Select

	$('.cart-item__select select').selectmenu({
	});

	// Custom checkbox
	$('input[type=radio]').iCheck({
		labelHover: false,
		cursor: true
	});


	// Change catalog view

	// var default_view = 'grid';
	// if($.cookie('view') !== 'undefined') {
	// 	$.cookie('view', default_view, {expires: 7, path: '/'});
	// }

	function get_grid() {
		$('.view__list').removeClass('view__list_active');
		$('.view__grid').addClass('view__grid_active');
		$('.catalog__items_category .catalog__item').animate({opacity: 0}, function() {
			$('.catalog__items_category .catalog__item').removeClass('catalog__item_list');
			$('.catalog__items_category .catalog__item').addClass('catalog__item_grid');
			$('.catalog__items_category .catalog__item').stop().animate({opacity:1}, 100);
		});
	}
	function get_list() {
		$('.view__grid').removeClass('view__grid_active');
		$('.view__list').addClass('view__list_active');
		$('.catalog__items_category .catalog__item').animate({opacity: 0}, function() {
			$('.catalog__items_category .catalog__item').removeClass('catalog__item_grid');
			$('.catalog__items_category .catalog__item').addClass('catalog__item_list');
			$('.catalog__items_category .catalog__item').stop().animate({opacity:1}, 100);
		});
	}


	if($.cookie('view') == 'list'){
		$('.view__grid').removeClass('view__grid_active');
		$('.view__list').addClass('view__list_active');
		$('.catalog__items_category .catalog__item').animate({opacity:0});
		$('.catalog__items_category .catalog__item').removeClass('catalog__item_grid');
		$('.catalog__items_category .catalog__item').addClass('catalog__item_list');
		$('.catalog__items_category .catalog__item').stop().animate({opacity:1});
	}

	if($.cookie('view') == 'grid'){ get_grid(); }

	$('.view__list').click(function(){
		$.cookie('view', 'list');
		get_list()
	});

	$('.view__grid').click(function(){
		$.cookie('view', 'grid');
		get_grid();
	});





});

