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
			.when("/main", {templateUrl: '/views/main.html', controller: 'MainCtrl'})
			.when("/homedoc", {templateUrl: '/docs/homedoc.html'})
			.when("/composition", {templateUrl: '/docs/composition.html'})
			.when("/contact", {templateUrl: '/views/contact.html'})
			.otherwise({redirectTo: "/main"});

		$locationProvider.html5Mode(false);
	}])
	.run(function($rootScope, $location) {
		$rootScope.$on( "$viewContentLoaded", function(event, next, current) {
			$('pre code').each(function (i, block) {
				hljs.highlightBlock(block);
			});

			if ($('.g-page').length > 0) {
				console.log("doing");
				gapi.page.go();
			}

		});
	});
