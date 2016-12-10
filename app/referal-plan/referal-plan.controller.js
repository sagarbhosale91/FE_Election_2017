(function () {
	'use strict';

			var ReferalPlan = angular.module('referal-plan-app');

			ReferalPlan.controller('ReferalPlanCtrl', ReferalPlanCtrl);	

			function ReferalPlanCtrl ($scope, $state, $stateParams, $http, $q, $rootScope, referalPlanService) {
				
				var self = this;	
					self.ReferalPlan = {};
					
					self.initPlan = function(){
					referalPlanService.getPlanData().then(
							function(result) {
								if(result !== null || result !== undefined) {
									//callbackHandleMessage("success", "Topup added successfully.");
									self.ReferalPlan = result;
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
