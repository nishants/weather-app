app.controller('ForecastController', ['$scope', 'ForcarsService', function($scope, ForcarsService){
  $scope.forecasts = ForcarsService;
  $scope.search = function(){};
}]);