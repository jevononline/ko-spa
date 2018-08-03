var ko=require('knockout'),
	crossroads=require('crossroads'),
	hasher=require('hasher');


function Router(config){	
	var self=this;
	this.currentRoute = ko.observable({});
	ko.utils.arrayForEach(config.routes, function(route){
		crossroads.addRoute(route.url, function(requestParams){
			self.currentRoute(ko.utils.extend(requestParams, route.params));
		});
	});
	this.activateCrossroads=function() {
		function parseHash(newHash, oldHash) { crossroads.parse(newHash); }
        crossroads.normalizeFn = crossroads.NORM_AS_OBJECT;
        hasher.initialized.add(parseHash);
        hasher.changed.add(parseHash);
        hasher.init();
    }
	this.activateCrossroads();
}

module.exports=new Router({
	routes: [
		{ url: '',          params: { page: 'home-page' } },
		{ url: 'hello', 	params: { page: 'hello-world', name: 'Frank Wiermann'} },
		{ url: 'discount',  params: { page: 'discount-widget', logo: 'E-Shop' } },
		{ url: 'sports-list', params: { page: 'sports-list' } },
		{ url: 'about',  	params: { page: 'about-page' } }
	]
});