https://api.instagram.com/v1/users/self/media/recent/?access_token=ACCESS-TOKEN
(function($){
	$('#instagram-btn').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		var data = {
			access_token: '1923219865.c76a11c.415d24d956454656a7cccea6570f58bb'
		};

		$.ajax({
			url: 'https://api.instagram.com/v1/users/self/media/recent/',
			type: 'GET',
			crossDomain: true,
		    dataType: 'jsonp',
			data: data,
			success: function(data) {
				console.log(data.caption.text);
			}
		});
	});
})(jQuery);