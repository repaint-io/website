

angular.module('repaintApp').factory('gplusService', [function() {
	   return {
		   paintControls: function() {
			   if ($('.g-page').length > 0) {
				   gapi.page.go();
			   }
		   }
	   }
}]);