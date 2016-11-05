window.onload = function(){
    $('#stop').on('click', stop);
    $('#reset').on('click', reset);
    $('#start').on('click', start);
    
};

var time = 30;


function reset(){
  time = 30;
  $('#timer').html('00:30');
  $('.restart').hide();
  $('.questions').show();
 
}

function start(){
	console.log('starting');
  	counter = setInterval(count, 1000);
}

function stop(){
  	console.log('stopping');
  	clearInterval(counter);
}

function count(){
	time--;
	console.log(time);
	var converted = timeConverter(time);
	$('#timer').html(converted);
	if(time == 0){
		clearInterval(counter);
		$('.questions').hide();
		$('<div class="restart">Times up! Click the reset button to try again!</div>').appendTo('body');
	}
}

function timeConverter(t){
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

function endTimer(){

}

// reset();
// start();
// stop();
// count();