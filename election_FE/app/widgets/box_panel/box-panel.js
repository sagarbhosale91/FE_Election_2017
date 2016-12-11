(function () {
	'use strict';

	angular.module('box-panel-app', []);
	
	angular.module('box-panel-app').directive('boxPanelDir', boxPanelDir);

	function boxPanelDir() {
		return {
			restrict: 'E',
			controller:   'boxPanelCtrl',
			scope: {
				callback: "&"
			},
			templateUrl:  'app/widgets/box_panel/box_panel.html',
			controllerAs: 'vm'
		} 
	}

	
	angular.module('box-panel-app').service('boxPanelService',['$q','$http', function($q, $http){
    var service = this;

    service.getInitData = function () {
    	var deferred = $q.defer();
    	$http.get('app/widgets/box_panel/box_panel.json',{
    	    headers: {'WidgetName':'bax-panel'}
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
  
  var app = angular.module('box-panel-app');

			app.controller('boxPanelCtrl', boxPanelCtrl);	

			function boxPanelCtrl ($scope, $state, $stateParams, $http, $q, $rootScope, boxPanelService) {
				
				var self = this;	
					self.boxPanelData = {};
					
					self.initData = function(){
					boxPanelService.getInitData().then(
							function(result) {
								if(result !== null || result !== undefined) {
									self.boxPanelData = result;
								} else {
									alert("Something goes worng.");
								}
							},function(reason) {
								alert("Uanble to register reqquest.Please try again.");
					});
					
											
				}
			}

})();
