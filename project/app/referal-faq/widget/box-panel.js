(function () {
	'use strict';

	angular.module('box-panel-app', []);
	
	angular.module('box-panel-app').directive('referelFaqDirective', referelFaqDirective);

	function referelFaqDirective() {
		return {
			restrict: 'E',
			controller:   'ReferalFaqCtrl',
			scope: {
				callback: "&"
			},
			templateUrl:  'app/referal-faq/widget/box_panel.html',
			controllerAs: 'vm'
		} 
	}

	
	angular.module('box-panel-app').service('referalFaqService',['$q','$http', function($q, $http){
    var service = this;

    service.getFaqData = function () {
    	var deferred = $q.defer();
    	$http.get('app/referal-faq/widget/box_panel.json',{
    	    headers: {'WidgetName':'referal-faq'}
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
	
	service.updateReferenceData = function (obj) {
    	var deferred = $q.defer();
		console.log(obj);
    	$http({
    		 url: '/rest/changeProfile', 
			 method: 'POST',	
 			 data: obj,					
			 headers:{'WidgetName':'update-reference'}	   
			})
    	.success(function(data){
			deferred.resolve(data);
		}).error(function(data){
			deferred.reject('Internal Server Error');
		});
    	return deferred.promise;
    }; 
 
    
  }]);
  
  var ReferalFaq = angular.module('box-panel-app');

			ReferalFaq.controller('ReferalFaqCtrl', ReferalFaqCtrl);	

			function ReferalFaqCtrl ($scope, $state, $stateParams, $http, $q, $rootScope, referalFaqService) {
				
				var self = this;	
					self.ReferalFaq = {};
					
					self.initFaq = function(){
					referalFaqService.getFaqData().then(
							function(result) {
								if(result !== null || result !== undefined) {
									//callbackHandleMessage("success", "Topup added successfully.");
									self.ReferalFaq = result;
								} else {
									//callbackHandleMessage("error", result.errText);
									alert("Something goes worng.");
								}
							},function(reason) {
								//callbackHandleMessage("error", "Uanble to add Top-up.Please try again.");
								alert("Uanble to register reqquest.Please try again.");
					});
					
											
				}
			}

})();
