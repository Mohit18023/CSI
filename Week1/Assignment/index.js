const http = require("http");
const fs = require("fs");

const PORT = 3000;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Error: File Not Found");
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(PORT, function (error) {
  if (error) {
    console.log(`Error running server ${error}`);
  } else {
    console.log(`Server listening on port: ${PORT}`);
  }
});
