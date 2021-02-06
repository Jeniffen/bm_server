import routes from "../api";
import config from "../config";

export default async ({ app }) => {
  app.get("/status", (req, res) => {
    res.status(200).end();
  });
  app.head("/status", (req, res) => {
    res.status(200).end();
  });
  app.enable("trust proxy");

  app.use(config.api.prefix, routes());
};
