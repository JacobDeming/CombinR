//Your array of images goes here
var images = ["http://lorempixel.com/image_output/city-q-c-640-480-4.jpg","http://lorempixel.com/image_output/people-q-c-640-480-4.jpg","http://lorempixel.com/image_output/technics-q-c-640-480-1.jpg"];

//Count will keep track of the index of the currently displaying picture
var count = 0;

$("#start").click(startSlideshow);
$("#stop").click(stopSlideshow);
//Use jQuery to run "stopSlideshow" when you click the "stop" button




function displayImage (){
  $('#image-holder').html('<img src='+images[count]+ ' width="400px">');
}

function nextImage (){
  count++;
  $("#image-holder").html("<img src='https://files.slack.com/files-tmb/T0J8XK2Q3-F0NHM3SE8-3049f80a44/loading_360.png'>")
  setTimeout(displayImage,1000);
  if(count==images.length){
  	count=0;
  }

}
function startSlideshow (){
  counter=setInterval(nextImage,3000);

}
function stopSlideshow (){
  clearInterval(counter);

}


displayImage();