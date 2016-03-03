var data = window.guideData;

console.log(data);

var cuisineList = ["Italian", "Spanish", "American","French","American"];
var cuisineData = [];
var count = 0;

data.forEach(function(a) {
  a.URLname = a.Name.toLowerCase().replace(" ","");
});

var guide = {
    data
}

module.exports = guide;
