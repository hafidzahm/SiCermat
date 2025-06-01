require("dotenv").config();
const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI;

// Debugging: Log the value of uri to ensure it's loaded
if (!uri) {
  console.error(
    "MONGO_URI is undefined. Check your .env file or dotenv configuration."
  );
} else {
  console.log("MONGO_URI loaded successfully:");
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  connectTimeoutMS: 15000,
  serverSelectionTimeoutMS: 15000,
});

const database = client.db("SiCermatDB");
module.exports = database;
