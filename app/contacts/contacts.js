'use strict';

angular.module('mycontacts.contacts', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'contactsCtrl'
  });
}])

.controller('contactsCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
    var ref = new Firebase('https://mycontacts-rz.firebaseio.com/');
    $scope.contacts = $firebaseArray(ref);
    
    // set the flag addForm to be true, and thus show the form used to add contact
    $scope.showAddForm = function() {
        $scope.addForm = true;
    }
}]);