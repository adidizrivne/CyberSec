var input = document.getElementsByTagName('input'),
result = 0;

function checked(){
	result = 0;
	if ( $('#quest1 input[type = radio]:checked')
		.val() == 2 ) {
		result++;
	}

	if ( $('#quest2 input[type = radio]:checked')
		.val() == 1 ) {
		result++;
	}

	if ( $('#quest3 input[type = radio]:checked')
		.val() == 2 ) {
		result++;
	}

	if ( $('#quest4 input[type = radio]:checked')
		.val() == 3 ) {
		result++;
	}

	if ( $('#quest5 input[type = radio]:checked')
		.val() == 1 ) {
		result++;
	}

	if ( $('#quest6 input[type = radio]:checked')
		.val() == 2 ) {
		result++;
	}

	if ( $('#quest7 input[type = radio]:checked')
		.val() == 2 ) {
		result++;
	}

	if ( $('#quest8 input[type = radio]:checked')
		.val() == 2 ) {
		result++;
	}
}

$("#button").click(function(){
	$(document).ready(function(){
		checked();
		$(".bal").text(result + '/8 балів');
	})
})