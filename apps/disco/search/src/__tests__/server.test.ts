import supertest from "supertest";
import { createServer } from "../server";

describe("server", () => {
  it("health check returns 200", async () => {
    await supertest(createServer())
      .get("/s")
      .expect(200)
  });


});
