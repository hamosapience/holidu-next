import { createServer } from "./server";
import { log } from "logger";

const port = process.env.PORT || 3005;
const server = createServer();

server.listen(port, () => {
  log(`legacy running on ${port}`);
});
