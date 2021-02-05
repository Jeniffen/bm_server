import passport from "passport";

export default async ({ app }) => {
  app.use(passport.initialize());
  app.use(passport.session());
};
