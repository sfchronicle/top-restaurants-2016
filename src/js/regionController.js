var data = require("./guideData");

console.log(data);

var regionController = function($scope, $state) {

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
    console.log(restaurants_by_region);
  };

  var region = $scope.region = $state.params.region;// || "italian";

  $scope.setRegion(region);

};

regionController.$inject = ["$scope", "$state"];
module.exports = regionController;
