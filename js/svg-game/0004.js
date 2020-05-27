$(document).ready(function() {

	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	if (randomColor == "#FFFFFF") {
		randomColor = "d8d8d8"; // https://www.color-hex.com/color/d8d8d8
	}

	$("#start").css("fill", "#" + randomColor );

	var widthMax = 1000; // Not used atm, if block exceeds the limit then, so be it.

	var unitMin = 1; // smallest increment 1px

	var mainCounter = 0; // Start at 0
	var xCounter = 0; // Start at 0
	var yCounter = 0; // Start at 0

	// The main interaction block
	$(document).keydown(function(objEvent) {
		// https://www.youtube.com/watch?v=A9bS_7gxZHc
			//(objEvent) ? keycode = objEvent.keycode : keycode = objEvent.originalEvent.key; Could be used instead, but I'm not comfortable with it.
		// if-block stores the acutal named key pressed (not the character code) in variable
			// I figured out a better way than the video via the console log

		if (objEvent == null) {
			var keycode = event.keyCode;
		} else {
			var keycode = objEvent.originalEvent.key;
		}
		
		// The action logic block
		if (keycode == "ArrowRight") {

			xCounter = arrowRight( unitMin, xCounter, yCounter );
		} else if (keycode == "ArrowLeft") {

			xCounter = arrowLeft( unitMin, xCounter, yCounter );
		} else if (keycode == "ArrowDown") {
			
			objEvent.preventDefault();
			yCounter = arrowDown( unitMin, xCounter, yCounter );
		} else if (keycode == "ArrowUp") {
			
			yCounter = arrowUp( unitMin, xCounter, yCounter );
		}
	});
	/* PSEUDOCODE was pretty much spot on!
		one main counter
		one x counter
		one y counter
		on left (x-1), on right (x+1)
		the x constant is 1
		the y constant is 1
	*/

	function arrowRight( unitMin, xCounter, yCounter ) {

		xCounter = xCounter + unitMin; // Increments by 1
		let xMove = unitMin * xCounter; // Calculates the new "coordinates" relative to start (0 0)
		let yMove = unitMin * yCounter; // Is the same as last calculated via a up/down press

		$("#start").attr('transform', 'translate(' + xMove + ' ' + yMove + ')');

		return xCounter;
	}

	function arrowLeft( unitMin, xCounter, yCounter ) {
		
		xCounter = xCounter - unitMin;
		let xMove = unitMin * xCounter;
		let yMove = unitMin * yCounter;

		$("#start").attr('transform', 'translate(' + xMove + ' ' + yMove + ')');

		return xCounter;
	}

	function arrowDown( unitMin, xCounter, yCounter ) {
		
		yCounter = yCounter + unitMin;
		let xMove = unitMin * xCounter;
		let yMove = unitMin * yCounter;

		$("#start").attr('transform', 'translate(' + xMove + ' ' + yMove + ')');

		return yCounter;
	}

	function arrowUp( unitMin, xCounter, yCounter ) {
		
		yCounter = yCounter - unitMin;
		let xMove = unitMin * xCounter;
		let yMove = unitMin * yCounter;

		$("#start").attr('transform', 'translate(' + xMove + ' ' + yMove + ')');

		return yCounter;
	}
});