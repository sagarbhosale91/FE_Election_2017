(function () {
	'use strict';

	angular.module('app.core').controller('StartUpCtrl', StartUpCtlr);

	function StartUpCtlr ($scope, $timeout, $state, $rootScope) {
		
	
		$scope.userName = "Sagar Bhosale";
		
		var goToState = "about-me";	
		$state.go(goToState);
		
		$scope.menus = [
		{
			"state" : "about-me",
			"label" : "About Me",
			"menuIcon" : "fa fa-file",
			"visible" : true
		},{
			"state" : "issues",
			"label" : "Issues",
			"menuIcon" : "fa fa-question-circle",
			"visible" : true
		},{
			"state" : "gallary",
			"label" : "Gallary",
			"menuIcon" : "fa fa-question-circle",
			"visible" : true
		},{
			"state" : "work-history",
			"label" : "Work History",
			"menuIcon" : "fa fa-question-circle",
			"visible" : true
		},{
			"state" : "current-work",
			"label" : "Current Events",
			"menuIcon" : "fa fa-question-circle",
			"visible" : true
		},{
			"state" : "future-work",
			"label" : "Future work",
			"menuIcon" : "fa fa-question-circle",
			"visible" : true
		},{
			"state" : "news-upadtes",
			"label" : "News and Updates",
			"menuIcon" : "fa fa-question-circle",
			"visible" : true
		},{
			"state" : "election-special",
			"label" : "Special",
			"menuIcon" : "fa fa-question-circle",
			"visible" : true
		},{
			"state" : "contact-us",
			"label" : "Contact Us",
			"menuIcon" : "fa fa-question-circle",
			"visible" : true
		},{
			"state" : "donate",
			"label" : "Donate for society",
			"menuIcon" : "fa fa-question-circle",
			"visible" : true
		}];
	
	}
	
})();
