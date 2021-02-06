import expressLoader from "./express.js";
import mongooseLoader from "./mongoose.js";
import cookieSessionLoader from "./cookieSession";
import passportLoader from "./passport";
import "../api/middlewares/passport";

export default async ({ app }) => {
  await mongooseLoader();
  console.log("MongoDB Initialized");

  await cookieSessionLoader({ app });
  console.log("cookieSession Initialized");

  await passportLoader({ app });
  console.log("passport Initialized");

  await expressLoader({ app });
  console.log("Express Intialized");
};
