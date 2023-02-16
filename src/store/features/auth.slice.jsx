import { createSlice } from "@reduxjs/toolkit";
import { serverApi } from "../services/serverApi";

const initialState = {
  token: "",
  user: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      serverApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.user_token;
        state.user = payload.user;
      }
    );
  }
});

export const selectUser = (state) => state.authSlice.user;
export const selectToken = (state) => state.authSlice.token;

export const setToken = authSlice.actions.setToken;
export const setUser = authSlice.actions.setUser;

export function logoutAsync() {
  return async (dispatch) => {
    dispatch(setToken(""));
    dispatch(setUser({}));
    dispatch({ type: "signout/logout" });
    return true;
  };
}

export default authSlice.reducer;
