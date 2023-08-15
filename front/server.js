const express = require("express");
const http = require("http");
const SocketIO = require("socket.io");
const cors = require("cors");

const app = express();

app.use(cors()); // cors 미들웨어를 사용하여 모든 도메인의 요청을 허용합니다.

const server = http.createServer(app);
const io = SocketIO(server, {
  cors: {
    origin: "http://localhost:3000", // 클라이언트의 주소로 변경해주세요
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log(`someone here`);

  socket.on("RoomCreate", (room, hideCreate) => {
    socket.join(room);
    hideCreate();
    io.to(room).emit("welcome");
  });

  socket.on("SendMsg", (msg, room, done) => {
    io.to(room).emit("SendMsg", msg);
    done();
  });
  socket.on("disconnecting", () => {
    socket.rooms.forEach((room) => {
      io.to(room).emit("bye");
    });
  });

  socket.on("disconnect", () => {
    console.log(`someone Left`);
  });
});

const PORT = process.env.PORT || 3003;

server.listen(PORT, () => {
  console.log(`Server is Listening on Port ${PORT}`);
});
