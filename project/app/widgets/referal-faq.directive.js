angular.module('referal-faq-app').directive('referelFaqDirective', referelFaqDirective);

function referelFaqDirective() {
	return {
		restrict: 'E',
		controller:   'ReferalFaqCtrl',
        scope: {
            callback: "&"
        },
		templateUrl:  'app/referal-faq/widget/html/referal-faq.tpl.html', 
		controllerAs: 'vm'
	} 
}

angular.module('referal-faq-app').directive('myDirective', myDirective);

function myDirective() {
	return {
		restrict: 'E',
		controller:   'ReferalFaqCtrl',
        scope: {
            callback: "&"
        },
		templateUrl:  'app/referal-faq/widget/html/myDir.tpl.html', 
		controllerAs: 'vm'
	} 
}

angular.module('referal-faq-app').directive('carosalTest', carosalTest);
function carosalTest() {
	return {
		restrict: 'E',
		controller:   'ReferalFaqCtrl',
        scope: {
            callback: "&"
        },
		templateUrl:  'app/referal-faq/widget/html/tabbed_carosal/tabbed_carosal1.html', 
		controllerAs: 'vm'
	} 
}

