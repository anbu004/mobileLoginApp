
angular.module('starter', [
                           'ionic',
                           'BrandCtrl',
                           'app.firebase', 
                           'firebase',
                           'Accountctrl',
                           'searchBrandCtrl',
                           'viewBrandCtrl',
                           'LocalStorageModule'
                           ])

                           
.run(function ($ionicPlatform,localStorageService) {

	$ionicPlatform.ready(function () {
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})

.config(function ($stateProvider, $urlRouterProvider,localStorageServiceProvider) {
	$stateProvider
	.state('tab', {
		url: "/tab",
		abstract: true,
		templateUrl: "templates/tabs.html"
	})

	.state('tab.brand', {
		url: '/brand',
		views: {
			'tab-brand': {
				templateUrl: 'templates/Brand.html',
				controller: 'BrandCtrl'
			}

		}
	})
	.state('tab.viewBrand', {
		url: '/viewBrand',
		views: {
			'tab-searchBrand': {
				templateUrl: 'templates/viewBrand.html',
				controller: 'viewBrandCtrl'
			}

		}
	})
	
	.state('tab.searchBrand', {
		url: '/searchBrand',
		views: {
			'tab-searchBrand': {
				templateUrl: 'templates/searchBrand.html',
				controller: 'searchBrandCtrl'
			}

		}
	})
	
	.state('tab.account', {
		url: '/account',
		views: {
			'tab-account': {
				templateUrl: 'templates/tab-account.html',
				controller: 'AccountCtrl'
			}
		}
	});

	$urlRouterProvider.otherwise('/tab/brand');

});
