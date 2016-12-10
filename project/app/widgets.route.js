(function () {
	'use strict';

	angular.module('dsplex').config(routeConfig);

	function routeConfig($stateProvider) {

		
		$stateProvider.state('about-me', {
			url : '/about-me',
			views: {
		        'main@': {
		        	templateUrl : 'app/menu/about-me.tpl.html'
		        }
			}
		});
		
		$stateProvider.state('issues', {
			url : '/issues',
			views: {
		        'main@': {
		        	templateUrl : 'app/menu/issues.tpl.html'
		        }
			}
		});
		

		
		$stateProvider.state("otherwise", {
			url : '/login',
			views: {
		        'main@': {
		        	templateUrl : 'error.tpl.html',
					controller : 'LoginCtrl',
					controllerAs : 'vm'
		        }
			}
		});

	
	}

})();
