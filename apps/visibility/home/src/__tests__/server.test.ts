import supertest from "supertest";
import { createServer } from "../server";

describe("server", () => {
  it("message endpoint says hello", async () => {
    await supertest(createServer())
      .get("/")
      .expect(200)
  });
});
