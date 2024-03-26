$(document).ready(function() {
    $('.zascroll,.zazabtn,.s7btn ').click(function() { // ловим клик по ссылке с классом go_to


        $('html, body').animate({
            scrollTop: $('.section_3').offset().top
        }, 500); // анимируем скроолинг к элементу scroll_el

        return false; // выключаем стандартное действие
    });
    $('.olia1').click(function() { // ловим клик по ссылке с классом go_to


        $('html, body').animate({
            scrollTop: $('.section_4').offset().top
        }, 500); // анимируем скроолинг к элементу scroll_el

        return false; // выключаем стандартное действие
    });
    $('.olia2').click(function() { // ловим клик по ссылке с классом go_to


        $('html, body').animate({
            scrollTop: $('.section_8').offset().top
        }, 500); // анимируем скроолинг к элементу scroll_el

        return false; // выключаем стандартное действие
    });
    $('.olia3').click(function() { // ловим клик по ссылке с классом go_to


        $('html, body').animate({
            scrollTop: $('.section_5').offset().top
        }, 500); // анимируем скроолинг к элементу scroll_el

        return false; // выключаем стандартное действие
    });
    $('.olia4').click(function() { // ловим клик по ссылке с классом go_to


        $('html, body').animate({
            scrollTop: $('.section_3').offset().top
        }, 500); // анимируем скроолинг к элементу scroll_el

        return false; // выключаем стандартное действие
    });
    /*   
  $(".tel").keypress(function (e)  
    { 
     var phone = $(this).val();
     var value_str5 = phone.substr(0,5);
        	//alert(value_str5) ;	
    if(value_str5=='+7(89'){
              //$(this).css({'border':'1px solid red','color':'red'});
				$(this).val('+7(9');
      
			}  
    });
  $('.btn____').click( function(){ // аЛаОаВаИаМ аКаЛаИаК аПаО бббаЛаКаЕ б аКаЛаАббаОаМ go_to
	 
    var nomer =  $(this).attr('nomer');
       
	var phone = $('#lv-formLanding'+nomer+' .tel').val();
    var phone_length = phone.length;
    var value_str4 = phone.substr(0,4);
     var value_str5 = phone.substr(0,5);
    
   
   // alert(value_str4); 
    var error = [0];
			if(phone_length!=16){
              $('#lv-formLanding'+nomer+' .tel').css({'border':'1px solid red','color':'red'});
				error.push(1);
			} else {
				//$('#lv-formLanding'+nomer+' .tel').css({'border':'none','color':'#000'});
				//error.push(0);
				
			}
    		if(value_str4=='+7(8' || value_str4=='+7(1' || value_str4=='+7(2' || value_str4=='+7(3' || value_str4=='+7(5' || value_str4=='+7(6' || value_str4=='+7(0'  || value_str4=='+7(7'){
              $('#lv-formLanding'+nomer+' .tel').css({'border':'1px solid red','color':'red'});
				error.push(1);
			} else {
				//error.push(0);
				
			}
    if(value_str5=='+7(89'){
              $('#lv-formLanding'+nomer+' .tel').css({'border':'1px solid red','color':'red'});
				$('#lv-formLanding'+nomer+' .tel').val('+7(9');
      error.push(1);
			} else {
				//error.push(0);
				
			}
			if(phone=='+7(495)112-02-02'){
              $('#lv-formLanding'+nomer+' .tel').css({'border':'1px solid red','color':'red'});
				error.push(1);
			} else {
				//error.push(0);
				
			}
			
			
function charst(string, symbol)
{
  var count = 0;
  for (var i = 0; i < string.length; i ++)
  {
    if (string.charAt(i) == symbol)
    {
      count++;
    }
  }
  return count;
}
var count1 = charst(phone,"1");
    var count2 = charst(phone,"2");
    var count3 = charst(phone,"3");
    var count4 = charst(phone,"4");
    var count5 = charst(phone,"5");
    var count6 = charst(phone,"6");
    var count7 = charst(phone,"7");
    var count8 = charst(phone,"8");
    var count9 = charst(phone,"9");
    var count0 = charst(phone,"0");
    //alert(count1) ;

if(parseInt(count1)>5 || parseInt(count1)>5 || parseInt(count2)>5 || parseInt(count3)>5 || parseInt(count4)>5 || parseInt(count5)>5 || parseInt(count6)>5 || parseInt(count7)>5 || parseInt(count8)>5 || parseInt(count9)>5 || parseInt(count0)>5){
              $('#lv-formLanding'+nomer+' .tel').css({'border':'1px solid red','color':'red'});
				error.push(1);
			} else {
				//error.push(0);
				
			}
		
			
			var err=0;
			for (i in error){ 
				//console.log(error[i]);
				if (error[i]==1){
					err=1;
				}
			}
            if (err==0){ //return false; 
//alert('ok'); 
            }else {
                //alert('err'); 
               return false; 
            }
    
   
        
	    
    });
    
	*/
    /*$('.tovar_item').hover( function(){ 
	
       $(this).addClass('tovar_hover') ;
	   //$(this).find('.incart').text('Добавить в корзину') ;
	   
    },function(){ // ловим клик по ссылке с классом go_to
	
       $(this).removeClass('tovar_hover') ;
	     //$(this).find('.incart').text('Заказать') ;
    });*/

    $('.podrob,.bzak,.tovarimg img').click(function() {
        var id = $(this).attr('id_product');
        var name = $('.item' + id + ' .nametovar').text();
        var desc = $('.item' + id + ' .desc').text();
        var oldprice = $('.item' + id + ' .oldprlist strike').text();
        var price = $('.item' + id + ' .pricenum').text();
        var img = $('.item' + id + ' .bigimg img').attr('src');
        //alert(oldprice) ;
        $('.hpop').text(name);
        $('.popapvspl strike').text(oldprice);
        $('.popapvspl .pricetoday').text(price);
        $('.popleft img').attr('src', img);
        $('.popapvspl, .allfon').attr('style', 'display:block;');
        $('.popzakbtnbig').attr('id_product', id);
        $('.slesh').text('#' + id);
        $('.bezslesh').text(desc);
        $('#popform .bistro').val(id);
        $('#popform .bistro_price').val(price);



        return false;
    });
    $('.popapvspl .close, .allfon').click(function() {
        $('.popapvspl, .allfon').attr('style', 'display:none;');
    });

    $(window).scroll(function() { // задаем функцию при срабатывании события "scroll" на элементе <div>
        var topp = $(this).scrollTop();

        if (topp >= 66) {
            $('.cartpopolz_doin').addClass('fixedcart');
            $('.rightbltop').addClass('dodonfixedcart');
        } else {
            $('.cartpopolz_doin').removeClass('fixedcart');
            $('.rightbltop').removeClass('dodonfixedcart');
        }
        if (topp >= 210) {
            $('.oplpol1').addClass('fixedcart');
        } else {
            $('.oplpol1').removeClass('fixedcart');
        }
    })


    $('body').on('click', '.cartpopolz_doin .cartminiitem .plus', function() {

        $qnobj = $(this).prev('span').parent('div').prev('.qn_mini');
        var id = parseInt($(this).attr('id_product'));
        var q = parseInt($qnobj.text());
        //alert(q) ;
        $qnobj.text(q + 1);
        $.post(
            "/ajax.php", {
                id: id,
                q: q + 1,
                action: 'edit'

            },
            function onAjaxSuccess(data) {
                $('.rightbltop').html(data);
                $('.cartpopolz_doin').addClass('fixedcart');


            }
        )
        return false;
    });
    $('body').on('click', '.cartpopolz_doin .cartminiitem .minus', function() {

        $qnobj = $(this).parent('div').prev('.qn_mini');
        var id = parseInt($(this).attr('id_product'));
        var q = parseInt($qnobj.text());
        //alert(q) ;
        if (q > 1) {

            $qnobj.text(q - 1);
            $.post(
                "/ajax.php", {
                    id: id,
                    q: q - 1,
                    action: 'edit'

                },
                function onAjaxSuccess(data) {
                    $('.rightbltop').html(data);
                    $('.cartpopolz_doin').addClass('fixedcart');


                }
            )
        } else {
            $.post(
                "/ajax.php", {
                    id: id,
                    action: 'delete'

                },
                function onAjaxSuccess(data) {

                    $('.rightbltop').html(data);
                    $('.cartpopolz_doin').addClass('fixedcart');



                }
            )
        }

        return false;
    });
    $('.incart.add').click(function() {
        var id = parseInt($(this).attr('id_product'));
        var q = 1;
        $.post(
            "/ajax.php", {
                id: id,
                q: q,
                action: 'add'

            },
            function onAjaxSuccess(data) {
                $('.item' + id + ' .add').text("в корзине");
                $('.rightbltop').html(data);
                $('.cartpopolz_doin').addClass('fixedcart');


            }
        )

        return false;
    });
    $('.popzakbtnbig').click(function() {
        var id = parseInt($(this).attr('id_product'));
        var q = 1;
        $.post(
            "/ajax.php", {
                id: id,
                q: q,
                action: 'add'

            },
            function onAjaxSuccess(data) {
                $('.popzakbtnbig').text("Добавлен в корзину");
                $('.rightbltop').html(data);
                $('.cartpopolz_doin').addClass('fixedcart');


            }
        )

        return false;
    });

    /*$('.cartpopolz').on('click','.xx',function() { 
    	var id = parseInt($(this).attr('id_product'));
    	
    	$.post(
    				  "/ajax.php",
    				  {
    					id: id,
    					action:'delete'
    					 
    				  },function onAjaxSuccess(data){
    					
    					  $('.cartpopolz').html(data);
    					  
    					  
    					
    				  }
    				 )
    	
    	return false;	
    });*/
    //плюсминус корзина
    $('.cartblock').on('click', '.plusminuscart .plus', function() {

        $qnobj = $(this).prev('.qncart').find('span');
        var id = parseInt($(this).attr('id_product'));
        var q = parseInt($qnobj.text());
        //alert(q) ;
        $qnobj.text(q + 1);
        $.post(
            "/ajax_cart.php", {
                id: id,
                q: q + 1,
                action: 'edit'

            },
            function onAjaxSuccess(data) {
                $('.cartblock').html(data);



            }
        )
        return false;
    });
    $('.cartblock').on('click', '.plusminuscart .minus', function() {

        $qnobj = $(this).next('.qncart').find('span');
        var id = parseInt($(this).attr('id_product'));
        var q = parseInt($qnobj.text());

        /*if (q > 1) {
            //alert(q) ;
            $qnobj.text(q - 1);
            $.post(
                "/ajax_cart.php", {
                    id: id,
                    q: q - 1,
                    action: 'edit'

                },
                function onAjaxSuccess(data) {
                    $('.cartblock').html(data);



                }
            )
        } else {
            $.post(
                "/ajax_cart.php", {
                    id: id,
                    action: 'delete'

                },
                function onAjaxSuccess(data) {

                    $('.cartblock').html(data);



                }
            )
        }*/

        return false;
    });

    var counter = 54;

    if ($.cookie('cookie_counter')) {
        counter = $.cookie('cookie_counter');
    }
    $('.akckor span').text(counter);
    var time = 10000;
    setTimeout(function() {
        time = 15000
    }, 10000);
    setTimeout(function() {
        time = 17000
    }, 11000);
    setTimeout(function() {
        time = 5000
    }, 37000);

    function timeout() {


        setTimeout(function() {
            counter = counter - 1;
            if (counter <= 3) {
                return false;
            }
            $.cookie('cookie_counter', counter);
            $('.akckor span').text(counter);

            console.log(time);
            timeout();

        }, time);
    };
    timeout();

});