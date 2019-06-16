
var input = document.getElementsByTagName('input'),
result = 0;

function checked(){
	result = 0;
	if ( $('#3quest1 input[type = radio]:checked')
		.val() == 2 ) {
		result++;
	}

	if ( $('#3quest2 input[type = radio]:checked')
		.val() == 1 ) {
		result++;
	}

	if ( $('#3quest3 input[type = radio]:checked')
		.val() == 2 ) {
		result++;
	}

	if ( $('#3quest4 input[type = radio]:checked')
		.val() == 3 ) {
		result++;
	}

	if ( $('#3quest5 input[type = radio]:checked')
		.val() == 1 ) {
		result++;
	}

	if ( $('#3quest6 input[type = radio]:checked')
		.val() == 2 ) {
		result++;
	}

	
}


$("#button3").click(function(){
	$(document).ready(function(){
		checked();

		//alert("selected: " + $('input[type = radio]:checked').val());

		$(".rel").text(result + '/6 балів');
	})
})




