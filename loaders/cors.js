import cors from "cors";

export default async ({ app }) => {
  app.use(
    cors({
      origin: "https://localhost:3000",
    })
  );
};
