const { MongoClient , ServerApiVersion} = require("mongodb");
const Db = process.env.MONGO_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: (callback) =>{
    client.connect((err, db) => {
	    console.log(err);
      // Verify we got a good "db" object
      if (db)
      {
	      _db = client.db("blogs");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },
 
  getDb: ()=> {
    return _db;
  },
};
