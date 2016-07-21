(function(){
  angular.module('ngWeather')
        .controller('SimpleController', SimpleController);

  SimpleController.$inject = ['$scope'];

  function SimpleController($scope){
    $scope.message = 'Hello There!';
  }
})();
