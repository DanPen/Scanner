module.exports = function (mongoose) {

  var SiteSchema = {
    domain : {type: String, required : true},
    http : {
      headers : Object
    }
  };

  var Site = new mongoose.Schema(SiteSchema);

  var models = {
    Site : mongoose.model('Site', Site)
  }

  return models;
}
