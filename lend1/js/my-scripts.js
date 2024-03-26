var action = false,
    clicked = false;
var Owl = {

    init: function() {
        Owl.carousel();
    },

    carousel: function() {
        var owl;
        var owl2;
        $(document).ready(function() {

            owl = $('.slider-1').owlCarousel({
                items: 1,
                center: true,
                nav: false,
                dots: false,
                loop: true,
                margin: 0,
                autoHeight: true,
                // dotsContainer: '.test-1',
                navText: ['prev', 'next'],
                animateOut: 'fadeOut',
            });

            owl2 = $('.slider-1-2').owlCarousel({
                items: 1,
                center: true,
                nav: false,
                dots: false,
                loop: true,
                margin: 0,
                autoHeight: true,
                // dotsContainer: '.test-2',
                navText: ['prev', 'next'],
                animateOut: 'fadeOut',
            });


            $('.owl-next').on('click', function() {
                action = 'next';
            });

            $('.owl-prev').on('click', function() {
                action = 'prev';
            });

            $('.bookmarks-1').on('click', 'li', function(e) {
                owl.trigger('to.owl.carousel', [$(this).index(), 300]);
            });

            $('.bookmarks-2').on('click', 'li', function(e) {
                owl2.trigger('to.owl.carousel', [$(this).index(), 300]);
            });
        });
    }
};


$(function() {

    $('.test-1 li').click(function(e) {
        var $current = $('.test-1 li.active');
        $current.removeClass('active');
        $current.next('.test-1 li').addClass('active');
    });

    $('.test-2 li').click(function(e) {
        var $current = $('.test-2 li.active');
        $current.removeClass('active');
        $current.next('.test-2 li').addClass('active');
    });

});




$(document).ready(function() {
    Owl.init();
    // Owl2.init();

    // Подключение всплывающих окон
    $('.main-modal').magnificPopup();


    $('.slider-1-mob').owlCarousel({
        items: 1,
        center: true,
        nav: false,
        dots: true,
        loop: true,
        margin: 0,
        autoHeight: true,
        animateOut: 'fadeOut',
    });
    $('.slider-2').owlCarousel({
        loop: false,
        dots: true,
        margin: 30,
        autoHeight: true,
        navText: ['<div class="slider-btn slider-prev"><span></span></div>', '<div class="slider-btn slider-next"><span></span></div>'],
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            // breakpoint from 480 up
            768: {
                items: 1,
                nav: true,
            },
            // breakpoint from 480 up
            992: {
                items: 2,
                nav: true,
            }
        }
    });

    $('.slider-3').owlCarousel({
        loop: false,
        nav: false,
        dots: true,
        margin: 30,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            // breakpoint from 480 up
            992: {
                items: 3,
            },

        }
    });

    $('.slider-4').owlCarousel({
        loop: false,
        dots: true,
        margin: 0,
        autoHeight: true,
        navText: ['<div class="slider-btn slider-prev"><span></span></div>', '<div class="slider-btn slider-next"><span></span></div>'],
        items: 1,
    });

    // // Квиз
    // $('.radio-item input[type="radio"]').on('click', function(){
    //   $(this).parents('.radio-item').hide();
    //   $(this).parents('.radio-item').next().show();
    // });

    // //Подставление данных с radio в скрытое поле формы
    // $('.radio-item-1 input[type="radio"]').on('change', function(){
    //   radioVal = $(this).val();
    //   $('#radioWeight').val(radioVal);
    // });
    // $('.radio-item-2 input[type="radio"]').on('change', function(){
    //   radioVal = $(this).val();
    //   $('#radioHeight').val(radioVal);
    // });
    // $('.radio-item-3 input[type="radio"]').on('change', function(){
    //   radioVal = $(this).val();
    //   $('#radioGender').val(radioVal);
    // });
    // $('.radio-item-4 input[type="radio"]').on('change', function(){
    //   radioVal = $(this).val();
    //   $('#radioActivity').val(radioVal);
    // });

    // // Плавный скролл
    // $('.scroll-bottom').click( function(){ // ловим клик по ссылке с классом go_to
    // var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    //   if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
    // $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
    //   }
    // return false; // выключаем стандартное действие
    // });


    // // Плавный скролл
    // $('nav ul li a.scroll').click( function(){ // ловим клик по ссылке с классом go_to
    // var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    //   if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
    // $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
    //   }
    // return false; // выключаем стандартное действие
    // });

    // // Скрытие placeholder
    // $('input,textarea').focus(function(){
    // 	$(this).data('placeholder',$(this).attr('placeholder'))
    // 	$(this).attr('placeholder','');
    // });
    // $('input,textarea').blur(function(){
    // 	$(this).attr('placeholder',$(this).data('placeholder'));
    // });



});

//Мобильное меню
function openNav() {
    document.getElementById("myNav").style.display = "block";
}

function closeNav() {
    document.getElementById("myNav").style.display = "none";
}


/*Вариант до конца дня*/
var q = new Date;
var year = q.getFullYear();
var month = q.getMonth();
var day = q.getDate() + 1;
var hour = 0;
var minute = 0;
var sec = 0;
/**/

function CountBox() {

    dateNow = new Date();

    amount = dateFuture.getTime() - dateNow.getTime();

    delete dateNow;

    if (amount < 0) {

        out = "<div class='countbox-num flex flex-center flex-mid flex-wrap'><div id='countbox-hours1'>0</div><div id='countbox-hours2'>0</div><div id='countbox-hours-text'>часов</div></div>" +
            "<div class='countbox-space flex flex-mid'></div>" +
            "<div class='countbox-num flex flex-center flex-mid'><div id='countbox-mins1'>0</div><div id='countbox-mins2'>0</div><div id='countbox-mins-text'>минут</div></div>" +
            "<div class='countbox-space flex flex-mid'></div>" +
            "<div class='countbox-num flex flex-center flex-mid'><div id='countbox-secs1'>0</div><div id='countbox-secs2'>0</div><div id='countbox-secs-text'>скенд</div></div>";

        //document.getElementById("countbox").innerHTML = out;

    } else {
        hours = 0;
        hours1 = 0;
        hours2 = 0;
        mins = 0;
        mins1 = 0;
        mins2 = 0;
        secs = 0;
        secs1 = 0;
        secs2 = 0;
        out = "";

        amount = Math.floor(amount / 1e3);
        days = Math.floor(amount / 86400);


        days1 = (days >= 10) ? days.toString().charAt(0) : '0';
        //console.log(days1);


        days2 = (days >= 10) ? days.toString().charAt(1) : days.toString().charAt(0);

        amount = amount % 86400;
        hours = Math.floor(amount / 3600);
        hours1 = (hours >= 10) ? hours.toString().charAt(0) : '0';
        hours2 = (hours >= 10) ? hours.toString().charAt(1) : hours.toString().charAt(0);
        amount = amount % 3600;

        mins = Math.floor(amount / 60);

        mins1 = (mins >= 10) ? mins.toString().charAt(0) : '0';

        mins2 = (mins >= 10) ? mins.toString().charAt(1) : mins.toString().charAt(0);

        amount = amount % 60;

        secs = Math.floor(amount);

        secs1 = (secs >= 10) ? secs.toString().charAt(0) : '0';

        secs2 = (secs >= 10) ? secs.toString().charAt(1) : secs.toString().charAt(0);

        out = "" +
            "<div class='countbox-num'><div id='countbox-hours1' class='count-num'>" + hours1 + "</div><div id='countbox-hours2' class='count-num'>" + hours2 + "</div><p class='count-txt'>часов</p></div>" +
            "<div class='countbox-num'><div id='countbox-mins1' class='count-num'>" + mins1 + "</div><div id='countbox-mins2' class='count-num'>" + mins2 + "</div><p class='count-txt'>минут</p></div>" +
            "<div class='countbox-num'><div id='countbox-secs1' class='count-num'>" + secs1 + "</div><div id='countbox-secs2' class='count-num'>" + secs2 + "</div><p class='count-txt'>секунд</p></div>";

        document.getElementById("countbox").innerHTML = out;
        document.getElementById("countbox2").innerHTML = out;
        document.getElementById("countbox_mob").innerHTML = out;
        document.getElementById("countbox_mob2").innerHTML = out;
        setTimeout("CountBox()", 1);
    }

}

//month = --month;
dateFuture = new Date(year, month, day, hour, minute, sec);

jQuery(document).ready(function() {
    CountBox();
});