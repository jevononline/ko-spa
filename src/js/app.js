var $=jQuery=require('jquery');
	ko=require('knockout'),
	router=require('./Router'),
	NavBar=require('../components/nav-bar/nav-bar'),
	HomePage=require('../components/home-page/home'),
	HelloWorld=require('../components/hello-world/hello-world'),
	DiscountWidget=require('../components/discount-widget/discount-widget'),
	SportsList=require('../components/sports-list/sports-list'),
	AboutPage=require('../components/about-page/about.html');

ko.components.register("nav-bar", NavBar);
ko.components.register("home-page", HomePage);
ko.components.register("hello-world", HelloWorld);
ko.components.register("discount-widget", DiscountWidget);
ko.components.register("sports-list", SportsList);
ko.components.register("about-page", {template: AboutPage});

ko.applyBindings({ route: router.currentRoute });