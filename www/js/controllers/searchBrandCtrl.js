angular.module('searchBrandCtrl', [])

.controller('searchBrandCtrl', function($scope) {
	
	 $scope.items = [
	                 {display: 'Hello'},
	                 {display: 'Baha'},
	                 {display: 'Ala'},
	                 {display: 'Siwar'},
	                 {display: 'Monira'},
	                 {display: 'Samir'},
	                 {display: 'Spange Bob'},
	                 {display: 'Deneris Targariant'},
	                 {display: 'Ned Stark'}
	             ];
	             $scope.onSelect = function (item) {
	                 console.log('item', item);
	             };
});
