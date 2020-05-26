$(document).ready(function() {

	var randomColor = Math.floor(Math.random()*16777215).toString(16);

	$("#top").css("fill", "#" + randomColor );

	$("#top").on("click", upDown );

	function upDown() {

		// Add perhaps svg.child instead of circle/rectangle directly
		var rectID = $("circle").attr("id");

		if (rectID == "top") {

			colorChange( rectID );

			$("#top").attr('transform', 'translate(0 200)');
			$("#top").attr("id", "bottom");
		} else {

			colorChange( rectID );

			$("#bottom").attr('transform', 'translate(0 0)');
			$("#bottom").attr("id", "top");
		}
	}

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