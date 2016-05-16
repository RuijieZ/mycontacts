'use strict';

// Declare app level module which depends on views, and components
angular.module('mycontacts', [
  'ngRoute',
  'mycontacts.contacts'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/contacts'});
}]);
