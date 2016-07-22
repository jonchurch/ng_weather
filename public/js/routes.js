
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
				template: 'home'
			})
			.when('/hourly', {
				template: 'hourly'
			})
			.when('/minutely', {
				template: 'minutely'
			})
			.when('/daily', {
				template: 'daily'
			})
			.otherwise({
				redirectTo: '/'
			}); //this semicolon ends the .when chain

		}
})();
