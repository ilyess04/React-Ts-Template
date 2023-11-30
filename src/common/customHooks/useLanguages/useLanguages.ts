import { useSelector } from "react-redux";
import { IKeys, IRootState } from "../../../interfaces";
import { Elang } from "../../../enums";
import { arLang, enLang, frLang } from "../../../lang";

const useLanguages = () => {
  const storedLang: Elang = useSelector(
    (state: IRootState) => state.setting.lang
  );
  const isRtl = storedLang === Elang.ar;

  const getLangData = (): IKeys => {
    switch (storedLang) {
      case Elang.en: {
        return enLang;
      }
      case Elang.fr: {
        return frLang;
      }
      case Elang.ar: {
        return arLang;
      }
    }
  };

  return { storedLang, isRtl, getLangData };
};
export default useLanguages;
