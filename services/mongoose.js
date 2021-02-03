import mongoose from "mongoose";
import keys from "../config/keys.js";

import "../models/User.js";

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
