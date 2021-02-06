import mongooseLoader from "./mongoose.js";
import cookieSessionLoader from "./cookieSession";
import passportLoader from "./passport";
import expressLoader from "./express.js";

export default async ({ app }) => {
  await mongooseLoader();
  console.log("MongoDB Initialized");

  const userModel = {
    name: "userModel",
    model: require("../models/User"),
  };
  await cookieSessionLoader({ app });
  console.log("cookieSession Initialized");

  await passportLoader({ app });
  console.log("passport Initialized");

  await expressLoader({ app });
  console.log("Express Intialized");
};
