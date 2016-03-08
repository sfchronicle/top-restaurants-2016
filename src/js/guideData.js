var guidesData = window.guidesData;
var data = window.infoData;

var cuisineList = ["Italian", "Spanish", "American","French","American"];

var guideList = ["SingularStandouts", "GreatPizza", "TopBurgers", "OpenLate", "ExceptionalBars", "BestofBrunch", "Outdoor", "SaturdayLunch", "Top100Classics", "Historic", "Views", "LiveMusic", "PrivateRooms", "Romantic", "FourStars"];

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
