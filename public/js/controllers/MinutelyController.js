(function() {
    angular.module('ngWeather')
        .controller('MinutelyController', MinutelyController);

    MinutelyController.$inject = ['$scope', 'WeatherService'];

    function MinutelyController($scope, WeatherService) {
        $scope.minutelyData = WeatherService.weather;
        $scope.$watch(function() {
            return WeatherService.weather;
        }, function(value) {
            $scope.minutelyData = value;
            console.log(value);
            $scope.data = minutelyGraph($scope.minutelyData);
        });

    
        $scope.options = {
            chart: {
                type: 'lineChart',
                height: 250,
                forceY: [0,1],
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 55
                },
                interpolate: 'basis',
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
                    axisLabel: 'The next Hour'
                },
                yAxis: {
                    axisLabel: 'Precipitation',
                    axisLabelDistance: -10,
                    ticks: [4] 
                    // ticks: ,
                },
                callback: function(chart) {
                    console.log("!!! lineChart callback !!!");
                }
            },
            title: {
                enable: true,
                text: 'Precipitation Chance'
            },
            subtitle: {
                enable: false
        
            },
            caption: {
                enable: false

            }
        };

        function minutelyGraph(weather) {
            if (isObjectEmpty(weather)) {
                console.log('no data yet for minutelyGraph!');
                return;
            } else {
                var precipIntValues = [];
                var precipProbValues= [];
                console.log(weather);


                for (var i = 0; i < weather.minutely.data.length; i += 1) {
                    precipProbValues.push({ x: i, y: weather.minutely.data[i].precipProbability.toFixed(2) });
                    precipIntValues.push({ x: i, y: weather.minutely.data[i].precipIntensity.toFixed(2) });
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
