import { MongoClient } from "mongodb";
export const connectToDatabase = async () => {
  const client = await MongoClient.connect(
    "mongodb://Alex:Gangster12345@ac-83n349s-shard-00-00.bldmfln.mongodb.net:27017,ac-83n349s-shard-00-01.bldmfln.mongodb.net:27017,ac-83n349s-shard-00-02.bldmfln.mongodb.net:27017/meetups?ssl=true&replicaSet=atlas-5pd6eu-shard-0&authSource=admin&retryWrites=true&w=majority"
  );
  return client;
};
