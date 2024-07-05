import { createSlice } from "@reduxjs/toolkit";
import { ETheme, Elang } from "../../../common/enums";
import { ISettingReducer } from "../../../interfaces";

const initiaState: ISettingReducer = {
  lang: Elang.en,
  theme: ETheme.light,
  isCollapsedSidebar: false,
};

const SettingReducer = createSlice({
  name: "setting",
  initialState: initiaState,
  reducers: {
    setLang: (state: ISettingReducer, action) => {
      state.lang = action.payload;
    },
    setSidebarState(state: ISettingReducer, action) {
      state.isCollapsedSidebar = action.payload;
    },
    setTheme: (state: ISettingReducer, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setLang, setSidebarState, setTheme } = SettingReducer.actions;

export default SettingReducer.reducer;
