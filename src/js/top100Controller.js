var data = require("./guideData");

var bound_box = document.getElementById("top100").getBoundingClientRect();
console.log(bound_box);

var top100Controller = function($scope, $state, $location) {

  document.getElementById("home").setAttribute("style", "margin-left: " + (bound_box.left/2)+"px");
  console.log(bound_box.left);

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
    $scope.restaurantActive = 0;
    $state.go("top100",{name: ""}, {notify: false});
  }

};

top100Controller.$inject = ["$scope", "$state", "$location"];
module.exports = top100Controller;
