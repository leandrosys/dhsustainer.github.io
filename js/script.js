(function($){
	$('.nav-portfolio ul li a').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		var item;
		item = $(this).data('class');
		$('.item').hide();
		$(item).fadeIn();
	});
})(jQuery)