var Observable = require("FuseJS/Observable");

var categories = Observable();
var shoes = Observable();

// Fetch categories
fetch("http://127.0.0.1:6502/categories").then(function(response) {
	return response.json();
}).then(function(data) {
	categories.replaceAll(data);
});

// Fetch shoes
fetch("http://127.0.0.1:6502/shoes").then(function(response) {
	return response.json();
}).then(function(data) {
	shoes.replaceAll(data);
});

function gotoHome() {
	router.goto("home");
}

function pushHome() {
	router.push("home");
}

function pushDetail() {
	router.push("detail");
}

function gotoDetail() {
	router.goto("detail");
}

function pushCart() {
	router.push("cart");
}

function gotoCart() {
	router.goto("cart");
}

function goBack() {
	router.goBack();
}

module.exports = {
	categories: categories,
	shoes: shoes,

	gotoHome: gotoHome,
	pushHome: pushHome,
	gotoDetail: gotoDetail,
	pushDetail: pushDetail,
	gotoCart: gotoCart,
	pushCart: pushCart,
	goBack: goBack
};