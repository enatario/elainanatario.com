(function() {
	'use strict';

	$('.note--tag').on('click', function(e) {
		$('.note').toggleClass("slide-hide");
      	e.preventDefault();
    });

})();