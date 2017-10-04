$(function() {
	var form = $('#formContact');
	var submit = $('#submit');
	var formMessages = $('#formMessages');

	$(submit).click(function(e) {
		e.preventDefault();
		var formData = $(form).serialize();

		$.ajax({
			type: 'POST',
			//url: $(form).attr('action'),
			url: '../assets/php/send.php',
			data: formData
		})
		.done(function(response) {
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');
			$(formMessages).text(response);

			$('#name').val('');
			$('#email').val('');
			$('#tel').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! Ha ocurrido un error, el formulario no ha sido enviado.');
			}
		});

	});

});
