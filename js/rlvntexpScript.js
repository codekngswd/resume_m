$("#rlvntexp").ready(function() {
	 var resetExpPage = $("#exitExpPage");
	 
	 var jobOneDiv = $("#jobOneDiv");
	 var jobOne = $("#jobOne");
	 
	 var jobTwoDiv = $("#jobTwoDiv");
	 var jobTwo = $("#jobTwo");
	 
	 // This Click Function checks for Visible Containers when returning Home
	 $(exitExpPage).click(function() {
		// ListView container for Job One
		if ((jobOne).is(":visible")) {
			jobOneDiv.collapsible("collapse");
		}
		
		// ListView container for Job One
		if ((jobTwo).is(":visible")) {
			jobTwoDiv.collapsible("collapse");
		}
	 });
});