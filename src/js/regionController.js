//var data = require("./guideData");

var regionController = function($scope, $state) {

  $scope.test = "hello world";
  console.log($state);

};

regionController.$inject = ["$scope", "$state"];
module.exports = regionController;
