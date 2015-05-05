(function () {
    'use strict';

    angular
        .module('pw.transactions',[])
        .controller('Transactions', Scrubber);

    Scrubber.$inject = [];
    function Scrubber() {
        
        this.hello="all yo stuff";
        
    }
    
})();