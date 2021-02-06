import { Router } from "express";
import passport from "passport";
import passportMiddleware from "../middlewares/passport";

const route = Router();

export default (app) => {
  const middleware = passportMiddleware();

  app.use("/auth", route);

  route.get(
    "/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  route.get("/google/callback", passport.authenticate("google"));

  route.get("/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  route.get("/current_user", (req, res) => {
    res.send(req.user);
  });
};
