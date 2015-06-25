$(document).ready(function(){
	//variable holds height of placeholder (soon to be images) on page
	var imageHeight = $('.placeholder').height(); 
	console.log(imageHeight);

	var fullImageHeight = imageHeight + 'px';
    //sets the content holder container to the height of the image it holds
	$('.contentHolder').css('height', fullImageHeight); 
	console.log(fullImageHeight);
});//when the document is loaded.
