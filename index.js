import express from "express";
import loaders from "./loaders";
// import authRoutes from "./api/routes/authRoutes";
import "./api/middlewares/passport";

const startServer = async () => {
  const app = express();

  await loaders({ app });

  // authRoutes(app);

  const PORT = 5000;
  app.listen(PORT);
};

startServer();
