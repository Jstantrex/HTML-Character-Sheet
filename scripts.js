//Code to run on initialization

//functions
function updateStat(stat) {
	$("#"+stat+"-mod").text(Math.floor((parseInt($("#"+stat).val()) - 10) / 2));
	
	if(stat === 'dexterity') {
		$("#init").text($("#"+stat+"-mod").text());
	}
	
	if(stat === 'constitution') {
		$("#hp").text($("#"+stat+"-mod").text());
	}
}