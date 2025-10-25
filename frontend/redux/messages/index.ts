import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IMessage {
  room: string;
  name: string;
  context: string;
  timestamp: string;
}

const initialState: IMessage[] = []; 

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    appendMessage: (state, action: PayloadAction<IMessage>) => {
      state.push(action.payload);
    }
  }
});

export const { appendMessage } = messageSlice.actions;

export default messageSlice.reducer;