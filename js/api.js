https://api.instagram.com/v1/users/self/media/recent/?access_token=ACCESS-TOKEN
(function($){
	$('#instagram-btn').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		var data = {
			access_token: '1362124742.3ad74ca.6df307b8ac184c2d830f6bd7c2ac5644'
		};

		$.ajax({
			url: 'https://api.instagram.com/v1/users/self/',
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