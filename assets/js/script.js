
var app = app || {};
let scrollTop, scrollLeft = 0;

app.init = function () {
	app.tab();
	app.anchorLink();
	app.swiper();
	app.faq();
	app.inscrease();
	app.splitText();
};

app.tab = function () {
	$(document).on("click", ".tab a", function (e) {
		e.preventDefault();
		let target = $(this).attr("href").split('#')[1];

		$(this).parent().addClass("active").siblings().removeClass("active");
		$('[data-id="' + target + '"]').fadeIn(0).siblings().fadeOut(0);
		history.pushState({}, '', '#' + target);
	});

	if (location.hash && $(".tab li a[href='" + location.hash + "']").length) {
		$(".tab li a[href='" + location.hash + "']").trigger("click");

		$('.pagination a.page-numbers').each(function (i, a) {
			$(a).attr('href', $(a).attr('href') + '#' + $(a).parents('.tab-box').attr('data-id'));
		});
	} else {
		$(".tab li:first-child a").trigger("click");
		history.replaceState(null, null, ' ');
	}
}

app.anchorLink = function () {
	$('.anchor-link').click(function () {

		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			let box = document.querySelector('.p-header');
			let snum = document.querySelector('.h_number');

		}
	});


}
app.swiper = function () {
	var swiper = new Swiper(".swiper-banner", {
		slidesPerView: 1,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
	var swiper = new Swiper(".news-js", {
		slidesPerView: 1,
		spaceBetween: 15,
		loop: true,
		autoplay: {
			delay: 5000,
		},
		breakpoints: {
			768: {
				slidesPerView: 4,
			},
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	var swiper = new Swiper(".swiper-cate", {
		slidesPerView: 2,
		loop: true,
		autoplay: {
			delay: 5000,
		},
		breakpoints: {
			768: {
				slidesPerView: 9,
			},
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	var swiper = new Swiper(".swiper-customer", {
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 5000,
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
	var swiper = new Swiper(".swiper-pr-hot", {
		slidesPerView: 2,
		loop: true,
		autoplay: {
			delay: 5000,
		},
		breakpoints: {
			768: {
				slidesPerView: 4,
			},
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	var galleryThumbs = new Swiper(".gallery-thumbs", {
		slidesPerView: 4,
		spaceBetween: 13,
		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,

		breakpoints: {
			768: {
				slidesPerView: 5,
				direction: 'vertical',
			},

		},
	});

	var galleryMain = new Swiper(".gallery-main", {
		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		preventInteractionOnTransition: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		thumbs: {
			swiper: galleryThumbs
		}
	});

	galleryMain.on('slideChangeTransitionStart', function () {
		galleryThumbs.slideTo(galleryMain.activeIndex);
	});

	galleryThumbs.on('transitionStart', function () {
		galleryMain.slideTo(galleryThumbs.activeIndex);
	});

	app.galleryThumbs = galleryThumbs;
	app.galleryMain = galleryMain;

	var swiper_gal = new Swiper(".pr-thumb", {
		loop: true,
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,
	});
	var swiper_thumb = new Swiper(".pr-main", {
		loop: true,
		spaceBetween: 10,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: swiper_gal,
		},
	});
}
app.inscrease = function () {
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
}

app.faq = function () {
	$('.faq-item__head').on('click', function () {
		var findElm = $(this).next(".faq-item__body");
		$(findElm).stop().slideToggle();
		$(this).children('.ic').stop().toggleClass('ic-minus');
	});
}

app.splitText = function () {
	$('.btn_buy_shoppe').each(function () {
		let i = 1;
		$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
		$(this).find("span").each(function () {
			$(this).attr('style', `--i:${i}`)
			i++;
		});
	});

}
$(document).ready(function () {
	if ($(".wow").length > 0) {
		var wow = new WOW({
			animateClass: 'animate_animated'
		});
		wow.init();
	}
	$(".ic_menu ").click(function () {
		$(this).toggleClass('active');
		$(".menu_more").slideToggle();
	});
	$(".top-mb__ic").click(function () {
		$(".p-header__menu").addClass('show');
		$(".bg-close-menu").addClass('show');
	});

	$(".bg-close-menu").click(function () {
		$(".p-header__menu").removeClass('show');
		$(".cart-content").removeClass('show');
		$(this).removeClass('show');
	});
	$('.btn-top').click(function () {
		$('html, body').animate({ scrollTop: 0 });
		return false;
	});

	$(".ic_search").click(function () {
		$(".p-header__search").slideToggle();
	});
	$('.ic_lv').on('click', function () {
		$(this).toggleClass('is-active');
		var findElm = $(this).next(".level_3");
		$(findElm).stop().slideToggle();
	});
	app.init();
});
$(function () {
	$("include").each(function () {
		var file = $(this).attr("src");
		$(this).load(file, function () {

			$('.js-pagetop').click(function () {
				$('html, body').animate({ scrollTop: 0 });
				return false;
			});
		});

	});
});