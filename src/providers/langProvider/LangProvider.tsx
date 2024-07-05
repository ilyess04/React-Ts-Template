import { IPageProps } from "../../interfaces";
import { LangContext } from "../../common/contexts";
import { useLanguages } from "../../customHooks";

export default function LangProvider(props: IPageProps): JSX.Element {
  const { getLangData, isRtl } = useLanguages();
  const type = getLangData();
  return (
    <LangContext.Provider value={type}>
      <div className="w-100 h-100" dir={isRtl ? "rtl":"ltr"}>{props.children}</div>
    </LangContext.Provider>
  );
}
