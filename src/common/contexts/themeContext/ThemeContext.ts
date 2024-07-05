import React from "react";
import { ETheme } from "../../enums";

const ThemeContext = React.createContext<ETheme>(ETheme.light);

export default ThemeContext;
