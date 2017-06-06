const data = require('./data');

const server = require("http").createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
});

module.exports = server;
