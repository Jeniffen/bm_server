import passport from "passport";
import passportInit from "../api/middlewares/passport.init";

export default async ({ app }) => {
  app.use(passport.initialize());
  app.use(passport.session());

  passportInit();
};
