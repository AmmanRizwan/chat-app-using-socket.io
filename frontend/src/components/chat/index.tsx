import { useEffect } from "react";
import type { RootState, AppDispatch } from "../../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setChat } from "../../../redux/chat";
import { appendMessage } from "../../../redux/messages";
import { socket } from "../../socket";
import type { IMessage } from "../../../redux/messages";

const Chat = () => {
  const dispatch = useDispatch<AppDispatch>();
  const chats = useSelector((state: RootState) => state.message);
  const { room, name } = useSelector((state: RootState) => state.room);
  console.log(room);
  const { message } = useSelector((state: RootState) => state.chat);

  const sendMessage = () => {
    const now = new Date();

    const formatter = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    socket.emit("send_message", {room: room, name: name, message: message, timestamp: formatter.format(now)});
    dispatch(appendMessage({room: room, name: name, context: message, timestamp: formatter.format(now)}));
    dispatch(setChat({ message: "" }));
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
      dispatch(appendMessage(data));
    })
  }, [socket]);

  // Style

  const noMargin = { margin: "0px", fontSize: "13px"};

  return (
    <div>
      <div>
        <input type="text" placeholder="Enter Your Message" value={message} onChange={(e) => dispatch(setChat({message: e.target.value}))} />
        <button onClick={() => sendMessage()}>Send Message</button>
      </div>

      <p>Chat Room:</p>

      <div>
        {
          chats.map((chat: IMessage, index: number) => {
            return (
              <div key={index}>
                <p style={noMargin}><strong>Name:</strong> {chat.name}, <strong>Message:</strong> {chat.context}, <strong>Time:</strong> {chat.timestamp}</p>
              </div>
            )
          } )
        }
      </div>
    </div>
  )
}

export default Chat;