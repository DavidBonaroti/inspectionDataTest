
const Data = require('../models/data');


module.exports = {
  showDatas: showDatas
}

function showDatas(req, res) {
  Data.find({}, (err, datas) => {
    console.log(datas[0]);
    res.render('pages/data', {datas: datas});
  });
}


//var myCuisine = document.getElementByID('select_cuisine');
//var myBoro = document.getElementByID('select_boro')
//var myGrade = document.getElementByID('select_grade')

//var query = Data.find({ CUISINE: myCuisine.value , BORO: myBoro.value, GRADE: myGrade.value }).limit(10);
