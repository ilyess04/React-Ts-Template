import { IPageProps } from "../../../interfaces";
import { LangContext } from "../../contexts";
import { useLanguages } from "../../customHooks";

export default function LangProvider(props: IPageProps): JSX.Element {
  const { getLangData } = useLanguages();
  const type = getLangData();
  return (
    <LangContext.Provider value={type}>{props.children}</LangContext.Provider>
  );
}
