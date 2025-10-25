import  { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"; 

export interface IRoomSlice {
  room: string;
  name: string;
}

const initialState = {
  room: "",
  name: ""
}

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setRoomConfig: (state, action: PayloadAction<Partial<IRoomSlice>>) => {
      Object.assign(state, action.payload)
    }
  }
})

export const { setRoomConfig } = roomSlice.actions;
export default roomSlice.reducer;