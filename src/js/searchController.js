var data = require("./guideData");

var searchController = function($scope, $state) {

  var all = data.data;

  $scope.untouched = true;
  $scope.found = all;
  $scope.restaurantActive = 0;

  $scope.search = debounce(function() {

    var value = $scope.searchText;
    $scope.restaurantActive = 0;
    $scope.restaurantPageData = [];
    $state.go("search",{name: ""}, {notify: false})

    if (!value) {
      $scope.found = all;
      $scope.untouched = true;
    } else {
      value = value.toLowerCase();
      var filtered = all.filter(function(item) {
        if (item.Cuisine) {
          return (item.Name.toLowerCase().indexOf(value) == 0 || item.Cuisine.toLowerCase().indexOf(value) == 0);
        }
      });
      $scope.found = filtered;
      $scope.untouched = false;
    }
    $scope.$apply();
  });

  $scope.chooseRestaurant = function(restaurant) {
    $scope.restaurantPageData = restaurant;
    $scope.restaurantActive = 1;
    $state.go("search",{name: restaurant.URLname}, {notify: false});
    $scope.found = [];
  }

};

var debounce = function(f, interval) {
  var timeout = null;
  return function() {
    if (timeout) return;
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }
    timeout = setTimeout(function() {
      f.apply(null, args);
      timeout = null;
    }, interval || 400);
  };
};

searchController.$inject = ["$scope", "$state"];
module.exports = searchController;
