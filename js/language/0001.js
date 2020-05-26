$(document).ready(function() {

	$("#letter").on("click", letterCycle );

	function letterCycle() {
		
		$("#letter").html('<h1>' + String.fromCharCode( 178 ) + '</h1>');
	}

	var alfabet = "абвдгеëжзийклмнопрстуфхцчшщъыьэюя";
	//[...alfabet].forEach(c => console.log(c));
	for (const c of alfabet) {
    	console.log(c)
	}
	//var alfabet = "abcdefgh";
	// https://stackoverflow.com/questions/1966476/how-can-i-process-each-letter-of-text-using-javascript
	//matters(alfabet);
	function matters(alfabet) {
  		for (var i = 0; i < alfabet.length; i++) {
    	console.log( alfabet.charAt(i) );
  }
}
});