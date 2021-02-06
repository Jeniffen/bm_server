import cookieSession from "cookie-session";
import keys from "../config/keys";

export default async ({ app }) => {
  app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey],
    })
  );
};
