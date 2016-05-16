'use strict';

angular.module('mycontacts.contacts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'contactsCtrl'
  });
}])

.controller('contactsCtrl', [function() {
	console.log("the contacts controller is loading");
}]);