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
    .get("/c", (req, res) => {
      return res.json({ message: `CHECKOUT: hello ${fooBar()}` });
    })

  return app;
};
