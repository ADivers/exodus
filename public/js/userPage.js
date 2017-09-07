$(document).ready(function() {
	$('#btn-search').click(function(){
     $.Ajax()
	});

	$('.dropdown-item').click(function(){
    console.log($(this).attr('id') + ' was Clicked!')
	});
});