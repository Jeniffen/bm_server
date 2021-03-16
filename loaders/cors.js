import cors from 'cors';

export default async ({ app }) => {
  app.use(
    cors({
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
      credentials: true,
    })
  );
};
