$(document).ready(function () {
	$.getJSON('http://free.worldweatheronline.com/feed/weather.ashx?q=45233&format=json&num_of_days=2&key=5b0bef4cc7145805130803&callback=?', 
	function(json) {
		var currentCondition = json.data.current_condition[0].weatherDesc[0].value;
    	var conditionClass = currentCondition.replace(/\s/g, "");
    	var currentTemp = json.data.current_condition[0].temp_F;

		$("span.condition").addClass(conditionClass);
		$("span.condition").text(currentCondition);
		$("span.temperature").text(currentTemp);
	});
	
	$('h1.evTitle').each(function () {
	    if ($(this).text().length>55) {
	        $(this).text($(this).text().substring(0, 55).split(" ").slice(0, -1).join(" ") + "...");
	    }
	});
});
