import { useContext } from "react";
import { LangContext } from "../../common/contexts";

const useTranslation = () => {
  const context = useContext(LangContext);

  const translate = (value: string) => {
    return context[value] ? context[value] : value;
  };

  return { tr: translate };
};
export default useTranslation;
