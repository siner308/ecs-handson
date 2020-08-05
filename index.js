const express = require('express');
const ip = require('ip');
const uuidv4 = require('uuid').v4;

const app = express();
const port = 3000;
const uuid = uuidv4();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ip', (req, res) => {
  const address = ip.address();
  res.send(address);
})

app.get('/uuid', (req, res) => {
  res.send(uuid);
})

app.get('/health', (req, res) => {
  res.send('OK')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
