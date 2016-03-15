var data = require("./guideData");

var cuisineController = function($scope, $state, $location) {

  $scope.restaurantActive = 0;
  $scope.restaurantPageData = [];

  $scope.cuisines = [
    {label: "American", data: "american"},
    {label: "Basque", data: "basque"},
    {label: "Belgian", data: "belgian"},
    {label: "British", data: "british"},
    {label: "Chinese", data: "chinese"},
    {label: "Drink-centric", data: "drink-centric"},
    {label: "French", data: "french"},
    {label: "Greek", data: "greek"},
    {label: "Hawaiian", data: "hawaiian"},
    {label: "Indian", data: "indian"},
    {label: "Italian", data: "italian"},
    {label: "Japanese", data: "japanese"},
    {label: "Mexican", data: "mexican"},
    {label: "Moroccan", data: "moroccan"},
    {label: "Northern California", data: "northerncalifornia"},
    {label: "Seafood", data: "seafood"},
    {label: "Spanish", data: "spanish"},
    {label: "Steakhouse", data: "steakhouse"},
    {label: "Thai", data: "thai"},
    {label: "Vietnamese", data: "vietnamese"}
  ]

  $scope.setCuisine = function(l) {
    var cuisine = l;
    var restaurants_by_cuisine = [];
    data.data.forEach(function(a,index) {
      if((a.Cuisine.match(/,/g)||[]).length > 0) {
        var cuisine_list = a.Cuisine.split(",");
        cuisine_list.forEach(function(c) {
          if ((c) && (c.toLowerCase().split(" ").join("") == l)) {
              restaurants_by_cuisine.push(a);
          }
        })
      } else {
        if ((a.Cuisine) && (a.Cuisine.toLowerCase().split(" ").join("") == l)) {
            restaurants_by_cuisine.push(a);
        }
      }
    });
    $scope.restaurants_by_cuisine = restaurants_by_cuisine;
    $scope.cuisine = cuisine;
  };

  $scope.chooseRestaurant = function(restaurant) {
    $scope.restaurantPageData = restaurant;
    $scope.restaurantActive = 1;
    $state.go("cuisines",{cuisine: $scope.cuisine, name: restaurant.URLname}, {notify: false})
  }

  $scope.cuisine = $state.params.cuisine; // || "italian";
  $scope.setCuisine($scope.cuisine);
  if ($state.params.name) {
    var r = data.data.filter(item => item.URLname == $state.params.name).pop();
    $scope.chooseRestaurant(r);
  }

};

cuisineController.$inject = ["$scope", "$state", "$location"];
module.exports = cuisineController;
