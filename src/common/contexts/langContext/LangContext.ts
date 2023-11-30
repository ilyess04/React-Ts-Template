import React from "react";
import { IKeys } from "../../../interfaces";
import { enLang } from "../../../lang";

const LangContext = React.createContext<IKeys>(enLang);
export default LangContext;
