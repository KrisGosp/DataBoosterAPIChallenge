const corsAnywhere = require("cors-anywhere");

const host = "localhost";
const port = 8080;

corsAnywhere
  .createServer({
    originWhitelist: [],
  })
  .listen(8080, "localhost", () => {
    console.log(`CORS Anywhere server running at http://${host}:${port}`);
  });
