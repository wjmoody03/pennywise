(function () {
    'use strict';

    angular
        .module('pw.dashboard',[])
        .controller('Dashboard', Dashboard);

    Dashboard.$inject = [];
    function Dashboard() {
        
        this.title="Welcome to your dash";
        
    }
    
})();