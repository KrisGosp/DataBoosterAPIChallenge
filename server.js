const corsAnywhere = require("cors-anywhere");

corsAnywhere
  .createServer({
    originWhitelist: [],
  })
  .listen(8080, "localhost", () => {
    console.log(`CORS Anywhere server running at http://${host}:${port}`);
  });
