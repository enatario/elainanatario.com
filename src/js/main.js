(function() {
	'use strict';

	$('.note').on('click', function(e) {
		$('.note--info').toggleClass("hidden");
      	e.preventDefault();
    });

})();