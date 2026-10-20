const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const app = require('./index');

let server;
let baseUrl;

before(async () => {
  server = app.listen(0);
  await new Promise((resolve) => server.once('listening', resolve));
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
  await new Promise((resolve, reject) => {
    server.close((error) => error ? reject(error) : resolve());
  });
});

test('GET / returns the welcome message', async () => {
  const response = await fetch(baseUrl);
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.equal(body.author, 'Sreejitha');
});

test('GET /health returns healthy status', async () => {
  const response = await fetch(`${baseUrl}/health`);
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.equal(body.status, 'healthy');
});
