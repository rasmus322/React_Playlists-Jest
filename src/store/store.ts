import { configureStore } from "@reduxjs/toolkit"
import usersReducer from "./users/usersSlice"
import playlistsReducer from "./playlists/playlistsSlice"

export const store = configureStore({
  reducer: {
    users: usersReducer,
    playlists: playlistsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch