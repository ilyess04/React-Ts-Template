import { useContext } from "react";
import { LangContext } from "../../common/contexts";

const useTranslation = () => {
  const lang = useContext(LangContext);

  const translate = (value: string) => {
    return lang[value] ? lang[value] : value;
  };

  return { tr: translate };
};
export default useTranslation;
