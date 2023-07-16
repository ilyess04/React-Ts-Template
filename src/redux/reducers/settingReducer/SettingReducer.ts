import { createSlice } from "@reduxjs/toolkit";
import { Elang } from "../../../enums";
import { ISettingReducer } from "../../../interfaces";

const initiaState: ISettingReducer = {
  lang: Elang.en,
};

const SettingReducer = createSlice({
  name: "setting",
  initialState: initiaState,
  reducers: {
    setLang: (state: ISettingReducer, action) => {
      state.lang = action.payload;
    },
  },
});

export const { setLang } = SettingReducer.actions;

export default SettingReducer.reducer;
