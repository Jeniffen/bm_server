import expressLoader from "./express.js";
import mongooseLoader from "./mongoose.js";
import cookieSessionLoader from "./cookieSession";
import passportLoader from "./passport";

export default async ({ app }) => {
  await expressLoader({ app });
  console.log("Express Intialized");

  await mongooseLoader();
  console.log("MongoDB Initialized");

  await cookieSessionLoader({ app });
  console.log("cookieSession Initialized");

  await passportLoader({ app });
  console.log("passport Initialized");
};
