
var input = document.getElementsByTagName('input'),
result = 0;

function checked(){
	result = 0;
	if ( $('#2quest1 input[type = radio]:checked')
		.val() == 2 ) {
		result++;
	}

	if ( $('#2quest2 input[type = radio]:checked')
		.val() == 1 ) {
		result++;
	}

	if ( $('#2quest3 input[type = radio]:checked')
		.val() == 2 ) {
		result++;
	}

	if ( $('#2quest4 input[type = radio]:checked')
		.val() == 3 ) {
		result++;
	}

	if ( $('#2quest5 input[type = radio]:checked')
		.val() == 1 ) {
		result++;
	}

	if ( $('#2quest6 input[type = radio]:checked')
		.val() == 2 ) {
		result++;
	}

	if ( $('#2quest7 input[type = radio]:checked')
		.val() == 2 ) {
		result++;
	}

	if ( $('#2quest8 input[type = radio]:checked')
		.val() == 3 ) {
		result++;
	}

	if ( $('#2quest9 input[type = radio]:checked')
	 	.val() == 1 ) {
	 	result++;
	 }

	 if ( $('#2quest10 input[type = radio]:checked')
	 	.val() == 4 ) {
	 	result++;
	 }

	 if ( $('#2quest11 input[type = radio]:checked')
	 	.val() == 2 ) {
	 	result++;
	 }

	 if ( $('#2quest12 input[type = radio]:checked')
	 	.val() == 3 ) {
	 	result++;
	 }
}


$("#button2").click(function(){
	$(document).ready(function(){
		checked();

		//alert("selected: " + $('input[type = radio]:checked').val());

		$(".rez").text(result + '/12 балів');
	})
})




