var ko=require('knockout'),
	template=require('./discount-widget.html');

function DiscountWidget(params){
	this.logo = ko.observable(params.logo);
	this.netPrice = ko.observable();
	this.discountPercent = ko.observable();
	this.result = ko.observable();
	
	this.calculate=function() {
		var netPrice = parseInt(this.netPrice());
		var discount = parseInt(this.discountPercent());
		var discountDelta = (netPrice / 100) * discount;

		this.result(netPrice - discountDelta);
	}
}

module.exports={
	viewModel: DiscountWidget,
	template: template
}