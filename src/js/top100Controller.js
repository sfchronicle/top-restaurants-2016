var data = require("./guideData");

var top100Controller = function($scope, $state) {

  $scope.data = data.data;
  $scope.show = 0;
  var text_options = ["more","less"];
  $scope.textText = text_options[$scope.show];
  $scope.restaurantActive = 0;

  $scope.toggleShow = function(show) {
    $scope.show = !(show)+0;
    $scope.textText = text_options[$scope.show];
  };

  // $scope.reset = function() {
  //   $state.go("top100",{name: ""}, {notify: false});
  // }

  $scope.chooseRestaurant = function(restaurant) {
    $scope.restaurantPageData = restaurant;
    $scope.restaurantActive = 1;
    $state.go("top100",{name: restaurant.URLname}, {notify: false});
  }

};

top100Controller.$inject = ["$scope", "$state"];
module.exports = top100Controller;
