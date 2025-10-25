import { useState } from "react";
import Chat from "./components/chat";
import Room from "./components/room";
import { socket } from "./socket";

function App() {
  const [switchChat, setSwitchChat] = useState(false);

  socket.on("connect", () => {
    console.log("Client Connected");
  })

  return (
    <div>
      {
        switchChat ?
        (
          <Chat />
        ) :
        (
          <Room setSwitchChat={setSwitchChat} />
        )
      }

    </div>
  )
}

export default App;