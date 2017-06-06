const throng = require('throng');
const server = require('../src/app');

const CONCURRENCY = process.env.WEB_CONCURRENCY || 1;
const PORT = process.env.PORT || '5000';

throng({ workers: CONCURRENCY || 1, master, start });

function master() {
  console.log('nodebin cluster started');
}

function start() {
  server.listen(PORT, () => console.log(`Listening on ${PORT}`))
}
