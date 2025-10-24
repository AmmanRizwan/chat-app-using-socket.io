import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { getGenerateCode } from "../services/generate-code";

const socket = io(import.meta.env.VITE_API_URL!);

interface IRoomConfig {
  room: string;
  name: string;
}

type TMessage = string;


function App() {
  const [roomConfig, setRoomConfig] = useState<IRoomConfig>({ room: "", name: ""});
  const [switchChat, setSwitchChat] = useState(false);
  const [message, setMessage] = useState<TMessage>("");

  const getCode = async () => {
    try {
      const { message, data } = await getGenerateCode();
      console.log(message);
      setRoomConfig((prev) => ({...prev, room: data.code}));
    }
    catch (err) {
      console.log(err);
    }
  }

  socket.on("connect", () => {
    console.log("Client Connected");
  })

  const joinRoom = () => {
    socket.emit("join_room_code", roomConfig.room);
  }

  const sendMessage = () => {
    const now = new Date();

    const formatter = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    socket.emit("send_message", {roomConfig, message: message, timestamp: formatter.format(now)});
    setMessage("");
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
    })
  }, [socket]);

  return (
    <div>
      {
        switchChat ?
        (
          <div>
            <input type="text" placeholder="Enter Your Message" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={() => sendMessage()}>Send Message</button>
          </div>
        ) :
        (
          <div>
            <input type="text" placeholder="Enter Your Name" value={roomConfig.name} onChange={(e) => setRoomConfig((prev: IRoomConfig) => ({...prev, name: e.target.value}))} />
            <br />
            <input type="text" placeholder="Enter Your Room ID" value={roomConfig.room} onChange={(e) => setRoomConfig((prev: IRoomConfig) => ({...prev, room: e.target.value}))} />
            <button onClick={() => getCode()}>Generate Code</button>
            <button onClick={() => {joinRoom(); setSwitchChat(true)}}>Join Room</button>
          </div>
        )
      }

    </div>
  )
}

export default App;