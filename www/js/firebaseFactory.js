angular.module('app.firebase', ['firebase'])

.factory('Auth',function ($firebaseAuth, $rootScope) {
                          var ref = new Firebase(firebaseUrl);
                          return $firebaseAuth(ref);
                          })
              
.factory("sampleItems", function($firebase) {
	 
      var itemsRef = new Firebase("https://todomvc-angular.firebaseio.com/items");
      
      return $firebase(itemsRef);
      Spinner.spin();
})

.factory('searchData', function($http){
	return{
		getSearchData : function(){
			return $http.get("./JSON/search.json");
		}
	}
});