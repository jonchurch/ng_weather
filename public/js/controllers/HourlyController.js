(function() {
    angular.module('ngWeather')
        .controller('HourlyController', HourlyController);

    HourlyController.$inject = ['$scope', 'WeatherService'];
   
    function HourlyController($scope, WeatherService) {
        $scope.hourlyData = WeatherService.weather;
        $scope.summaryLookup = {
            'Drizzle': 'There will be a drizzle',
            'Parly Cloudy': 'Parly cloudy skies'
        }
        $scope.$watch(function(){
            return WeatherService.weather;
        }, function(value){
            $scope.hourlyData = value;
            console.log(value);
        });
    }

})();
