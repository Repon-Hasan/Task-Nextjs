const { MongoClient, ServerApiVersion } = require('mongodb');
export const collectionNameObject={
  userCollection: "userData"
}

export default function dbConnect(collectionName){
const uri = "mongodb+srv://test_use:eygEkhoExLIuv2uR@cluster0.brijjkn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
return client.db("test_use").collection(collectionName)

}
