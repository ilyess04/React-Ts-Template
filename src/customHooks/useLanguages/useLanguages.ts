import { useDispatch, useSelector } from "react-redux";
import { IKeys, IRootState } from "../../interfaces";
import { Elang } from "../../common/enums";
import { arLang, enLang, frLang } from "../../lang";
import { arFlag, enFlag, frFlag } from "../../assets";
import { setLang } from "../../redux";

const useLanguages = () => {
  const dispatch = useDispatch();
  const storedLang: Elang = useSelector(
    (state: IRootState) => state.setting.lang
  );
  const isRtl = storedLang === Elang.ar;

  const changeLang = (lang: Elang) => {
    dispatch(setLang(lang));
  };

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

  const getStoredLangFlag = () => {
    switch (storedLang) {
      case Elang.fr: {
        return frFlag;
      }
      case Elang.en: {
        return enFlag;
      }
      case Elang.ar: {
        return arFlag;
      }
    }
  };

  return { storedLang, isRtl, getLangData, getStoredLangFlag, changeLang };
};
export default useLanguages;
