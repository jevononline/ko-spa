var ko=require('knockout'),
	template=require('./hello-world.html');

function HelloWorld(params){
	this.name = ko.observable(params.name);
}

module.exports= {
	viewModel: HelloWorld,
	template: template
}