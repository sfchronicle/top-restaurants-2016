var data = require("./guideData");

var regionController = function($scope, $state, $location) {

  $scope.restaurantActive = 0;
  $scope.restaurantPageData = [];

  $scope.regions = [
    {label: "San Francisco", data: "sanfrancisco"},
    {label: "North Bay", data: "northbay"},
    {label: "East Bay", data: "eastbay"},
    {label: "South Bay", data: "southbay"},
  ];

  $scope.setRegion = function(l) {
    var region = l;
    var subregions = [];
    if (region == "sanfrancisco") {
      subregions = ["SoMa", "Mission", "Marina", "Russian Hill", "Financial District", "Presidio", "Castro", "The Richmond", "Noe Valley", "Pacific Heights", "Nopa", "Bernal Heights", "Nob Hill"];
    } else if (region == "northbay") {
      subregions = ["Yountville", "Napa", "Healdsburg", "Larkspur"];
    } else if (region == "eastbay") {
      subregions = ["Oakland", "Port Costa", "Berkeley"];
    } else if (region == "southbay") {
      subregions = ["Los Gatos"];
    }
    $scope.subregions = subregions;
  };

  $scope.setSubregion = function(b) {
    var subregion = b;
    var restaurants_by_subregion = [];
    data.data.forEach(function(a,index) {
      if ((a.SubRegion) && (a.SubRegion == b)) {
        restaurants_by_subregion.push(a);
      }
    });
    $scope.restaurants_by_subregion = restaurants_by_subregion;
    $scope.subregion = subregion;
    $scope.activesubregion = subregion;
  };

  $scope.chooseRestaurant = function(restaurant) {
    $scope.restaurantPageData = restaurant;
    $scope.restaurantActive = 1;
    $state.go("regions",{region: $scope.region, name: restaurant.URLname}, {notify: false})
  }

  $scope.region = $state.params.region; // || "italian";
  $scope.subregion = $state.params.subregion;
  $scope.setRegion($scope.region);
  $scope.setSubregion($scope.subregion);
  if ($state.params.name) {
    var r = data.data.filter(item => item.URLname == $state.params.name).pop();
    $scope.chooseRestaurant(r);
  }

};

regionController.$inject = ["$scope", "$state", "$location"];
module.exports = regionController;
