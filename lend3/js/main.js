$(document).ready(function() {


  // Зацикливание галлереи fancybox

  $("[data-fancybox]").fancybox({
    loop: true
  });


  // Плавный скролл
  
  if ($(window).width() > 992) {
    $('.smooth-scroll').on('click', function (e) {
      e.preventDefault();
      smoothScroll('product-card', 150);
    });
  } else {
    $('.smooth-scroll').on('click', function (e) {
      e.preventDefault();
      smoothScroll('product-card__form', ($(window).height() - 350));
    });
  }

  function smoothScroll(classOfName, topSmooth) {
    $('html, body').animate({
      scrollTop: $("." + classOfName).offset().top - topSmooth
    }, 1500);
  }


  // Добавление нуля, если число < 10

  function addZero(num) {
    return (num > 9) ? num : '0' + num;
  }


  // Динамическая дата, от сегодняшней + 2 дня с добавлением нулей, если день или месяц меньше 10

  function addDays(days) {
    var result = new Date();
    result.setDate(result.getDate() + days);
    return result;
  }

  function removeDays(days) {
    var result = new Date();
    result.setDate(result.getDate() - days);
    return result;
  }

  $('.sale--date').text(addZero(addDays(2).getDate()) + '.' + (addZero(addDays(2).getMonth() + 1)) + '.' + (addDays(2).getFullYear()));

  $('.footer-wrapper__text-item--from').text(addZero(removeDays(2).getDate()) + '.' + (addZero(removeDays(2).getMonth() + 1)) + '.' + (removeDays(2).getFullYear()));

  $('.footer-wrapper__text-item--to').text(addZero(addDays(2).getDate()) + '.' + (addZero(addDays(2).getMonth() + 1)) + '.' + (addDays(2).getFullYear()));


  // Отключение возвращения fancybox картинки при выходе

  $.fancybox.defaults.backFocus = false;
  

  // Слайдер в секции 'gallery'

  const gallarySwiper = new Swiper('.gallery-swiper', {
    loop: true,
    spaceBetween: 20,
    centeredSlides: true,
    slidesPerView: 'auto',
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


  // Переключение цвета в секции 'product'

  $('.product-card__color').on('click', function() {
    const color = $(this).attr('data-color');

    $(this).parents('.product-card__colors').children('.product-card__color').each(function(i, key) {
      $(key).removeClass('product-card__color--active');

      if($(key).attr('data-color') == color) {
        $(key).addClass('product-card__color--active');
      }
    });

    $(this).parents('.product-card__wrapper').children('.product-slider').each(function(i, key) {
      $(key).removeClass('product-slider--active');

      if($(key).attr('data-color') == color) {
        $(key).addClass('product-slider--active');
      }
    });
  });

  setTimeout(function() {
    $('.product-slider--hidden').removeClass('product-slider--hidden');
  }, 200);


  // Переключение размера обуви в секции 'product'

  $('.product-card__size').on('click', function() {
    $(this).parent('.product-card__sizes').children('.product-card__size').each(function(i, key) {
      $(key).removeClass('product-card__size--active');
    });

    $(this).parent('.product-card__sizes').find('.product-card__size-number').each(function(i, key) {
      $(key).removeClass('product-card__size-number--active');
    });

    $(this).parent('.product-card__sizes').find('.product-card__size-centimeter').each(function(i, key) {
      $(key).removeClass('product-card__size-centimeter--active');
    });


    $(this).addClass('product-card__size--active');
    $(this).find('.product-card__size-number').addClass('product-card__size-number--active');
    $(this).find('.product-card__size-centimeter').addClass('product-card__size-centimeter--active');
  });


    

  // Слайдер в секции 'product'

  const productSwiper1Blue = new Swiper('.product-swiper--1-blue', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
  
    pagination: {
      el: '.product-swiper__pagination',
      clickable: true,
    },

    thumbs: {
      swiper: {
        el: '.product-mini--1-blue',
        slidesPerView: 4,
        spaceBetween: 20,
      }
    }
  });

  const productSwiper1White = new Swiper('.product-swiper--1-white', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
  
    pagination: {
      el: '.product-swiper__pagination',
      clickable: true,
    },

    thumbs: {
      swiper: {
        el: '.product-mini--1-white',
        slidesPerView: 4,
        spaceBetween: 20,
      }
    }
  });

  const productSwiper2Rose = new Swiper('.product-swiper--2-rose', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
  
    pagination: {
      el: '.product-swiper__pagination',
      clickable: true,
    },

    thumbs: {
      swiper: {
        el: '.product-mini--2-rose',
        slidesPerView: 4,
        spaceBetween: 20,
      }
    }
  });

  const productSwiper3Black = new Swiper('.product-swiper--3-black', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
  
    pagination: {
      el: '.product-swiper__pagination',
      clickable: true,
    },

    thumbs: {
      swiper: {
        el: '.product-mini--3-black',
        slidesPerView: 4,
        spaceBetween: 20,
      }
    }
  });

  const productSwiper3Red = new Swiper('.product-swiper--3-red', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
  
    pagination: {
      el: '.product-swiper__pagination',
      clickable: true,
    },

    thumbs: {
      swiper: {
        el: '.product-mini--3-red',
        slidesPerView: 4,
        spaceBetween: 20,
      }
    }
  });


  // Слайдер в секции 'feedback'

  const feedbackSwiper = new Swiper('.feedback-swiper', {
    loop: true,
    spaceBetween: 20,
    autoHeight: true,

    pagination: {
      el: '.feedback-swiper__pagination',
      clickable: true,
    },
  });
});