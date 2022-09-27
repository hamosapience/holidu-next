import { json, urlencoded } from "body-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import {fooBar} from "@hamosapience/node-lib";

export const createServer = () => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .get("/s", (req, res) => {
      fooBar()
      return res.json({ message: `SEARCH PAGE: hello` });
    })

  return app;
};
