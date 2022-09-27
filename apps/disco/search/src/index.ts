import { createServer } from "./server";

const port = process.env.PORT || 3003;
const server = createServer();

server.listen(port, () => {
});
