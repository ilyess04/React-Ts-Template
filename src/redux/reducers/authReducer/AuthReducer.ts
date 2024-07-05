import { createSlice } from "@reduxjs/toolkit";
import { IAuthReducer } from "../../../interfaces";
import { INIT_AUTH_REDUCER_STATE } from "../../../common/consts";

const AuthReducer = createSlice({
  name: "auth",
  initialState: INIT_AUTH_REDUCER_STATE,
  reducers: {
    setCredentials(state: IAuthReducer, action) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.userId = action.payload.userId;
    },
    resetCredentials: (state: IAuthReducer) => {
      state.accessToken = undefined;
      state.refreshToken = undefined;
      state.userId = undefined;
    },
  },
});

export const { setCredentials, resetCredentials } = AuthReducer.actions;

export default AuthReducer.reducer;
