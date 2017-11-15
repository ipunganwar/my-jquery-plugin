(function ($) {
	$.fn.emailValidator = function () {
		const regx = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
		return regx.test(this.val())
		
	}
})(jQuery)
