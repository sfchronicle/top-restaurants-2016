//var data = require("./guideData");

var top100Controller = function($scope, $state) {

  $scope.test = "hello world";
  console.log($state);

};

top100Controller.$inject = ["$scope", "$state"];
module.exports = top100Controller;
