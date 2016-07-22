angular.module('viewBrandCtrl', [])

.controller('viewBrandCtrl', function($scope,searchData) {
	$scope.getSearchData = function(){
	searchData.getSearchData()
	.success(function(data) {
		$scope.searchData = data;
		console.log(JSON.stringify($scope.searchData))
	});
	};
	$scope.getSearchData();
});
