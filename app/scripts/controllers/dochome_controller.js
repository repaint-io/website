'use strict';


angular.module('repaintApp')
	.controller('dochome_controller', function ($scope) {
		angular.extend($scope, {
			page: 'homedoc',

			fullPage: function() {
				console.log('/docs/' + $scope.page + '.html');
				return '/docs/' + $scope.page + '.html';
			}
		});
	});
