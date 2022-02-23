const Plant = require('../models/plants')

var FilterController = {
  
  New: function(req, res){
    res.render('form/index');
  },

  Filter: function(req,res){
    // console.log(req.query)
    if(req.query.sunlight=='' && req.query.moisture=='' && req.query.indoorFlowering==''){
      res.redirect('/plants');
    } else{   
    
    Plant.find({ 
      Sunlight: req.query.sunlight,
      Moisture: req.query.moisture,
      Indoor_Flowering: req.query.indoorFlowering,
      Toxic_Dogs: req.query.toxicToDogs,
      Toxic_Cats: req.query.toxicToCats,
      Indoor_Height: req.query.indoorHeight,
      Indoor_Spread: req.query.indoorSpread
      }).exec(function (err, filtered_plants){
      if (err){ throw err;}
      res.render('filteredPlants', {filteredPlants : filtered_plants});
    });}
  }
}

module.exports = FilterController;

// {
//   sunlight: 'full-sun-to-part-sun',
//   moisture: 'low',
//   'indoor-flowering': 'yes',
//   'toxic-to-dogs': 'yes',
//   'toxic-to-cats': 'yes',
//   'indoor-spread': [ '0.25-to-0.75-feet', '0.00-to-0.00-feet' ]
// }