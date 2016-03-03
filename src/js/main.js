require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

var Share = require("share");

new Share(".share-button", {
  description: "Check out the Chronicle's top 100 restaurants of 2016.",
    ui: {
    flyout: "top center"
  },
  networks: {
    email: {
      description: "Check out the Chronicle's top 100 restaurants of 2016. " + window.location
    }
  }
});

var app = require("./application");

var configFunction = function($state, $router) {

  $router.otherwise("/top100/");

  $state.state("cuisines", {
    url: "/cuisines/{cuisine}/{name}",
    template: require("./_cuisineView.html"),
    controller: require("./cuisineController")
  });

  $state.state("regions", {
    url: "/regions/{region}/{name}",
    template: require("./_regionView.html"),
    controller: require("./regionController")
  });

  $state.state("guides", {
    url: "/guides/{guide}/{name}",
    template: require("./_guideView.html"),
    controller: require("./guideController")
  });

  $state.state("top100", {
    url: "/top100",
    template: require("./_top100View.html"),
    controller: require("./top100Controller")
  });

  $state.state("search", {
    url: "/search",
    template: require("./_searchView.html"),
    controller: require("./searchController")
  });

};
configFunction.$inject = ["$stateProvider", "$urlRouterProvider"];

app.config(configFunction);

var run = function($root) {
  var menu = document.querySelector("nav.sections");

  $root.$on("$stateChangeSuccess", function(e, toState, toParams, fromState, fromParams) {
    if (fromState.name) menu.scrollIntoView(true);
  });
};

run.$inject = ["$rootScope"];

app.run(run);
