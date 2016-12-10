angular.module('referal-faq-app').service('referalFaqService',['$q','$http', function($q, $http){
    var service = this;

    service.getFaqData = function () {
    	var deferred = $q.defer();
    	$http.get('app/referal-faq/widget/faq.json',{
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