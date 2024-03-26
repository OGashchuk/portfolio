$(document).ready(function() {


    /* открываю и скрываю корзину */
    $('.cart-toggle').on('click', function() {
        $('.cart').addClass('active');
        $('.overlay').addClass('active');
        $('html').css('overflow', 'hidden');
    });
    /* скрываю корзину на оверлей и кнопку */
    $('.cart .close, .overlay, .continue_buy').click(function() {
        $('.overlay').removeClass('active');
        $('.cart').removeClass('active');
        $('html').css('overflow', 'auto');
    });

    /* Собираем корзину из cookies */
    if ($.cookie('cart_list')) {
        var ar_cart_list = $.cookie('cart_list');
        var total_cart = 0;
        var product;
        ar_cart_list = ar_cart_list.substring(0, ar_cart_list.length - 1);
        ar_cart_list = ar_cart_list.split(';');
        ar_cart_list.forEach(function(item, i, arr) {
            ar_product = item.split('-');
            if (ar_product.length == 3) {
                total_cart += ar_product[1] * ar_product[2];
                price = ar_product[1] * ar_product[2];
                product_wrap = $('#' + ar_product[0]);
                product_name = $('<div class="text"></div>').text(product_wrap.find('h3').text() + " " + product_wrap.find('h4').text());
                product_count = $('<div class=\"count_b\"><div class=\"count clearfix\"><button id=\"minus\" class=\"minus-bnt control\">-</button><input type=\"text\" min=\"1\" value=\"' + ar_product[1] + '\" maxlength=\"3\"><button id=\"plus\" class=\"plus-bnt control\">+</button></div></div>');
                product_price = $('<div class="price"><span data-price="' + ar_product[2] + '">' + price + '</span></div>');
                product_img = $('<div class="img">').append(product_wrap.find('img.wp-post-image').clone());
                product_del = $('<div class="delete"><span></span></div>');

                $(".cart_product_list")
                    .append($('<div class="cart_prod" data-product_id="' + ar_product[0] + '">')
                        .append(product_img)
                        .append(product_name)
                        .append(product_count)
                        .append(product_price)
                        .append(product_del)
                    );
            }
        });
        $('#count-val').text(ar_cart_list.length);
        $('#price-val, #cart_total').text(total_cart);
        if (ar_cart_list.length > 0)
            $('.cart .empty').hide();
        else
            $('.cart .empty').show();

        //Пересчитываем корзину в комментарий к заказу
        cartToComment();
    }

    /* Добавление товара в корзину */
    $('.woocommerce .item .cart-add').on('click', function(e) {
        e.preventDefault();
        count_list = 0;
        product_id = parseInt($(this).parent().attr('id'));
        cart_pos_left = $('.cart-toggle').offset().left;
        cart_pos_top = $('.cart-toggle').offset().top;
        img_pos_left = $(this).siblings('img').offset().left;
        img_pos_top = $(this).siblings('img').offset().top;
        img_clone = $(this).siblings('img');
        name_text = $(this).siblings('h3').text() + " " + $(this).siblings('h4').text();
        cart_count = parseInt($('#count-val').text());
        price_total = parseInt($('#price-val').text());
        price = parseInt($(this).siblings(".posa").find('.p2>span').text());
        $('#count-val').text(cart_count + 1);
        $('#price-val, #cart_total').text(price_total + price);

        product_name = $('<div class="text"></div>').text(name_text);
        product_count = $('<div class=\"count_b\"><div class=\"count clearfix\"><button id=\"minus\" class=\"minus-bnt control\">-</button><input type=\"text\" min=\"1\" value=\"1\" maxlength=\"3\"><button id=\"plus\" class=\"plus-bnt control\">+</button></div></div>');
        product_price = $('<div class="price"><span data-price="' + price + '">' + price + '</span></div>');
        product_img = $('<div class="img">').append($(img_clone).clone());
        product_del = $('<div class="delete"><span></span></div>');

        $(img_clone)
            .clone()
            .css({ 'max-width': '140px', 'height': 'auto', 'border-radius': '50%', 'position': 'absolute', 'z-index': '11100', top: img_pos_top, left: img_pos_left })
            .appendTo("body")
            .animate({
                opacity: 0.05,
                left: cart_pos_left,
                top: cart_pos_top,
                width: 20
            }, 500, function() {
                $(this).remove();
            });

        update_row = 0;
        $(".cart_product_list .cart_prod").each(function() {
            if ($(this).data('product_id') == product_id) {
                update_row = 1;
            }
        });

        if (update_row == 1) {
            input_count = $('[data-product_id=' + product_id + ']').find('.count input');
            price_val_up = $('[data-product_id=' + product_id + ']').find('.price span');
            input_count.val(parseInt(input_count.val()) + 1);
            price_val_up.text(parseInt(price_val_up.text()) + price);
        } else {
            $(".cart_product_list")
                .append($('<div class="cart_prod" data-product_id="' + product_id + '">')
                    .append(product_img)
                    .append(product_name)
                    .append(product_count)
                    .append(product_price)
                    .append(product_del)
                );
        }
        count_list = $('.cart_product_list').children().length;
        if (count_list > 0)
            $('.cart .empty').hide();
        else
            $('.cart .empty').show();

        //Пересчитываем корзину в комментарий к заказу
        cartToComment();
    });

    /* Удаление товара из корзины */
    $(document).on('click', '.cart_prod .delete', function() {
        count_list = 0;
        cart_count = parseInt($('#count-val').text());
        $('#count-val').text(cart_count - 1);
        price_total = parseInt($('#price-val').text());
        price = parseInt($(this).parent().find('.price span').text());
        $('#price-val, #cart_total').text(price_total - price);
        $(this).parent().remove();

        count_list = $('.cart_product_list').children().length;
        if (count_list > 0)
            $('.cart .empty').hide();
        else
            $('.cart .empty').show();

        //Пересчитываем корзину в комментарий к заказу
        cartToComment();
    });

    /* Очистка всей корзины */
    $('.clear_cart').on('click', function() {
        count_list = 0;
        if (confirm("Удалить все товары из корзины?")) {
            $('.cart_product_list').children().remove();
        }

        count_list = $('.cart_product_list').children().length;
        if (count_list > 0)
            $('.cart .empty').hide();
        else
            $('.cart .empty').show();

        $('#count-val').text(0);
        $('#price-val, #cart_total').text(0);
        $.removeCookie('cart_list');
        //Пересчитываем корзину в комментарий к заказу
        cartToComment();
    });

    /* Кнопки уменьшения кол-ва товара */
    $(document).on('click', '.count .minus-bnt', function() {
        count_inp = $(this).parent().find('input');
        count_inp_val = parseInt(count_inp.val());
        if (count_inp_val > 1) {
            count_inp.val(count_inp_val - 1);
            price_total = parseInt($('#price-val').text());
            price_product = $(this).parents('.cart_prod').find('.price span');
            price = parseInt(price_product.data('price'));
            price_product.text(parseInt(price_product.text()) - price);
            $('#price-val, #cart_total').text(price_total - price);

            //Пересчитываем корзину в комментарий к заказу
            cartToComment();
        }
    });

    /* Кнопки увеличения кол-ва товара */
    $(document).on('click', '.count .plus-bnt', function() {
        count_inp = $(this).parent().find('input');
        count_inp_val = parseInt(count_inp.val());
        count_inp.val(count_inp_val + 1);

        price_total = parseInt($('#price-val').text());
        price_product = $(this).parents('.cart_prod').find('.price span');
        price = parseInt(price_product.data('price'));
        price_product.text(parseInt(price_product.text()) + price);
        $('#price-val, #cart_total').text(price_total + price);

        //Пересчитываем корзину в комментарий к заказу
        cartToComment();
    });

    function cartToComment() {
        var cart_comment = '';
        var cart_comment2 = '';
        var all_count = 0;
        var prod_name;
        var all_price = $("#cart_total").text();
        /*var all_price = $("#cart_total").text();*/
        $(".cart_product_list .cart_prod").each(function() {
            product_id = parseInt($(this).data('product_id'));
            prod_name = $(this).find('.text').text();
            product_count = parseInt($(this).find('.count input').val());
            product_price = parseInt($(this).find('.price span').data('price'));
            cart_comment += product_id + '-' + product_count + '-' + product_price + ';';
            all_count += product_count;

            cart_comment2 += prod_name + '-' + product_count + 'шт' + '-' + product_price + ';<br>';
        });
        console.log(all_count);
        $('#order_form input[name=comment]').val(cart_comment2 + " <br><b>Общая цена:</b> " + all_price);
        $.cookie('cart_list', cart_comment, { expires: 100, path: '/' });
    }
});