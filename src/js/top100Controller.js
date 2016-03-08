var data = require("./guideData");

var top100Controller = function($scope, $state, $location) {

  $scope.data = data.data;
  $scope.show = 0;
  var text_options = ["more","less"];
  $scope.textText = text_options[$scope.show];
  $scope.restaurantActive = 0;

  $scope.toggleShow = function(show) {
    $scope.show = !(show)+0;
    $scope.textText = text_options[$scope.show];
  };

  $scope.chooseRestaurant = function(restaurant) {
    $scope.restaurantPageData = restaurant;
    $scope.restaurantActive = 1;
    $state.go("top100",{name: restaurant.URLname}, {notify: false});
  }

  $scope.restaurantPageData = $state.params.restaurantPageData; // || "italian";
  if ($state.params.name) {
    var r = data.data.filter(item => item.URLname == $state.params.name).pop();
    $scope.chooseRestaurant(r);
  }

  $scope.reset = function() {
    console.log("we got here");
    //$state.go("top100",{name: ""}, {notify: false});
  }

};

top100Controller.$inject = ["$scope", "$state", "$location"];
module.exports = top100Controller;
