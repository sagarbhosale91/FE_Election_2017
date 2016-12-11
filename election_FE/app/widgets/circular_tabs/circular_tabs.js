(function () {
    'use strict';

    angular.module('circular-tab-app', []);

    angular.module('circular-tab-app').directive('circularTabDir', circularTabDir);

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
    }


    angular.module('circular-tab-app').service('circularTabService',['$q','$http', function($q, $http){
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

    var app = angular.module('circular-tab-app');

    app.controller('circularTabCtrl', circularTabCtrl);

    function circularTabCtrl ($scope, $state, $stateParams, $http, $q, $rootScope, circularTabService) {

        var self = this;
        self.circularTabData = {};

        self.initData = function(){
            circularTabService.getInitData().then(
                function(result) {
                    if(result !== null || result !== undefined) {
                        self.circularTabData = result;
                    } else {
                        alert("Something goes worng.");
                    }
                },function(reason) {
                    alert("Uanble to register reqquest.Please try again.");
                });


        }
    }

})();
