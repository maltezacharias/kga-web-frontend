(function() {

	angular.module('kga.groupNumberFilter', [])
		.filter('groupNumber', groupNumberFilterFactory);

	function groupNumberFilterFactory() {
		return function groupNumberFilter(groups, number) {
			if (number === '') {
				// No filtering
				return groups;
			}
			return groups.filter(function (group) {
				return group.number.toString().startsWith(number);
			});
		};
	}

})();
