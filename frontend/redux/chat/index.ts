import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IChat {
  message: string;
}

const initialState = {
  message: "",
}

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChat: (state, action: PayloadAction<Partial<IChat>>) => {
      Object.assign(state, action.payload);
    }
  }
})

export const { setChat } = chatSlice.actions;

export default chatSlice.reducer;