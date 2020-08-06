const express = require('express');
const ip = require('ip');
const uuidv4 = require('uuid').v4;

const app = express();
const port = 3000;
const uuid = uuidv4();
const address = ip.address();

app.get('/', (req, res) => {
  res.send({
    message: 'Hello ECS!',
    address: address,
    uuid: uuid,
  })
})

app.get('/api/health', (req, res) => {
  res.send('OK')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
