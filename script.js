$(document).ready(function() {

	var arr = [
		"biggerBtn",
		"smallerBtn",
		"colorBtn",
		"fontBtn",
		"displayBtn"];
	var color = "green";
	var display = "none";
	var font = "Comic Sans MS";
	var fontFallback = "cursive";
	var fontSize = parseInt($("*").css("font-size"));
	var serif = "sans-serif";


	$("#biggerBtn").click(function() {
		fontSize+=2;
		$("*").css({"font-size": fontSize + "px"});
		console.log("My new font-size is " + fontSize  + "!");
	});

	$("#smallerBtn").click(function() {
		fontSize-=2;
		$("*").css({"font-size": fontSize + "px"});
		console.log("My new font-size is " + fontSize  + "!");
	});

	$("#colorBtn").click(function() {
		$("*").css({"background-color": color});
	});

	$("#fontBtn").click(function() {
		$("*").css({"font-family": font, fontFallback, serif});
	});

	$("#displayBtn").click(function() {
		$("*").css({"display": display});
	});
	
	document.getElementById("displayBtn").onclick = function() {goodbye()};

	function goodbye() {
		alert("Goodbye!");
	};

});