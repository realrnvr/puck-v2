import express from "express";
import cors from "cors";

import { config } from "dotenv";
config();

import { StatusCodes } from "http-status-codes";
import { router as mangaRouter } from "./router/manga.router.js";
import { errorHandler } from "./middleware/errorHandler.middleware.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: [process.env.CLIENT_APP_URL, "http://localhost:4173"],
    credentials: true,
  }),
);
app.use(express.json());

app.get("/hello", (req, res) => {
  return res.status(StatusCodes.OK).json({ hell: "Hello world!" });
});

app.use("/api/v1/manga", mangaRouter);

app.use(errorHandler);

(async () => {
  try {
    app.listen(PORT, () => {
      console.log("Server is Listening to PORT " + PORT + " ...");
    });
  } catch (error) {
    console.log(error);
  }
})();
