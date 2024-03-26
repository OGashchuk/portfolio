var landing = {
	init: function() {
		this.formSubmit();
	},
	formSubmit: function () {
		$(".order-form").submit(function(event) {

			var $size = $(this).closest(".product-card").find(".product-card__size-number--active").text();

			if ($size.length > 0 && $size !== undefined) {
				$(this).find('input[name=comment]').val("Размер: " + $size);
			}

			var $prodId = $(this).closest(".product-card").find(".product-card__color--active").data("id");

			if ($prodId !== undefined) {
				$(this).find('input[name=products]').val($prodId);
			}

			console.log($(this).find('input[name=comment]').val());
		});
	},

}

$(document).ready(function() {
	landing.init();
});