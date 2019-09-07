$(document).ready(function() {
	$("#image01-01").mouseover(function() {
		$(this).css({
			"background-color": "pink",
			"font-size": "14px"
		});
	});
	$("#image01-01").mouseout(function() {
		$(this).css({
			"background-color": "white",
			"font-size": "12px"
		});
	});
});

function denglu() {
	window.location.href = "denglu.html";
}

function register() {
	window.location.href = "register.html";
}

function shouye() {
	window.location.href = "index.html";
}

function gouwuche() {
	window.location.href = "gouwuche.html";
}

function cs() {
	window.location.href = "cs.html";
}

function page01() {
	window.location.href = "index.html";
}

function page02() {
	window.location.href = "index02.html";
}

function page03() {
	window.location.href = "index03.html";
}

function pageone04() {
	window.location.href = "index02.html";
}

var textpage = [1, 2, 3];
document.getElementById("textpage");

function yes() {
	if(textpage == 1) {
		window.location.href = "index.html"
	} else {

	}
}