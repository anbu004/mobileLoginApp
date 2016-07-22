/* global angular, document, window */
'use strict';

angular.module('BrandCtrl', [])

.controller('BrandCtrl', function($scope, sampleItems,$ionicLoading,$stateParams) {
	

	$scope.sampleItems = sampleItems;
	
	$scope.sampleData = {};
	
	$scope.saveSampleData =  function () {
		$scope.sampleItems.$add($scope.sampleData); // data saved to firebase
		$ionicLoading.hide();
		console.log(" data saved.");
		$scope.getSampleData();
	}
    
	$scope.getSampleData =  function () {
		
		$scope.resultArray = [];
		$scope.sampleItems.$getIndex().forEach(function (index) {
			var eachItem = $scope.sampleItems[index];
			console.log("eachItem : " + JSON.stringify(eachItem));
			$scope.resultArray.push(eachItem);
			$ionicLoading.hide();
		});	
	};
	$scope.getSampleData();
	

	
	
})


;
