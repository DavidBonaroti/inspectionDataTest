
const Data = require('../models/data');


module.exports = {
  showDatas: showDatas
}

function showDatas(req, res) {
  console.log(req.query);
  if(req.query.select_cuisine) {
    const greeting = "Please make a selection from the parameters below.";
    const parameters = req.query;
    console.log(parameters);
    Data.find({ BORO: parameters.select_boro, GRADE: parameters.select_grade }, (err, datas) => {
      console.log(datas[2]);
      res.render('pages/data', {
        datas: datas,
        greeting: greeting
      });
    });
  } else {
      const datas = [{
        DBA: "Restaurant Name",
        CUISINE: "Type of Food",
        STREET: "Address",
        BORO: "NYC Borough",
        SCORE: "Violations Total. Lower is Better",
        GRADE: "A = Safe | B = You're Risking It | C = Avoid like the plague."
      }];
      const greeting = "Please make a selection from the parameters below.";
      res.render('pages/data', {
        datas: datas,
        greeting: greeting
      });
  };
}


//sort: {SCORE: 1}}, TypeError: Cannot read property '0' of undefined

//Data.find({ BORO: parameters.select_boro, GRADE: parameters.select_grade }, (err, datas) =>

//var myCuisine = document.getElementByID('select_cuisine');
//var myBoro = document.getElementByID('select_boro')
//var myGrade = document.getElementByID('select_grade')

//var query = Data.find({ CUISINE: myCuisine.value , BORO: myBoro.value, GRADE: myGrade.value }).limit(10);
