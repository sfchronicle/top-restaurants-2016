var data = require("./guideData");

console.log(data);


var cuisineController = function($scope, $state, $location) {

  $scope.restaurantActive = 0;
  $scope.restaurantPageData = [];

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

  var cuisine = $scope.cuisine = $state.params.cuisine; // || "italian";
  $scope.setCuisine(cuisine);

  $scope.chooseRestaurant = function(restaurant) {
    $scope.restaurantPageData = restaurant;
    $scope.restaurantActive = 1;
  }

  $scope.$watch("page", function () {
    console.log($scope.restaurantPageData);
    if ($scope.restaurantPageData == []) return;
    console.log("we are seeing data");
    console.log($scope.restaurantPageData);
    // update URL
    $state.go("cuisines", { name: $scope.restaurantPageData.URLname });
  });

};

cuisineController.$inject = ["$scope", "$state", "$location"];
module.exports = cuisineController;
