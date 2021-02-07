import session from "express-session";

export default async ({ app }) => {
  app.use(
    session({
      secret: "KeyboardKittens",
      resave: true,
      saveUninitialized: true,
    })
  );
};
