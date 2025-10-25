import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./room";
import chatReducer from "./chat"
import messageReducer from "./messages";

export const store = configureStore({
  reducer: {
    room: roomReducer,
    chat: chatReducer,
    message: messageReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;