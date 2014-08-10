

angular.module('repaintApp').factory('highlightService', [function() {
	return {
		hilightCode: function() {
			$('pre code').each(function (i, block) {
				hljs.highlightBlock(block);
			});
		}
	}
}]);