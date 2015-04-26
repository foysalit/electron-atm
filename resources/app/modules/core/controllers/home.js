angular.module('core').controller('HomeController', [
'$scope', 
function ($scope) {
	var self = this;

	self.items = [
		{text: 'iraa'},
		{text: 'i'},
		{text: 'love'},
		{text: 'you'},
	];
}]);

console.log(angular.module('core'));