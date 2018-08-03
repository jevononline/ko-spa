
var ko=require('knockout'),
	template=require('./home.html');

function HomeViewModel(params){
	this.message = ko.observable('Welcome to ko-browserify!');
	
	this.doSomething=function() {
		this.message('You invoked doSomething() on the viewmodel.');
	}
}

module.exports={
	viewModel: HomeViewModel,
	template: template
}
