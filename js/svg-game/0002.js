$(document).ready(function() {

	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	if (randomColor == "#FFFFFF") {
		randomColor = "d8d8d8"; // https://www.color-hex.com/color/d8d8d8
	}

	$("#start").css("fill", "#" + randomColor );

	var moveTimes = 10;
	var widthMax = 1000;

	var xMoveFrac = parseInt(widthMax / moveTimes); // = 100 px

	var counter = 0;
//	$("#start").on("click", { event: "counter" }, incrementalMovement );
	$("#start").on({
		click: function() {
			
			// if logic shouldn't be done here, rather downstream.
			// Probably because I don't want to deal with multiple return vals (requires and array in JS)
			if (counter <= 13) {
				counter = incrementalMovement(counter, xMoveFrac); // Makes the updated counter value available to global scope
			} else {
				counter = counter - counter - 1; // Restarts at xCoord = 0
				counter = incrementalMovement(counter, xMoveFrac);
			}
		}
	});

	function incrementalMovement(counter, xMoveFrac) {
		var rectID = $("rect").attr("id");
		colorChange( rectID );

		counter = parseInt( counter + 1 );
		console.log(counter);
		xMoveFrac = parseInt( xMoveFrac * counter ); // = 100

		//$("#start").attr('transform', 'translate(' + xMoveFrac + ' 0)');
		//console.log(xMoveFrac);

		$("#start").attr('transform', 'translate(' + xMoveFrac + ' 0)');

		return counter; // Else the counter is reset every time, 
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