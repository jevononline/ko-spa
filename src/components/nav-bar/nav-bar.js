var ko=require('knockout'),
	template=require('./nav-bar.html');

function NavBarViewModel(params){
	this.route = params.route;
}

module.exports={
	viewModel: NavBarViewModel,
	template: template
}
