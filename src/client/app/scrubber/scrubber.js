(function () {
    'use strict';

    angular
        .module('pw.scrubber',[])
        .controller('Scrubber', Scrubber);

    Scrubber.$inject = ['$scope'];
    function Scrubber($scope) {
        $scope.hello="hi jacob";
        
    }
    
})();