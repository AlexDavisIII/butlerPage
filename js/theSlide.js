/*
//hide the butlerHistory and butlerMission sections!
$('#butlerTest').hide();
var paragraphElementNum = 0; //set paragraph value to first in explore section (eq(0))

//reveal slide of only those with class "chosen"
$('#explorePage p:first-child').addClass('chosen');

$('#explorePage').on('click', function(){
	var countOfExploreSection = $('#explorePage p').length;

	//if the end of the section has been reached
	if(paragraphElementNum >= countOfExploreSection-1){
			console.log('paragraph number: ' + paragraphElementNum);	
			console.log('count number: ' + countOfExploreSection);	
			$('#explorePage p').removeClass('chosen');
			paragraphElementNum = 0; //reset the value of the paragraph element
			$('#explorePage p').eq(paragraphElementNum).addClass('chosen');
			$('#explorePage p').hide();
			$('#explorePage p.chosen').show();
	}else if(paragraphElementNum < countOfExploreSection-1){
			paragraphElementNum++;
			//remove class chosen from the current paragraph element
			$('#explorePage p').removeClass('chosen');
			//add class to the next element (paragraphElement++)
			$('#explorePage p').eq(paragraphElementNum).addClass('chosen');
			//show the paragraph with class chosen	
			$('#explorePage p').hide();
			$('#explorePage p.chosen').show();
			console.log('the paragraph number is: '+ paragraphElementNum);
	}
});
*/

$(document).foundation();	

//Initalize Slick
$(document).ready(function(){
$('.slickSlider').slick({
		autoplay: true, 
		autoplaySpeed: 4000,
		arrows: true,
		dots: true, 
		draggable: true,
		mobileFirst: true 
}).delay(114500);					
});

