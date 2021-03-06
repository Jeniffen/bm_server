import keys from './keys';

const providers = ['mail', 'facebook', 'google', 'apple'];

const callbacks = providers.map((provider) => {
  return `/api/auth/${provider}/callback`;
});

const [mailURL, facebookURL, googleURL, appleURL] = callbacks;

export default {
  /**
   * Current Dev Port
   */
  port: parseInt(5000),
  /**
   * API configs
   */
  api: {
    prefix: '/api',
  },
  /**
   * Authentication config
   */
  auth: {
    GOOGLE_CONFIG: {
      clientID: keys.GOOGLE_KEY,
      clientSecret: keys.GOOGLE_SECRET,
      callbackURL: googleURL,
    },
  },
};
