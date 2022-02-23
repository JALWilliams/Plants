const Plant = require('../models/plants')

var FilterController = {
  
  New: function(req, res){
    res.render('form/index');
  },

  Filter: function(req,res){
  
    Plant.find({ Humidity: req.query.humidity}).exec(function (err, filtered_plants){
      if (err){ throw err;}
      // console.log(filtered_plants)

      res.render('filteredPlants', {filteredPlants : filtered_plants});
    });
  }
}

module.exports = FilterController;
