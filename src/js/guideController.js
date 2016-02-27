//var data = require("./guideData");

var guideController = function($scope, $state) {

  $scope.test = "hello world";
  console.log($state);

};

guideController.$inject = ["$scope", "$state"];
module.exports = guideController;
