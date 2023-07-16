import { LangContext } from "../../lang/provider/Provider";
import { useSelector } from "react-redux";
import EN from "../../lang/en/en";
import FR from "../../lang/fr/fr";
import { IRootState, IPageProps } from "../../interfaces";
import { Elang } from "../../enums";
export default function LangProvider(props: IPageProps): JSX.Element {
  const lang = useSelector((state: IRootState) => state.setting.lang);
  let type = FR;
  if (lang === Elang.en) {
    type = EN;
  }
  return (
    <LangContext.Provider value={type}>{props.children}</LangContext.Provider>
  );
}
