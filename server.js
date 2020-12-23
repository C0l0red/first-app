// const express = require('express');
// const http = require('http');
// const WebSocket = require('ws');

// const port = 6969;
// const server = http.createServer(express);
// const wss = new WebSocket.Server({ server })

// wss.on('connection', function connection(ws) {
//   ws.on('message', function incoming(data) {
//     wss.clients.forEach(function each(client) {
//       if (client !== ws && client.readyState === WebSocket.OPEN) {
//         client.send(data);
//       }
//     })
//   })
// })

// server.listen(port, function() {
//   console.log(`Server is listening on ${port}!`)
// })

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require('./api/items');

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

app.use(express.static('public'));
// DB COnfig
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDb Connected..'))
    .catch((err) => console.log(err))

app.use('/api/items', items);

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
