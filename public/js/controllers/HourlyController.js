(function() {
    angular.module('ngWeather')
        .controller('HourlyController', HourlyController);

    HourlyController.$inject = ['$scope', 'WeatherService'];

    function HourlyController($scope, WeatherService) {
        $scope.hourlyData = WeatherService.weather;
        $scope.summaryLookup = {
            'Drizzle': 'There will be a drizzle',
            'Parly Cloudy': 'Parly cloudy skies'
        };
        $scope.$watch(function() {
            return WeatherService.weather;
        }, function(value) {
            $scope.hourlyData = value;
            $scope.data = hourlyGraph($scope.hourlyData);

        });



        $scope.options = {
            chart: {
                type: 'lineChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 55
                },
                x: function(d) {
                    return d.x;
                },
                y: function(d) {
                    return d.y;
                },
                useInteractiveGuideline: true,
                dispatch: {
                    stateChange: function(e) { console.log("stateChange"); },
                    changeState: function(e) { console.log("changeState"); },
                    tooltipShow: function(e) { console.log("tooltipShow"); },
                    tooltipHide: function(e) { console.log("tooltipHide"); }
                },
                xAxis: {
                    axisLabel: 'Time (ms)'
                },
                yAxis: {
                    axisLabel: 'Voltage (v)',
                    tickFormat: function(d) {
                        return d3.format('.02f')(d);
                    },
                    axisLabelDistance: -10
                },
                callback: function(chart) {
                    console.log("!!! lineChart callback !!!");
                }
            },
            title: {
                enable: true,
                text: 'Temp'
            },
            caption: {
                enable: false,

            }
        };
            $scope.options.chart.forceY = [0, 100];
        // Removed this because when the function first runs, there is no data to assign, we are assigning an empty object, moved to the watch function
        // 
        // $scope.data = hourlyGraph($scope.hourlyData);

        function hourlyGraph(weather) {
            if (isObjectEmpty(weather)) {
                console.log('no data yet for hourlyGraph!');
                return;
            } else {
                var tempValues = [];
                console.log(weather);


                for (var i = 0; i < weather.hourly.data.length; i += 1) {
                    var fixed = weather.hourly.data[i].temperature.toFixed();
                    tempValues.push({ x: i, y: fixed });
                }

                console.log(tempValues);
                return [{
                    key: 'Temp',
                    values: tempValues
                }];
            }


        }

        function isObjectEmpty(object) {
            for (var key in object) {
                if (object.hasOwnProperty(key)) {
                    return false;
                }
            }
            return true;
        }

    }

})();
