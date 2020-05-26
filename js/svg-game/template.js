$(document).ready(function() {

	var randomColor = Math.floor(Math.random()*16777215).toString(16);

	$("#start").css("fill", "#" + randomColor );

	$("#start").on("click", handler );

	function colorChange( rectID ) {

		/*
			Random color on click is now working, thanks to https://css-tricks.com/snippets/javascript/random-hex-color/
			Unknown why  css.("fill", "rgb(red, gree, blue") doesn't work
				//var red = Math.floor( Math.random() * 256);
				//var green = Math.floor( Math.random() * 256);
				//var blue = Math.floor( Math.random() * 256);
		*/
		var randomColor = Math.floor(Math.random()*16777215).toString(16);

		$("#" + rectID).css("fill", "#" + randomColor );
	}
});