const Plant = require('../models/plants');
// var Planttest = require('../models/testplant');

const PlantsController = {
  Index: function(req, res) {
    Plant.find(function(err, plants) {
      if (err) {
        throw err;
      }
      // console.log(plants)
      res.render('plant', {plants: plants});
    });
  },
};

module.exports = PlantsController;
