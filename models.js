module.exports = function (mongoose) {

  var SiteSchema = {
    domain : {type: String, required : true},
    http : {
      headers : {

      }
    }
  };

  SiteSchema.http.headers['Access-Control-Allow-Origin'] = String;
  SiteSchema.http.headers['Accept-Patch'] = String;
  SiteSchema.http.headers['Accept-Ranges'] = String;
  SiteSchema.http.headers['Age'] = String;
  SiteSchema.http.headers['Allow'] = String;
  SiteSchema.http.headers['Cache-Control'] = String;
  SiteSchema.http.headers['Connection'] = String;
  SiteSchema.http.headers['Content-Disposition'] = String;
  SiteSchema.http.headers['Content-Encoding'] = String;
  SiteSchema.http.headers['Content-Language'] = String;
  SiteSchema.http.headers['Content-Length'] = String;
  SiteSchema.http.headers['Content-Location'] = String;
  SiteSchema.http.headers['Content-MD5'] = String;
  SiteSchema.http.headers['Content-Range'] = String;
  SiteSchema.http.headers['Content-Type'] = String;
  SiteSchema.http.headers['Date'] = String;
  SiteSchema.http.headers['ETag'] = String;
  SiteSchema.http.headers['Expires'] = String;
  SiteSchema.http.headers['Last-Modified'] = String;
  SiteSchema.http.headers['Link'] = String;
  SiteSchema.http.headers['Location'] = String;
  SiteSchema.http.headers['P3P'] = String;
  SiteSchema.http.headers['Pragma'] = String;
  SiteSchema.http.headers['Proxy-Authenticate'] = String;
  SiteSchema.http.headers['Public-Key-Pins[35]'] = String;
  SiteSchema.http.headers['Refresh'] = String;
  SiteSchema.http.headers['Retry-After'] = String;
  SiteSchema.http.headers['Server'] = String;
  SiteSchema.http.headers['Set-Cookie'] = String;
  SiteSchema.http.headers['Status'] = String;
  SiteSchema.http.headers['Strict-Transport-Security'] = String;
  SiteSchema.http.headers['Trailer'] = String;
  SiteSchema.http.headers['Transfer-Encoding'] = String;
  SiteSchema.http.headers['Upgrade'] = String;
  SiteSchema.http.headers['Vary'] = String;
  SiteSchema.http.headers['Via'] = String;
  SiteSchema.http.headers['Warning'] = String;
  SiteSchema.http.headers['WWW-Authenticate'] = String;
  SiteSchema.http.headers['X-Frame-Option'] = String;

  var Site = new mongoose.Schema(SiteSchema);

  var models = {
    Site : mongoose.model('Site', Site)
  }

  return models;
}
