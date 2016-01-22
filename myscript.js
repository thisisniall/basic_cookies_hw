var incrementA = 0;
var incrementB = 0;
var incrementC = 0;

$(document).ready(function(){

	if (Cookies.get("incrementA") > 0){
	incrementA = Cookies.get("incrementA")
};

	if (Cookies.get("incrementB") > 0){
	incrementA = Cookies.get("incrementA")
};

	if (Cookies.get("incrementC") > 0){
	incrementA = Cookies.get("incrementA")
};


$("#aCount").text(Cookies.get("incrementA"));
$("#bCount").text(Cookies.get("incrementB"));
$("#cCount").text(Cookies.get("incrementC"));	

	$("#a").on('click', function(){
		incrementA = parseInt(incrementA) + 1
		console.log(incrementA);
		Cookies.set("incrementA", incrementA);
		$("#aCount").text(Cookies.get("incrementA"));
	});

	$("#b").on('click', function(){
		incrementB = parseInt(incrementB) + 1
		console.log(incrementB);
		Cookies.set("incrementB", incrementB);
		$("#bCount").text(Cookies.get("incrementB"));

	});

	$("#c").on('click', function(){
		incrementC = parseInt(incrementC) + 1
		console.log(incrementC);
		Cookies.set("incrementC", incrementC);
		$("#cCount").text(Cookies.get("incrementC"));

	});

	$("#guilty").on('click',function(){
		incrementA = 0
		incrementB = 0
		incrementC = 0
		Cookies.set("incrementA", incrementA);
		Cookies.set("incrementB", incrementB);
		Cookies.set("incrementC", incrementC);
		$("#aCount").text(Cookies.get("incrementA"));
		$("#bCount").text(Cookies.get("incrementB"));
		$("#cCount").text(Cookies.get("incrementC"));
		console.log("You no longer feel guilty.")
	})

});