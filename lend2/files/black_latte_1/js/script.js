$(function() {

    $('[name="country"]').on('change', function() {
        var geoKey = $(this).find('option:selected').val();
        var data = $jsonData.prices[geoKey];
        var price = data.price;
        var oldPrice = data.old_price;
        var currency = data.currency;
        $("[value = " + geoKey + "]").attr("selected", true).siblings().attr('selected', false);

        $('.price_land_s1').text(price);
        $('.price_land_s2').text(oldPrice);
        $('.price_land_curr').text(currency);
    });

    $('.toform').click(function() {
        $("html, body").animate({
            scrollTop: $("form").offset().top - 300
        }, 1000);
        return false;
    });
});

// дата окончания акции
var year = 2222;
var month = 4;
var day = 4;
var hour = 0;
var min = 0;
var sec = 0;

dateFuture = new Date(year, month - 1, day, hour, min, sec);

function GetCount() {
    dateNow = new Date();
    amount = dateFuture.getTime() - dateNow.getTime() + 5;
    delete dateNow;
    if (amount < 0) {
        out = "<div>00</div><p class='dots'>:</p><div>00</div><p class='dots'>:</p><div>00</div>";
        document.getElementById('timer').innerHTML = out;
    } else {
        days = 0;
        hours = 0;
        mins = 0;
        secs = 0;
        out = "";
        amount = Math.floor(amount / 1000);
        days = Math.floor(amount / 86400);
        amount = amount % 86400;
        hours = Math.floor(amount / 3600);
        amount = amount % 3600;
        mins = Math.floor(amount / 60);
        amount = amount % 60;
        secs = Math.floor(amount);
        if (days < 10) days = '0' + days;
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        out = "<div>" + hours + "</div>" + "<p class='dots'>:</p>" + "<div>" + mins + "</div>" + "<p class='dots'>:</p>" + "<div>" + secs + "</div>";
        document.getElementById('timer').innerHTML = out;
        setTimeout("GetCount()", 1000);
    }
}
$(document).ready(function() {
    GetCount();
});