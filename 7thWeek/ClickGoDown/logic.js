// Link to Firebase
var clickData = new Firebase("https://sweltering-heat-7328.firebaseio.com/");

// Set Initial Counter 
var initialValue = 100;
var clickCounter = initialValue;	

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
clickData.on("value",function(snapshot){
		console.log(snapshot.val());
		$("#ClickValue").html(snapshot.val().clickCount);
		clickCounter=snapshot.val().clickCount;
	},function(errorObject){
		console.log("The read failed: "+errorObject.code);
	})

// Whenever a user clicks the click button
$("#clickButton").on("click", function() {
	clickCounter--;
	clickData.set({
		clickCount: clickCounter});
	$("#ClickValue").html(clickCounter);
});

// Whenever a user clicks the restart button
$("#restartButton").on("click", function() {
	clickCounter=initialValue;
	clickData.set({
		clickCount: clickCounter});
	$("#ClickValue").html(clickCounter);
});

