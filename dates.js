const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Syro4444:Computer97@cluster0-emk2v.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(async err => {
    const collection = client.db("test").collection("dates");
    // affiche la liste des documents de la collection dates dans la sortie standard
    const dates = await collection.find({}).toArray();
    console.log('dates:', dates)
    client.close();
  });