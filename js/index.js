$(function () {

	$('#buttonShowHide').click(function () {
		$('p.box').slideToggle();
		if ($(this).text() == 'Hide') {
			$(this).text('Show');
		}
		else {
			$(this).text('Hide');
		}

	});


	$("#btnCalculate").on('click', function () {
		var height = $('#height').val();
		var weight = $('#weight').val();

		if (height > 2) {
			$('#result').text('Height is invalid');
		}
		else {
			var result = weight / Math.pow(height, 2);
			var output = Math.round(result * 100) / 100
			var stringResult = "";

			if (output < 15) {
				stringResult = "Very severely underweight";
				body = 0;
			} else if (output < 16) {
				stringResult = "Severely underweight";
				body = 0;

			} else if (output < 18.5) {
				stringResult = "Underweight";
				body = 0;
			} else if (output < 25) {

				stringResult = "Normal (healthy weight)";
				body = 1;
			} else if (output < 30) {
				stringResult = "Overweight";
				body = 2;
			} else if (output < 35) {
				stringResult = "Obese Class I (Moderately obese)";
				body = 2;
			} else if (output < 40) {
				stringResult = "Obese Class II (Severely obese)";
				body = 2;
			} else if (output > 40) {
				stringResult = "Obese Class III (Very Severely obese)";
				body = 2;

			}
			$('#result').text(output + ' ' + stringResult);
		}



	});
});
