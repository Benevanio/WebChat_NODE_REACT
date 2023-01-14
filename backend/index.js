const express = require('express')
const app = express();
const http = require('http');
const cors = require('cors');
const {Server} = require("socket.io")
app.use(cors());
const server = http.createServer(app);
const Io = new Server(server,{
    cors:{
        origin:"http://localhost:3001",
        methods:["GET","POST"]
    }
});
Io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    });
});
server.listen(3001, () => {
    console.log('Server running on port 3001');
});