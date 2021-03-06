import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import mongoose from 'mongoose';
import config from '../../config';

export default async () => {
  // User model is initialized along with loaders
  const User = mongoose.model('users');

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
      done(null, user);
    });
  });

  const callbackGoogle = async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({
      'authProvider.providerId': profile.id,
    });

    if (existingUser) {
      return done(null, existingUser);
    }

    const user = await new User({
      givenName: profile.name.givenName,
      familyName: profile.name.familyName,
      authProvider: {
        provider: 'google',
        providerId: profile.id,
      },
      picture: profile.photos[0].value,
    }).save();
    done(null, user);
  };

  passport.use(new GoogleStrategy(config.auth.GOOGLE_CONFIG, callbackGoogle));
};
