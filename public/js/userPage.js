$(document).ready(function () {
	$('.delete-link').click(function (e) {
		e.preventDefault();

		var $this = $(this);
		var data = {
			id: $(this).attr('id')
		}
		var url = '/users/' + $this.attr('data')

		console.log(url);

		// $.post('/users', data)
		console.log($);

		$.ajax({
			type: "DELETE",
			url: url
		  })
		  .done(function() {
			document.location.reload();
		  });

	});
});