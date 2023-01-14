const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const {
    Server
} = require("socket.io");

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);
    socket.on('join_room', (data) => {
        socket.join(data);
        console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });
    socket.on('send_message', (data) => {
        socket.to(data.room).emit('receive_message', data);
        console.log(`User with ID: ${socket.id} sent message: ${data.message} to room: ${data.room}`);
    });
    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});
server.listen(3002, () => {
    console.log('listening on *:3009');
});