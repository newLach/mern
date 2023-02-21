const { MongoClient , ServerApiVersion} = require("mongodb");
const Db = process.env.MONGO_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
	serverApi: ServerApiVersion.v1
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
	  console.log("dfsvf")
    client.connect(function (err, db) {
	    console.log(err);
      // Verify we got a good "db" object
      if (db)
      {
	      _db = client.db("employees");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};
