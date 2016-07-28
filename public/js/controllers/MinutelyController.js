(function() {
    angular.module('ngWeather')
        .controller('MinutelyController', MinutelyController);

    MinutelyController.$inject = ['$scope', 'WeatherService', 'nvd3'];

    function MinutelyController($scope, WeatherService) {
        $scope.minutelyData = WeatherService.weather;
        $scope.$watch(function() {
            return WeatherService.weather;
        }, function(value) {
            $scope.minutelyData = value;
            console.log(value);
            $scope.data = minutelyGraph($scope.minutelyData);
        });

<<<<<<< Updated upstream

=======
    
>>>>>>> Stashed changes
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
                text: 'Title for Line Chart'
            },
            subtitle: {
                enable: true,
                text: 'Subtitle for simple line chart. Lorem ipsum dolor sit amet, at eam blandit sadipscing, vim adhuc sanctus disputando ex, cu usu affert alienum urbanitas.',
                css: {
                    'text-align': 'center',
                    'margin': '10px 13px 0px 7px'
                }
            },
            caption: {
                enable: false,

            }
        };

<<<<<<< Updated upstream
        function minutelygraph(weather) {
            var precipProbValues = [];
            var precipIntValues = [];
=======
        function minutelyGraph(weather) {
            if (isObjectEmpty(weather)) {
                console.log('no data yet for minutelyGraph!');
                return;
            } else {
                var precipIntValues = [];
                var precipProbValues= [];
                console.log(weather);
>>>>>>> Stashed changes


                for (var i = 0; i < weather.minutely.data.length; i += 1) {
                    precipProbValues.push({ x: i, y: weather.minutely.data[i].precipProbability.toFixed() });
                    precipIntValues.push({ x: i, y: weather.minutely.data[i].precipIntensity.toFixed() });
                }
                return [{
                    key: 'Precip Probability',
                    values: precipProbValues
                }],
                [{
                    key: 'Precip Intensity',
                    values: precipIntValues
                }];
            }


        }
<<<<<<< Updated upstream
=======

        function isObjectEmpty(object) {
            for (var key in object) {
                if (object.hasOwnProperty(key)) {
                    return false;
                }
            }
            return true;
        }
>>>>>>> Stashed changes

    }
})();
