$(document).ready(function() {

	var arr = [
		"button0",
		"button1",
		"button2",
		"button3",
		"button4"];
	const  comicSans = "Comic Sans"

	$("#button0").click(function() {
		$("*").css({"font-size": "30px"})
	});

	$("#button1").click(function() {
		$("*").css({"font-size": "12px"})
	});

	$("#button2").click(function() {
		$("*").css({"background-color": "green"})
	});

	$("#button3").click(function() {
		$("*").css({"font-family": "Comic Sans MS"})
	});

	$("#button4").click(function() {
		$("*").css({"display": "none"})
	});
	
	document.getElementById("button4").onclick = function() {goodbye()};

	function goodbye() {
		alert("Goodbye!")
	};

alert("script.js ready!")
});