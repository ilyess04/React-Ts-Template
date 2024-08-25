import { useCallback, useContext } from "react";
import { LangContext } from "../../common/contexts";

const useTranslation = () => {
  const context = useContext(LangContext);

  const translate = useCallback(
    (value: string) => {
      return context[value] ? context[value] : value;
    },
    [context]
  );

  return { tr: translate };
};
export default useTranslation;
