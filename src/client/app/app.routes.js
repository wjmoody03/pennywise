(function(){

    angular.module('pennywise')
        .config(['$routeProvider',
              function($routeProvider) {
                $routeProvider.
                  when('/dashboard', {
                    templateUrl: 'app/dashboard/dashboard.html',
                    controller:'Dashboard',
                    controllerAs:'vm'
                  }).
                  when('/scrub', {
                    templateUrl: 'app/scrubber/scrubber.html',
                    controller:'Scrubber',
                    controllerAs:'vm'
                  }).
                  when('/transactions', {
                    templateUrl: 'app/transactions/transactions.html',
                    controller:'Transactions',
                    controllerAs:'vm'
                  }).
                  otherwise({
                    redirectTo: '/dashboard'
                  });
              }]);
    
})()