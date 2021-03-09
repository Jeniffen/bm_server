import cookieSession from 'cookie-session';
import config from '../config';

export default async ({ app }) => {
  app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [config.SESSION_SECRET],
    })
  );
};
