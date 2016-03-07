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

  $scope.chooseRestaurant = function(restaurant) {
    $scope.restaurantPageData = restaurant;
    $scope.restaurantActive = 1;
    $state.go("top100",{name: restaurant.URLname}, {notify: false});
  }

  // $scope.reset = function() {
  //   $state.go("top100",{name: ""}, {notify: false});
  // }
  //
  // $scope.region = $state.params.region; // || "italian";
  // $scope.setRegion($scope.region);
  // if ($state.params.name) {
  //   var r = data.data.filter(item => item.URLname == $state.params.name).pop();
  //   $scope.chooseRestaurant(r);
  // }

};

top100Controller.$inject = ["$scope", "$state"];
module.exports = top100Controller;
