$(document).on("pagebeforeshow", "#home", function() {
	$.ajax({
		type: "POST",
		url: "details.xml",
		dataType: "xml",
		success: listDetails,
		error: function(e) {
			alert(e.status);
		}
	});
});

function listDetails(xml) {
	var  n=1;
	
	$(xml).find("category").each(function() {
		$(".category" + n).text($(this).attr("title"));
		n++;
	});
};

$(document).on("pagecreate", "#summary", function() {
	$("#cg-summary").html("");
	$.ajax({
		type: "POST",
		url: "details.xml",
		dataType: "xml",
		success: function(xml) {
			//parseXML(xml, "summary");
			altParseXML(xml, "summary");
		},
		error: function(e) {
			alert(e.status);
		}
	});
});

$(document).on("pagecreate", "#education", function() {
	$("#cg-education").html("");
	$.ajax({
		type: "POST",
		url: "details.xml",
		dataType: "xml",
		success: function(xml) {
			//parseXML (xml, "education");
			altParseXML (xml, "education");
		},
		error: function(e) {
			alert(e.status);
		}
	});
});

$(document).on("pagecreate", "#techprof", function() {
	$("#eg-techprof").html("");
	$.ajax({
		type: "POST",
		url: "details.xml",
		dataType: "xml",
		success: function(xml) {
			//parseXML (xml, "techprof");
			altParseXML (xml, "techprof");
		},
		error: function(e) {
			alert(e.status);
		}
	});
});

$(document).on("pagecreate", "#rlvntexp", function() {
	$("#eg-experience").html("");
	$.ajax({
		type: "POST",
		url: "details.xml",
		dataType: "xml",
		success: function(xml) {
			//parseXML (xml, "rlvntexp");
			altParseXML (xml, "rlvntexp");
		},
		error: function(e) {
			alert(e.status);
		}
	});
});

function parseXML (xml) {
	var x=1;
	
	$(xml).find("category").each(function() {
		$(".point" + x).text($(this).text());
		x++;
	});
};

function altParseXML (xml) {
	var x=1;
	
	$(xml).find("point").each(function() {
	
		if (".point" + x) {
			$(".point" + x).text($(this).text());
			$(".ttl_pnt" + x).text($(this).attr("title"));
			$(".company" + x).text($(this).attr("company"));
			$(".city" + x).text($(this).attr("city"));
		}
		x++;
	});
	
	/**
	$(xml).find("point").each(function() {
		if (".point" + x).attr("title") {
			$(".ttl_pnt" + y).text($(this).attr("title"));
		}
		y++;
	});
	**/
};