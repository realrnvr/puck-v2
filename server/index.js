import express from "express";
import cors from "cors";

import { config } from "dotenv";
config();

import { StatusCodes } from "http-status-codes";
import { router as mangaRouter } from "./src/router/manga.router.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.CLIENT_APP_URL,
    credentials: true,
  }),
);
app.use(express.json());

app.get("/hello", (req, res) => {
  return res.status(StatusCodes.OK).json({ hell: "Hello world!" });
});

app.use("/api/v1/manga", mangaRouter);

(() => {
  try {
    app.listen(PORT, () => {
      console.log("Server is Listening to PORT " + PORT + " ...");
    });
  } catch (error) {
    console.log(error);
  }
})();
