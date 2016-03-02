var data = require("./guideData");

var searchController = function($scope, $state) {

  var all = data.data;

  $scope.untouched = true;
  $scope.found = all;

  $scope.search = debounce(function() {

    var value = $scope.searchText;

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
