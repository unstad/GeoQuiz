(function () {

  angular
    .module('meanApp')
    .directive('navigation', navigation);

  function navigation () {
    return {
      restrict: 'EA',
      templateUrl: '/common/directives/navigation/navigation.template.ejs',
      controller: 'navigationCtrl as navvm'
    };
  }

})();