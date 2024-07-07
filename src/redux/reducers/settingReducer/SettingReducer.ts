import { createSlice } from "@reduxjs/toolkit";
import { ETheme, Elang } from "../../../common/enums";
import { ISettingReducer } from "../../../interfaces";

const INIT_STATE: ISettingReducer = {
  lang: Elang.en,
  theme: ETheme.light,
  isCollapsedSidebar: false,
  isToggledSidebar: false,
};

const SettingReducer = createSlice({
  name: "setting",
  initialState: INIT_STATE,
  reducers: {
    setLang: (state: ISettingReducer, action) => {
      state.lang = action.payload;
    },
    setTheme: (state: ISettingReducer, action) => {
      state.theme = action.payload;
    },
    setCollapsedSidebar(state: ISettingReducer, action) {
      state.isCollapsedSidebar = action.payload;
    },
    setToggledSidebar(state: ISettingReducer, action) {
      state.isToggledSidebar = action.payload;
    },
  },
});

export const { setLang, setCollapsedSidebar, setToggledSidebar, setTheme } =
  SettingReducer.actions;

export default SettingReducer.reducer;
