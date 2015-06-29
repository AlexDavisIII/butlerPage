$(document).ready(function(){
	//variable holds height of placeholder (soon to be images) on page
	var imageHeight = $('img').height(); 
	console.log('hey!');

	//hides the topHeader (the stickied header) immediately after the page is finished loading
	$('#topHeader').hide();	

//uses a jquery plugin to use a Waypoint to...execute an action when a point has been reached.
	var removeTopHeader = new Waypoint({
		element: document.getElementById('endTarget'),
		handler: function(){
			$('#topNavigation').show('fast');
			$('#topHeader').slideUp('fast');
		}
	});

	var showTopHeader = new Waypoint({
		element: document.getElementById('exploreSection'),
		handler: function(){
			$('#topHeader').slideDown();
			$('#topNavigation').hide('fast');
		}//end of event handler
	});//end of waypoint example
});//when the document is loaded.
