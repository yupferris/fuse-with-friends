var Observable = require("FuseJS/Observable");

var categories = Observable();
var shoes = Observable();

function fetchCategories() {
	fetch("http://127.0.0.1:6502/categories").then(function(response) {
		if (!response.ok) {
			throw "Response not OK";
		}
		return response.json();
	}).then(function(data) {
		categories.replaceAll(data);
	}).catch(function(error) {
		console.log("Couldn't fetch categories: " + err);
	});
}

function fetchShoes() {
	fetch("http://127.0.0.1:6502/shoes").then(function(response) {
		if (!response.ok) {
			throw "Response not OK";
		}
		return response.json();
	}).then(function(data) {
		shoes.replaceAll(data);
	}).catch(function(error) {
		console.log("Couldn't fetch shoes: " + err);
	});
}

module.exports = {
	categories: categories,
	shoes: shoes,

	fetchCategories: fetchCategories,
	fetchShoes: fetchShoes
};