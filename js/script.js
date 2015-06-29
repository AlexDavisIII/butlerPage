$(document).ready(function(){
	//variable holds height of placeholder (soon to be images) on page
	var imageHeight = $('img').height(); 
	console.log('hey!');
	
	$('#topHeader').hide();	
	

	document.getElementById('mainHeader').onscroll = function(){
		console.log('NOW it works');
	};

//uses a jquery plugin to use a Waypoint to...execute an action when a point has been reached.
	var example = new Waypoint({
		element: document.getElementById('exploreSection'),
		handler: function(){
			$('#topHeader').show();
		}//end of event handler
	});//end of waypoint example
});//when the document is loaded.
