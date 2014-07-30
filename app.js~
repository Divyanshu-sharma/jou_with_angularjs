var app = angular.module('CallbackDemo', []);

app.controller('MainCtrl', function($scope) {
  $scope.MyColorChanged = function(r, g, b) {
    console.log('MyColorChanged', arguments);
      document.getElementById('log').innerHTML += ('new color: rgb(' + r + ',' + g + ',' + b + ')<br>');
  };
});

app.directive('onColorChanged', ['$parse', function($parse) {
    return {
        restrict: 'A',
        scope: {
          onColorChanged: '&'
        },
        template: '<div style="padding:10px;background:rgb({{ r }}, {{ g }}, {{ b }})">' +
            'R: <input type="range" min="0" max="255" ng-model="r"><br>' + 
            'G: <input type="range" min="0" max="255" ng-model="g"><br>' +
            'B: <input type="range" min="0" max="255" ng-model="b"><br>' +
        '</div>',
        link: function(scope, iElement, iAttrs) {
          scope.r = 100;
          scope.g = 150;
          scope.b = 200;
          scope.$watch('r+g+b', function(newValue, oldValue) {
              scope.onColorChanged({
                r: scope.r,
                g: scope.g,
                b: scope.b
              });
          });
        }
    };
}]);
