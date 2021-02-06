import mongoose from "mongoose";
import keys from "../config/keys";

export default async () => {
  const connection = await mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return connection.connection.db;
};
