//enter refresh time in "minutes:seconds" Minutes should range from 0 to inifinity. Seconds should range from 0 to 59
var limit="0:10"

var parselimit=limit.split(":")
parselimit=parselimit[0]*60+parselimit[1]*1

var currentPosition = 0;
var slideWidth = 1920;
var slides;
var numberOfSlides;

function beginrefresh(){

	if (parselimit==1) {

	    // Determine new position
      		currentPosition = currentPosition+1;
		window.status="";00000

		if (currentPosition < numberOfSlides) {
      	      		// Move slideInner using margin-left
	      		$('#slideInner').animate({
        			'marginLeft' : slideWidth*(-currentPosition)
      				});
			parselimit=limit.split(":");
			parselimit=parselimit[0]*60+parselimit[1]*1;
			beginrefresh();
			}
		else {
			window.location.reload()
			}

	}
	else{
		parselimit-=1
		curmin=Math.floor(parselimit/60)
		cursec=parselimit%60
		if (curmin!=0) {
		curtime=curmin+" minutes and "+cursec+" seconds left until page refresh!"
		}
		else {
		curtime=cursec+" seconds left until page refresh!!"
		}
		window.status=curtime
		setTimeout("beginrefresh()",1000)
	}
}

$(document).ready(function(){

slides = $('.slide');
numberOfSlides = slides.length;


// Wrap all .slides with #slideInner div
slides
.wrapAll('<div id="slideInner"></div>')
// Float left to display horizontally, readjust .slides width
.css({
    'float' : 'left',
    'width' : slideWidth
});

// Set #slideInner width equal to total width of all slides
$('#slideInner').css('width', slideWidth * numberOfSlides);

beginrefresh()
});
