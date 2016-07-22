var firebaseUrl = "https://sizzling-inferno-3944.firebaseio.com";


angular.module('starter', [
                           'ionic',
                           'BrandCtrl',
                           'app.firebase', 
                           'firebase', 'angularMoment',
                           'Accountctrl',
                           'autocomplete.directive',
                           'searchBrandCtrl',
                           'viewBrandCtrl',
                           
                           'signInCtrl'
                           ])

                           
.run(function ($ionicPlatform, $rootScope, $location,Auth, $ionicLoading) {

	$ionicPlatform.ready(function () {
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
		

        $rootScope.firebaseUrl = firebaseUrl;
        $rootScope.displayName = null;

        Auth.$onAuth(function (authData) {
        	 console.log("step1");
            if (authData) {
                console.log("Logged in as:", authData.uid);
            } else {
                console.log("Logged out");
                $ionicLoading.hide();
                $location.path('/signIn');
            }
        });

        $rootScope.logout = function () {
            console.log("Logging out from the app");
            $ionicLoading.show({
                template: 'Logging Out...'
            });
            Auth.$unauth();
            
        }


        $rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams, error) {
            // We can catch the error thrown when the $requireAuth promise is rejected
            // and redirect the user back to the home page
            if (error === "AUTH_REQUIRED") {
                $location.path("/login");
            }
        });
		
		
		
		
	});
})

.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('tab', {
		url: "/tab",
		abstract: true,
		templateUrl: "templates/tabs.html",
        resolve: {
            // controller will not be loaded until $requireAuth resolves
            // Auth refers to our $firebaseAuth wrapper in the example above
            "currentAuth": ["Auth",
                function (Auth) {
                    // $requireAuth returns a promise so the resolve waits for it to complete
                    // If the promise is rejected, it will throw a $stateChangeError (see above)
                    return Auth.$requireAuth();
      }]
        }
	})
	
	.state('signIn', {
		url: '/signIn',
				templateUrl: 'templates/sign-in.html',
				controller: 'signInCtrl',
		        resolve: {
		            // controller will not be loaded until $waitForAuth resolves
		            // Auth refers to our $firebaseAuth wrapper in the example above
		            "currentAuth": ["Auth",
		                function (Auth) {
		                    // $waitForAuth returns a promise so the resolve waits for it to complete
		                    return Auth.$waitForAuth();
		        }]
		        }
		
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

	$urlRouterProvider.otherwise('/tab.brand');

});
