import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb://Alex:Gangster12345@ac-83n349s-shard-00-00.bldmfln.mongodb.net:27017,ac-83n349s-shard-00-01.bldmfln.mongodb.net:27017,ac-83n349s-shard-00-02.bldmfln.mongodb.net:27017/meetups?ssl=true&replicaSet=atlas-5pd6eu-shard-0&authSource=admin&retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetupsCollection");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Meetup inserted!" });
  }
}
export default handler;
