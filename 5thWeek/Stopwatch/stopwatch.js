window.onload = function(){
  //click events are done for you:
  $('#lap').click(stopwatch.recordLap);
  $('#stop').click(stopwatch.stop);
  $('#reset').click(stopwatch.reset);
  $('#start').click(stopwatch.start);
};
var counter;

var stopwatch = {
  time:0,
  lap:1,
  reset:function(){
    stopwatch.time = 0;
    stopwatch.lap = 1;
    $("#display").html("00:00");
    $("#laps").html("");
  },

  start: function(){
    if(counter){clearInterval(counter);}
    counter=setInterval(stopwatch.count,1000);


  },
  stop: function(){
    clearInterval(counter);
  },
  recordLap: function(){
    var currentLap=stopwatch.timeConverter(stopwatch.time);
    $("#laps").append("<p>Lap "+stopwatch.lap+":   "+currentLap+"</p>");
    stopwatch.lap++;
  },
  count: function(){
    stopwatch.time++;
    var current=stopwatch.timeConverter(stopwatch.time);
    $("#display").html(current);
  },
  timeConverter: function(t){
    //This function is done. You do not need to touch it. It takes the current time in seconds and converts it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t/60);
    var seconds = t - (minutes * 60);
    if (seconds < 10){
      seconds = "0" + seconds;
    }
    if (minutes === 0){
      minutes = "00";
    } else if (minutes < 10){
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  }

};
