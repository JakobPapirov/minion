$(document).ready(function() {

    move()

    // Update time continously, every 10 minutes
        // 1000 = milliseconds
        // 60 = seconds
        // 10 = minutes
    var update = 1000 * 1 * 2;
    //var update = 1000 * 60 * 10;
        var refreshLifeProcess = setInterval(lifeProcess, update);

    function lifeProcess() {

        $(".progressbar-percent").css('width', '100%');
            var text = " in existence";

        $("#progressbar-seconds").text(lifeElapsed("seconds") + " seconds" + text);
        $("#progressbar-hours").text(lifeElapsed("hours") + " hours" + text);
        $("#progressbar-days").text(lifeElapsed("days") + " days" + text);
        $("#progressbar-weeks").text(lifeElapsed("weeks") + " weeks" + text);
        $("#progressbar-months").text(lifeElapsed("months") + " months" + text);
        $("#progressbar-years").text(lifeElapsed("years") + " years" + text);

    }
    
    function progressbar() {
      // Set the date we're counting down to
      var countDownDate = new Date("Sep 11, 2017 08:55:00").getTime();

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
          document.getElementById("progressbar-percent").style.width = 100 + "%";
          document.getElementById("progressbar-text").innerHTML = "100 %";
        }
    }

    function move() {

        $("#text-hidden").css("display", "block");

        var elem = document.getElementById("progressbar-percent");
        var width = 0;
        var id = setInterval(frame, 10);
        function frame() {
            if (width == 100) {
              clearInterval(id);
              $("#text-hidden").text("Uptime stats found:");
            } else {
              width++;
              elem.style.width = width + '%';
              $("#progressbar-text").text(width + " %");
            }
          }

    }

    function lifeElapsed(timePeriod) {
      
        // Get todays date and time
        var now = new Date().getTime();

        // Date of birth
        var dateOfBirth = new Date("Sep 11, 2017 08:55:00").getTime();

        // Calculate the time (hrs) elapsed between now an the date of birth
            // 1000 = milliseconds
            // 60 = seconds
            // 60 = minutes
            // 24 = hours
            // 7 = weeks
            // 30 = months
            // 365 = years
        var hoursElapsed = Math.floor((now - dateOfBirth) / (1000 * 60 * 60));

        // How to remove ',' from array; arr[0] didn't work?

        var daysElapsed = Math.floor(hoursElapsed / 24);

        var weeksElapsed = Math.floor(hoursElapsed / (7*24));

        var monthsElapsed = Math.floor(hoursElapsed / (24*30));

        var yearsElapsed = Math.floor(hoursElapsed / (24*365));

        //return lifeElapsed = [hoursElapsed, daysElapsed, monthsElapsed];

        if (timePeriod == "hours") {

            return hoursElapsed;

        } else if (timePeriod == "seconds") {

            return Math.floor((now - dateOfBirth) / 1000);

        } else if (timePeriod == "days") {

            return daysElapsed;

        } else if (timePeriod == "weeks") {

            return weeksElapsed;

        } else if (timePeriod == "months") {

            return monthsElapsed;

        } else if (timePeriod == "years") {

            return yearsElapsed;

        }

    }
});
