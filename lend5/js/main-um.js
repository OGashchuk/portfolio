$(document).ready(function () {

   $('.order-form').submit(function (e) {
      var size = $(this).closest('.item__inner').find('.size.active').text();
      $(this).find('input[name=comment]').val(size);
      if ($(this).closest('.item').hasClass('multi-color')) {
         var id = $(this).closest('.item__inner').find('.color.active').data('id');
         $(this).find('input[name=products]').val(id);
      }
   });
});