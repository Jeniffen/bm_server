import expressLoader from "./express.js";
import mongooseLoader from "./mongoose.js";

export default async ({ app }) => {
  await expressLoader({ app });
  console.log("Express Intialized");

  const mongoConnection = await mongooseLoader();
  console.log("MongoDB Initialized");
};
