import { Router } from 'express';
import passport from 'passport';
import authController from '../controller/auth';

export default (app) => {
  const route = Router();

  // Setting up the passport middleware for each of the OAuth providers
  const googleAuth = passport.authenticate('google', { scope: ['profile'] });

  app.use('/auth', route);

  // Routes that are triggered by the callbacks from each OAuth provider once
  // the user has authenticated successfully
  route.get('/google/callback', googleAuth, authController.google);

  // This custom middleware allows us to attach the socket id to the session
  // With that socket id we can send back the right user info to the right
  // socket
  route.use((req, res, next) => {
    req.session.socketId = req.query.socketId;
    req.session.socketId;
    next();
  });

  // Routes that are triggered on the client
  route.get('/google', googleAuth);

  route.get('/current_user', (req, res) => {
    res.send(req.user);
  });

  route.get('/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });
};
