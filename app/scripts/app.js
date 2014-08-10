'use strict';



angular
  .module('repaintApp', [
    'ngCookies',
    'ngResource',
    'ngTouch',
		'ngRoute'
  ]);

angular.module('repaintApp')
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/main', {templateUrl: '/views/main.html', controller: 'MainCtrl'})
//			.when('/docs/:id', {templateUrl: function(id) { return '/docs/' + id.id + '.html'; }})
			.when('/dochome', {templateUrl: '/views/dochome.html', controller: 'dochome_controller'})
			.when('/contact', {templateUrl: '/views/contact.html'})
			.otherwise({redirectTo: "/main"});

		$locationProvider.html5Mode(false);
	}])
	.run(function($rootScope, $location, gplusService, highlightService) {
		$rootScope.$on( '$viewContentLoaded', function(event, next, current) {
			highlightService.hilightCode();

			gplusService.paintControls();
		});
	});
