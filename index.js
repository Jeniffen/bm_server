import express from "express";
import cookieSession from "cookie-session";
import passport from "passport";
import keys from "./config/keys.js";
import authRoutes from "./routes/authRoutes.js";
import "./services/mongoose.js";
import "./services/passport.js";

const app = express();

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
