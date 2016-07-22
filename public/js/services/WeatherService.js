(function(){
  angular.module('ngWeather')
        .factory('WeatherService', WeatherService);

  WeatherService.$inject = ['$http'];

  function WeatherService($http){
    var passphrase = 'i like cheese and bacon and some other things too';
    var baseUrl = 'https://quiet-bayou-88937.herokuapp.com/';
    var service = {
      getHourlyData: getHourlyData,
      getMinutelyData: getMinutelyData,
      getDailyData: getDailyData,
      weather: {}
    };
    return service;


    function getHourlyData(lat, lon){
      var url = baseUrl + 'forecast/hourly/'+ lat + ',' + lon;
      console.log(service.weather);
      var config = {
        headers: {
          'passphrase': passphrase
        }
      };
      return $http.get(url, config)
                  .then(function(response){
                    service.weather = response.data;
                    console.log(service.weather);
                  });
    }
    function getMinutelyData(lat, lon){
      
    }
    function getDailyData(lat, lon){}
  }
})();
