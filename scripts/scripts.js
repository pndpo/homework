$(document).ready(function() {

	$("#moreProgram1").click(function(e) {
		if ($("#moreProgram1").text() == "more") {
			$("#moreProgram1").text("less")
		} else {
			$("#moreProgram1").text("more");
		}
	});

	$(document).foundation();

});