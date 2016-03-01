var data = require("./guideData");

var top100Controller = function($scope, $state) {

  $scope.data = data.data;
  $scope.show = 0;
  var text_options = ["more","less"];
  $scope.textText = text_options[$scope.show];

  $scope.toggleShow = function(show) {
    $scope.show = !(show);
    $scope.textText = text_options[$scope.show];
    console.log($scope.show);
    console.log($scope.textText);
  };

};

top100Controller.$inject = ["$scope", "$state"];
module.exports = top100Controller;
