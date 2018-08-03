var $=require('jquery'),
	ko=require('knockout'),
	SportItem=require('./SportItem'),
	template=require('./sports-list.html');

function SportsList(){
		var self=this;
		this.sportList = ko.observableArray();
		
		$.ajax({
			url: '/api/data',
			method: 'GET',
			cache: false,
			dataType: 'json',
			contentType: 'application/json'
		}).done(function(data){
			self.sportList(ko.utils.arrayMap(data,function(item){
				return new SportItem(item);
			}));
		});
}

module.exports={
	viewModel: SportsList,
	template: template
}