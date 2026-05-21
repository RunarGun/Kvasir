import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export type ThemeMode = "light" | "dark"

export interface UiState {
  theme: ThemeMode
  sidebarOpen: boolean
}

const initialState: UiState = {
  theme: "light",
  sidebarOpen: false,
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeMode>) {
      state.theme = action.payload
    },
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen
    },
    setSidebarOpen(state, action: PayloadAction<boolean>) {
      state.sidebarOpen = action.payload
    },
  },
})

export const { setTheme, toggleSidebar, setSidebarOpen } = uiSlice.actions
export const uiReducer = uiSlice.reducer
