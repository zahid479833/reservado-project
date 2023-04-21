import mongoose from "mongoose";

const MONGO_URI =
  "mongodb://mshehzad:dydwSx3g3vVURxP4@ac-6ccy0vd-shard-00-00.dwlniye.mongodb.net:27017,ac-6ccy0vd-shard-00-01.dwlniye.mongodb.net:27017,ac-6ccy0vd-shard-00-02.dwlniye.mongodb.net:27017/?ssl=true&replicaSet=atlas-8itanc-shard-0&authSource=admin&retryWrites=true&w=majority";
//"mongodb+srv://mshehzad:dydwSx3g3vVURxP4@reservado.dwlniye.mongodb.net/?retryWrites=true&w=majority";

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URI);
    if (connection.readyState == 1) {
      console.log("Database Connection");
    }
  } catch (error) {
    console.log("------- Error ------------");
    return Promise.reject(error);
  }
};
export default connectMongo;
