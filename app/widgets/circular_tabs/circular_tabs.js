(function () {
	'use strict';
	
		var circularTabApp = angular.module('circular-tab-app', []);

			
			circularTabApp.controller('circularTabCtrl', circularTabCtrl);	

			function circularTabCtrl ($scope, $state, $stateParams, $http, $q, $rootScope, circularTabService) {
				
				var self = this;	
					self.circularTabData = {};
					
					self.initData = function(){
					circularTabService.getInitData().then(
							function(result) {
								if(result !== null || result !== undefined) {
									//callbackHandleMessage("success", "Topup added successfully.");
									self.circularTabData = result;
								} else {
									//callbackHandleMessage("error", result.errText);
									alert("Something goes worng.");
								}
							},function(reason) {
								//callbackHandleMessage("error", "Uanble to add Top-up.Please try again.");
								alert("Uanble to register reqquest.Please try again.");
					});
					
											
				}
			};
			
			circularTabApp.directive('circularTabDir', circularTabDir);

				function circularTabDir() {
					return {
						restrict: 'E',
						controller:   'circularTabCtrl',
						scope: {
							callback: "&"
						},
						templateUrl:  'app/widgets/circular_tabs/circular_tabs.html', 
						controllerAs: 'vm'
					} 
			};
			
			
			circularTabApp.service('circularTabService',['$q','$http', function($q, $http){
			var service = this;

			service.getInitData = function () {
				var deferred = $q.defer();
				$http.get('app/widgets/circular_tabs/circular_tabs.json',{
					headers: {'WidgetName':'circular_tabs'}
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

			
})();
