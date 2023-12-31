import { connectToDatabase } from "../util/connectToDatabase.js";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await connectToDatabase();
    const db = client.db();
    const meetupsCollection = db.collection("meetupsCollection");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Meetup inserted!" });
  }
}
export default handler;
