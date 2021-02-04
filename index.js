import express from "express";
import cookieSession from "cookie-session";
import passport from "passport";
import keys from "./config/keys.js";
import loaders from "./loaders/index.js";
import authRoutes from "./api/routes/authRoutes.js";
import "./api/middlewares/passport.js";

const startServer = async () => {
  const app = express();

  await loaders({ app });

  app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey],
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  authRoutes(app);

  const PORT = 5000;
  app.listen(PORT);
};

startServer();
