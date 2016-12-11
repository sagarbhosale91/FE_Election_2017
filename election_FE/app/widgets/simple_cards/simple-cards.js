(function () {
	'use strict';

	angular.module('simple-cards-app', []);
	
	angular.module('simple-cards-app').directive('simpleCardsDir', simpleCardsDir);

	function simpleCardsDir() {
		return {
			restrict: 'E',
			controller:   'simpleCardsCtrl',
			scope: {
				callback: "&"
			},
			templateUrl:  'app/widgets/simple_cards/simple_cards.html',
			controllerAs: 'vm'
		} 
	}

	
	angular.module('simple-cards-app').service('simpleCardsService',['$q','$http', function($q, $http){
    var service = this;

    service.getInitData = function () {
    	var deferred = $q.defer();
    	$http.get('app/widgets/simple_cards/simple_cards.json',{
    	    headers: {'WidgetName':'simpleCards'}
    	})
    	.success(function(data){
			console.log(data);
			deferred.resolve(data);
		}).error(function(data){
			console.log(data);
			deferred.reject('Internal Server Error');
		});
    	return deferred.promise;
    };  
    
  }]);
  
  var app = angular.module('simple-cards-app');

			app.controller('simpleCardsCtrl', simpleCardsCtrl);

			function simpleCardsCtrl ($scope, $state, $stateParams, $http, $q, $rootScope, simpleCardsService) {
				
				var self = this;	
					self.simpleCardsData = {};
					
					self.initData = function(){
					simpleCardsService.getInitData().then(
							function(result) {
								if(result !== null || result !== undefined) {
									self.simpleCardsData = result;
								} else {
									alert("Something goes worng.");
								}
							},function(reason) {
								alert("Uanble to register reqquest.Please try again.");
					});
					
											
				}
			}

})();
