'use strict';

var startTime;
var eventSent;	// so we only track timing for first click

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	startTime = new Date().getTime();
	eventSent = false;

	$(".likeBtn").click(function () {
	  ga("send", "event", "like", "click");

	  if (!eventSent) {
	  	var timeSpent = endTime - startTime;
	  	ga('send', 'timing', 'Like', 'First Like', timeSpent);
	  	eventSent = true;
	  }
	});


}