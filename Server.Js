const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello Node!!!!</h1>\n");
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});


const https = require('https');
const axios = require('axios');

const agent = new https.Agent({
  rejectUnauthorized: false
});

axios.get('https://localhost:3000', { httpsAgent: agent })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
