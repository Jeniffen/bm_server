import express from "express";
import loaders from "./loaders";

const startServer = async () => {
  const app = express();

  await loaders({ app });

  const PORT = 5000;
  app.listen(PORT);
};

startServer();
