import { server } from "../index";
import { Server } from "socket.io";
import env from "../config/env";

const SocketServer = () => {
  const io = new Server(server, {
    cors: {
      origin: env.ORIGIN.split(","),
      methods: env.METHOD.split(","),
      credentials: true,
    }
  });

  io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room_code", (data) => {
      socket.join(data);
    })

    socket.on("send_message", (data) => {
      console.log(data);
      const { roomConfig, message, timestamp } = data; 
      socket.to(roomConfig.room).emit("receive_message", {name: roomConfig.name, message: message, timestamp: timestamp});
    })

    socket.on("disconnect", () => {
      console.log(`User Disconnected: ${socket.id}`);
    })
  })
}

export {
  SocketServer
}