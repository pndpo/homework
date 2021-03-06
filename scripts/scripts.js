$(document).ready(function() {

	// Mock functionality of tabs
	$('.tab-title').click(function(e) {
		var $dash = $('#tab-dashboard');
		var id = this.id
		if (id == 'tab-dashboard') {
			$('.main').removeClass('hidden');
		} else {
			$('.main').addClass('hidden');
		}
	});

	$('.add').click(function() {
		$('.new-program-form').removeClass('hidden')
	});

	$('.cancel').click(function() {
		$('.new-program-form').addClass('hidden')
	});

	// A little UI sugar for when users enable online scheduling.
	$('.switch').click(function(e) {
    if ($('.switch input:checked').length > 0){
      $('#onlineSchedulingStatus').text('On').css({'color':'grey', 'font-weight':'500'});
    } else {
      $('#onlineSchedulingStatus').text('Off').css({'color':'#bebeb5', 'font-weight':'300'});
    }
	});

	// more UI sugar; Shows name of program as title as it's being typed.
	$('#newProgramName').keyup(function(e){
		$('#formTitle').text($('#newProgramName').val());
		if ($('#newProgramName').val() == 0) {
			$('#formTitle').text("New program");
		}
	});

	$("#submitProgram").click(function(e) {
		e.preventDefault()
		console.log($('#newProgramForm').serializeArray());
	});

	$(document).foundation();

});