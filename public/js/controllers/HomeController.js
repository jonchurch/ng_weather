(function() {
    angular.module('ngWeather')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'WeatherService'];

    function HomeController($scope, WeatherService) {
        $scope.updateHourly = updateHourly;
        $scope.updateMinutely = updateMinutely;
        $scope.updateDaily = updateDaily;

        //FOR TESTING
        $scope.latitude = 29;
        $scope.longitude = -82;

        function updateHourly(lat, lon) {
            WeatherService.getHourlyData(lat, lon);
        }

        function updateMinutely(lat, lon) {
            WeatherService.getMinutelyData(lat,lon);
        }

        function updateDaily(lat, lon) {
            WeatherService.getDailyData(lat, lon);
        }
    }


})();
