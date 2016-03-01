var data = require("./guideData");

console.log(data);

var cuisineController = function($scope, $state) {

  $scope.cuisines = [
    {label: "Italian", data: "italian"},
    {label: "Spanish", data: "spanish"},
    {label: "American", data: "american"},
    {label: "French", data: "french"},
  ]

  $scope.setCuisine = function(l) {
    var cuisine = l;
    var restaurants_by_cuisine = [];
    data.data.forEach(function(a,index) {
      if ((a.Cuisine) && (a.Cuisine.toLowerCase() == l)) {
        restaurants_by_cuisine.push(a);
      }
    });
    $scope.restaurants_by_cuisine = restaurants_by_cuisine;
  };

  var cuisine = $scope.cuisine = $state.params.cuisine;// || "italian";

  $scope.setCuisine(cuisine);

};

cuisineController.$inject = ["$scope", "$state"];
module.exports = cuisineController;
