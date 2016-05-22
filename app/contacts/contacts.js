'use strict';

angular.module('mycontacts.contacts', ['ngRoute','firebase','mycontacts'])

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

    $scope.hideAddForm = function() {
        $scope.addForm = false;
    }

    $scope.addFormSubmit = function() {
        console.log("I am submitting stuff my friend");
        // Assign Values
        if($scope.name){ var name = $scope.name } else { var name = null; }
        if($scope.email){ var email = $scope.email; } else { var email = null; }
        if($scope.company){ var company = $scope.company; } else { var company = null; }
        if($scope.mobile_phone){ var mobile_phone = $scope.mobile_phone; } else { var mobile_phone = null; }
        if($scope.home_phone){ var home_phone = $scope.home_phone; } else { var home_phone = null; }
        if($scope.work_phone){ var work_phone = $scope.work_phone; } else { var work_phone = null; }
        if($scope.street_address){ var street_address = $scope.street_address; } else { var street_address = null; }
        if($scope.city){ var city = $scope.city; } else { var city = null; }
        if($scope.state){ var state = $scope.state; } else { var state = null; }
        if($scope.zipcode){ var zipcode = $scope.zipcode; } else { var zipcode = null; }

        // build object
        $scope.contacts.$add({
            name: name,
            email: email,
            company: company,
            phones:[
                {
                    mobile: mobile_phone,
                    home: home_phone,
                    work: work_phone
                }
            ],
            address: [
                {
                    street_address: street_address,
                    city: city,
                    state: state,
                    zipcode: zipcode
                }
            ]
        }).then(function() {
            var id = ref.key();
            console.log("add contact with ID" + id);

            clearFields();
            $scope.msg = "contact added";
            $scope.addForm = false;

        })

    }
}]);