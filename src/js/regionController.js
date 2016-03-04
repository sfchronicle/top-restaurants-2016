var data = require("./guideData");

var regionController = function($scope, $state, $location) {

  $scope.restaurantActive = 0;
  $scope.restaurantPageData = [];

  $scope.regions = [
    {label: "San Francisco", data: "sanfrancisco"},
    {label: "North Bay", data: "northbay"},
    {label: "East Bay", data: "eastbay"},
    {label: "South Bay", data: "southbay"},
  ]

  $scope.setRegion = function(l) {
    var region = l;
    var restaurants_by_region = [];
    data.data.forEach(function(a,index) {
      if ((a.Region) && (a.Region.toLowerCase().replace(" ","") == l)) {
        restaurants_by_region.push(a);
      }
    });
    $scope.restaurants_by_region = restaurants_by_region;
    $scope.region = region;
  };

  $scope.chooseRestaurant = function(restaurant) {
    $scope.restaurantPageData = restaurant;
    $scope.restaurantActive = 1;
    $state.go("regions",{region: $scope.region, name: restaurant.URLname}, {notify: false})
  }

  $scope.region = $state.params.region; // || "italian";
  $scope.setRegion($scope.region);
  if ($state.params.name) {
    var r = data.data.filter(item => item.URLname == $state.params.name).pop();
    $scope.chooseRestaurant(r);
  }

};

regionController.$inject = ["$scope", "$state", "$location"];
module.exports = regionController;
