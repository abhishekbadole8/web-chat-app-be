const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
require("dotenv").config()
const { Server } = require("socket.io");
const port = process.env.PORT || 3001;
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.ORIGIN,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`user with id:${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.roomId).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(port, () => {
  console.log(`Server connected`);
});
