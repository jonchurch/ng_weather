
/**
 * Uses ngroutes to handle site navigation, mapping urls
 * 
 */
(function(){
	angular.module('ngWeather')
					.config(RouteConfig);
		RouteConfig.$inject = ['$routeProvider', '$locationProvider'];

		function RouteConfig($routeProvider, $locationProvider) {
			$routeProvider //defining the url routes, and the html that is brought into index.html
			.when('/', {
				templateUrl: 'html/views/home.html',
				controller: 'HomeController'
			})
			.when('/hourly', {
				templateUrl: '/html/views/hourly.html',
				controller: 'HourlyController'
			})
			.when('/minutely', {
				templateUrl: '/html/views/minutely.html'
			})
			.when('/daily', {
				templateUrl: '/html/views/daily.html'
			})
			.otherwise({
				redirectTo: '/'
			}); //this semicolon ends the .when chain

		}
})();
