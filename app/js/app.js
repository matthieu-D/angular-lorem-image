'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngSanitize',
  'myApp.services',
  'myApp.directives'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
