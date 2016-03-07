var data = require("./guideData");

var guideController = function($scope, $state, $location) {

  $scope.restaurantActive = 0;
  $scope.restaurantPageData = [];

  $scope.guides = [
    {label: "Singular Standouts", data:"singularstandouts"},
    {label: "Great Pizza", data:"greatpizza"},
    {label: "Top Burgers", data:"topburgers"},
    {label: "Open Late", data:"openlate"},
    {label: "Exceptional Bars", data:"exceptionalbars"},
    {label: "Best of Brunch", data:"bestofbrunch"},
    {label: "Outdoor", data:"outdoor"},
    {label: "Saturday Lunch", data:"saturdaylunch"},
    {label: "Top 100 Classics", data:"top100classics"},
    {label: "Historic", data:"historic"},
    {label: "Views", data:"views"},
    {label: "Live Music", data:"livemusic"},
    {label: "Private Rooms", data:"privaterooms"},
    {label: "Romantic", data:"romantic"},
    {label: "Four Stars", data:"fourstars"},
  ];

  $scope.setGuide = function(l) {
    var guide = l;
    var restaurants_by_guide = [];
    data.data.forEach(function(a,index) {
      if ((a[guide]) && (a[guide].toLowerCase().replace(" ","") == l)) {
        restaurants_by_guide.push(a);
      }
    });
    $scope.restaurants_by_guide = restaurants_by_guide;
    $scope.guide = guide;
  };

  $scope.chooseRestaurant = function(restaurant) {
    $scope.restaurantPageData = restaurant;
    $scope.restaurantActive = 1;
    $state.go("guides",{guide: $scope.guide, name: restaurant.URLname}, {notify: false})
  }

  $scope.guide = $state.params.guide; // || "italian";
  $scope.setGuide($scope.guide);
  if ($state.params.name) {
    var r = data.data.filter(item => item.URLname == $state.params.name).pop();
    $scope.chooseRestaurant(r);
  }

};

guideController.$inject = ["$scope", "$state", "$location"];
module.exports = guideController;
