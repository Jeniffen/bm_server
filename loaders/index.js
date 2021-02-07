import mongooseLoader from "./mongoose.js";
import sessionLoader from "./session";
import passportLoader from "./passport";
import corsLoader from "./cors";
import socketLoader from "./socket";
import expressLoader from "./express.js";

export default async ({ app, server }) => {
  await mongooseLoader();
  console.log("MongoDB Initialized");

  const userModel = {
    name: "userModel",
    model: require("../models/User"),
  };

  await socketLoader({ app, server });
  console.log("socket Initialized");

  await sessionLoader({ app });
  console.log("session Initialized");

  await passportLoader({ app });
  console.log("passport Initialized");

  await corsLoader({ app });
  console.log("cors Initialized");

  await await expressLoader({ app });
  console.log("express Intialized");
};
