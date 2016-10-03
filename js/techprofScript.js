$("#techprof").ready(function() {
	var resetTechPage = $("#exitTechPage");
	
	var languDiv = $("#languDiv");
	var languages = $("#languages");
	
	var middlewaresDiv = $("#middlewaresDiv");
	var middlewares = $("#middlewares");
	
	var webdevDiv = $("#webdevDiv");
	var webdev = $("#webdev");
	
	var toolsDiv = $("#toolsDiv");
	var tools = $("#tools");
	
	// This Click Function checks for Visible Containers when returning Home
	$(resetTechPage).click(function() {
		// ListView container for Language
		if ((languages).is(":visible")) {
			languDiv.collapsible("collapse");
		}
		
		if ((middlewares).is(":visible")) {
			middlewaresDiv.collapsible("collapse");
		}
		
		if ((webdev).is(":visible")) {
			webdevDiv.collapsible("collapse");
		}
		
		if ((tools).is(":visible")) {
			toolsDiv.collapsible("collapse");
		}
	});
});