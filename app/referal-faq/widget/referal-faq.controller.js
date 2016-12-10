(function () {
	'use strict';

			var ReferalFaq = angular.module('referal-faq-app');

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
