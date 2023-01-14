const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3009",
        methods: ["GET", "POST"]
    }
});
io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg + ' from server');
    });
});

server.listen(3009, () => {
    console.log('listening on *:3009');
});
