// Set the date we're counting down to
var countDownDate = new Date("Sep 6, 2017 15:40:00").getTime();

// Update the count down every day (1 day = 86400 seconds)
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Calculate the days remaining between now an the count down date
  var daysRemaining = Math.floor((countDownDate - now) / (1000 * 60 * 60 * 24));

  // Variables
  var weeksTotal = 40;
  var daysTotal = weeksTotal * 7;
  
  // Calculate number of days elapsed 
  var daysElapsed = daysTotal - daysRemaining;

  // Calculate the elapsed percentage, rounding down
  var percent = Math.floor((daysElapsed / daysTotal) * 100);

  // Display the result in the element with id="progressbar-percent"
  // Also, change the visible text accordingly
  document.getElementById("progressbar-percent").style.width = percent + "%";
  document.getElementById("progressbar-text").innerHTML = percent + " %";

  // If the count down is finished, write some text
  if (daysRemaining < 0) {
    clearInterval(x);
    document.getElementById("progressbar-percent").style.width = percent + "%";
    document.getElementById("progressbar-text").innerHTML = "Baby is due!";
  }
}, 86400);