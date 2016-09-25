var pixel = 50;

$(document).ready(function(){	

	drawPad(pixel);
	console.log(pixel * pixel);
});

function drawPad(pixel) {
	for (var i = 0; i < (pixel * pixel); i++){
		$('.pad').append("<div class='pixel'></div>")
	}

	$('.pixel').mouseenter(function(){
		$(this).css('background-color', 'black')
	})

	$('.clear').click(function(){
		$('.pixel').css('background-color', 'gray')
	})

	$('.size').click(function(){
		var pixel = prompt('Please enter a grid size', 'Default is 50');
		$('.pixel').css('background-color', 'gray');
		drawPad(pixel);
	})


	var width = ($(".row").width())/ pixel;  
	$(".pixel").css({"width":width ,"height":width});
}