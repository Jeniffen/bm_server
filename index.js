import express from "express";
import http from "http";
import config from "./config";
import loaders from "./loaders";

const startServer = async () => {
  const app = express();
  const server = http.createServer(app);

  await loaders({ app, server });

  server.listen(config.port);
};

startServer();
