import React from "react";
import { ETheme } from "../../enums";

const ThemeContext = React.createContext<{
  theme: ETheme;
  isDarkMode: boolean;
}>({ theme: ETheme.light, isDarkMode: false });

export default ThemeContext;
