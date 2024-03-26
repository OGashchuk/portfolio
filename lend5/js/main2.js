$(document).ready(function(){


    //не трогать, это надо что бы работала корзина
    $(".woocommerce .item").each(function(){
        var prdId = $(this).find(".button").attr("data-id");
        $(this).attr("id", prdId);
    });



        var elOffset = $('#f1').offset().top;
    $(window).scroll(function(){
        if ($(window).scrollTop()>=elOffset-450){
            $('.infoWindow').addClass('active');
        } else {
            // $('infoWindow').removeClass('active');
        }
    });
    var itemsCount = 0;
    setTimeout(carusels,12000);
    function carusels () {
        if ($('.happy-buy-man .item-s').length > itemsCount) {
            $('.happy-buy-man .item-s').eq(itemsCount).addClass('active');
            setTimeout(carusels, 12000);
            setTimeout(function () {
                $('.happy-buy-man .item-s.active').removeClass('active');
            }, 5000);
            itemsCount++;
        }else{
            itemsCount =0;
        }
    }
    $('.parfumes .woocommerce').owlCarousel({
        items: 3,
        lazyLoad: true,
        slideBy: 3,
        nav: true
    });
    $("#owl-demo1").owlCarousel({
        items : 1,
        autoplay : false,
        autoplaySpeed:0,
        //autoplay : false,
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        nav:true,
        navText : false,
        loop : true,
        autoWidth : false,
        responsive : false,
        itemsScaleUp : false,
    });


    $('.catalog-item').click(function(event) {
        var h3 = $(this).siblings('h3').text();
        var h4 = $(this).siblings('h4').text();
        $('#popup2 h3').html(h3+'<br>'+h4);
        $('[name=your-title]').val(h3+' '+h4);
    });

    var options = {
        delegation: true,
        clearForm: true,
        resetForm: true,
        type: 'post',
        beforeSubmit: function() {
            $.fancybox.close();
        },
        success: function() {
            $.fancybox({href: "#popupThanks", type: 'inline'});
        },
        error: function() {
            $.fancybox({href: "#popupError", type: 'inline'});
        }
    }
    processTimer();
    processNoTimer();
$('.male-block .male').click(function(){
    $('.male-block li').removeClass('active');
    $(this).addClass('active');
    $(this).parents('.male-block').siblings('.item').css({'display':'none'});
    $(this).parents('.male-block').siblings('.item').each(function(index){
        if($(this).attr('data-male') == 'male') $(this).css({'display':'inline-block'});
    });
});
    $('.male-block .female').click(function(){
    $('.male-block li').removeClass('active');
    $(this).addClass('active');
    $(this).parents('.male-block').siblings('.item').css({'display':'none'});
    $(this).parents('.male-block').siblings('.item').each(function(index){
        if($(this).attr('data-male') == 'female') $(this).css({'display':'inline-block'});
    });
});
});


$( ".item1 .hover" ).click(function() {
    $(this).siblings('.hover_p').toggleClass('active');
    $(this).toggleClass('active');
    if($(this).siblings('.hover_p').hasClass('active'))
        $(this).siblings('.hover_p.active').animate({height: "show"},700);
    else
        $(this).siblings('.hover_p').animate({height: 'hide'},700);

});

$( ".infoWindow .close" ).click(function() {
    $(".infoWindow").removeClass('active');
    $(".infoWindow").addClass('none');

});
function baseName(str)
{
    var base = new String(str).substring(str.lastIndexOf('/') + 1);
    if(base.lastIndexOf(".") != -1)
        base = base.substring(0, base.lastIndexOf("."));
    return base;
}

$('input[type=file]').change(function() {
    var filename = $(this).val().replace("C:\\fakepath\\", "");
    if(filename == '') {
        filename = "(Не выбранa)";
    }
    var parent = $(this).parent().parent();
    $(parent).find('.fileName').html(filename);
});

function scrollToElement(element, offset) {
    $(element).click(function(e) {
        var elementClick = $(this).attr("href");
        var destination  = $(elementClick).offset().top;
        if(destination < 0) {destination = 0;}
        $('html, body').animate({scrollTop: destination - offset}, "slow");
        e.preventDefault();
    });
}
scrollToElement("a[href='#f1']",290);
scrollToElement("a[href='#f2']", 0);
scrollToElement("a[href='#f3']", 0);
scrollToElement("a[href='#f4']", 0);
scrollToElement("a[href='#muz']", 100);
scrollToElement("a[href='#zen']", 100);
// scrollToElement("a[href='.sale_block']", 230);