angular
  .module('weatherApp')
  .factory('Weather', function($resource) {

    var API_PATH = 'http://api.openweathermap.org/data/2.5/weather/8558bb778f49214cffd0eba0eca50b4c';

    var Weather = $resource(API_PATH);

    return {
      getWeather: function(weatherParams) {
        return Weather.get(weatherParams, function(successResult) {
          return successResult;
        }, function(errorResult) {
          console.log(errorResult);
        });
      }
    }
  });