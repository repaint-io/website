

angular.module('repaintApp')
  .controller('NavController', ['$scope', '$route', function($scope, $route) {
		angular.extend($scope, {
			active: function(name) {
				if ($route.current && (('/'+name) === $route.current.$$route.originalPath)) {
					return true;
				} else {
					return false;
				}
			}
		});
	}]);