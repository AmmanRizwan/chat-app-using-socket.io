import type { AppDispatch, RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setRoomConfig } from "../../../redux/room";
import { getGenerateCode } from "../../../services/generate-code";
import { socket } from "../../socket";

interface RoomProps {
  setSwitchChat: (value: boolean) => void
}

const Room = ({ setSwitchChat }: RoomProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { room, name } = useSelector((state: RootState) => state.room);

  const getCode = async () => {
    try {
      const { message: getMessage, data } = await getGenerateCode();
      console.log(getMessage);
      dispatch(setRoomConfig({ room: data.code }));
    }
    catch (err) {
      console.log(err);
    }
  }

  const joinRoom = () => {
    socket.emit("join_room_code", room);
  }

  return (
    <div>
      <div>
        <input type="text" placeholder="Enter Your Name" value={name} onChange={(e) => dispatch(setRoomConfig({ name: e.target.value }))} />
        <br />
        <input type="text" placeholder="Enter Your Room ID" value={room} onChange={(e) => dispatch(setRoomConfig({ room: e.target.value }))} />
        <button onClick={() => getCode()}>Generate Code</button>
        <button onClick={() => {joinRoom(); setSwitchChat(true)}}>Join Room</button>
      </div>
    </div>
  )
}

export default Room;