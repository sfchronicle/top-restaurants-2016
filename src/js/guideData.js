var guidesData = window.guidesData;
var data = window.infoData;

var cuisineList = ["American", "Basque", "Belgian", "British", "Chinese", "Drink-centric", "French", "Greek", "Hawaiian", "Indian", "Italian", "Japanese", "Mexican", "Moroccan", "NorthernCalifornia", "Seafood", "Spanish", "Steakhouse", "Thai", "Vietnamese"];

var guideList = ["OneofaKind", "GreatPizza", "TopBurgers", "OpenLate", "ExceptionalBars", "BestofBrunch", "Outdoor", "SaturdayLunch", "Top100Classics", "Historic", "Views", "New", "PrivateRooms", "TastingMenus", "FourStars"];

data.forEach(function(a,index) {
  a.URLname = a.Name.toLowerCase().split(" ").join("");
  guideList.forEach(function(b) {
    try {
      eval("guidesData[index]."+ b)
    } catch(e) {
      alert(e.message);
    }
    var variab= eval("guidesData[index]."+ b);
    var guidelowercase = b.toLowerCase().split(" ").join("");
    if (variab == "x") {
      a[guidelowercase] = guidelowercase;
    };
  });
});

var guide = {
    data
}

module.exports = guide;
