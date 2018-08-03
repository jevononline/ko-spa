var ko=require('knockout');

function SportItem(params){
	this.weight = ko.observable(params.weight);
	this.date = ko.observable(params.date);
	this.training = ko.observable(params.training);
	this.walking = ko.observable(params.walking);
}

module.exports=SportItem;