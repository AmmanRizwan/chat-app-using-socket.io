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
      socket.to(data.room).emit("receive_message", {room: data.room, name: data.name, context: data.message, timestamp: data.timestamp});
    })

    socket.on("disconnect", () => {
      console.log(`User Disconnected: ${socket.id}`);
    })
  })
}

export {
  SocketServer
}