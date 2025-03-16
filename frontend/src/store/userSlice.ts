import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isAuthenticated: boolean;
  user?: { id: string; emailAddresses: string[] } | null;
}

const initialState: UserState = {
  isAuthenticated: false,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ id: string; emailAddresses: string[] }>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;

