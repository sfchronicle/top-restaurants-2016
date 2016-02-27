//var data = require("./guideData");

var cuisineController = function($scope, $state) {

  $scope.test = "hello world";
  console.log($state);

};

cuisineController.$inject = ["$scope", "$state"];
module.exports = cuisineController;
