$(document).ready(function() {

	var randomColor = Math.floor(Math.random()*16777215).toString(16);

	$("#start").css("fill", "#" + randomColor );

	$("#start").on("click", idChange );

	function idChange() {
		
		var rectID = $("rect").attr("id");

		if (rectID == "start") {
			
			colorChange( rectID );

			// Make the translations more dynamic
			var x = 1000;
			$("#start").attr('transform', 'translate(' + x + ' 0)');
			$("#start").attr("id", "top-right");
		} else if ( rectID == "top-right" ) {

			colorChange( rectID );

			$("#top-right").attr('transform', 'translate(1000 400)');
			$("#top-right").attr("id", "bottom-right");
		} else if ( rectID == "bottom-right" ) {

			colorChange( rectID );

			$("#bottom-right").attr('transform', 'translate(0 400)');
			$("#bottom-right").attr("id", "bottom-left");
		} else if ( rectID == "bottom-left" ) {

			colorChange( rectID );

			$("#bottom-left").attr('transform', 'translate(0 0)');
			$("#bottom-left").attr("id", "top-left");
		} else if ( rectID == "top-left" ) {

			colorChange( rectID );

			$("#top-left").attr('transform', 'translate(1000 0)');
			$("#top-left").attr("id", "top-right");
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