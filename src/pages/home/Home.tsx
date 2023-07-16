import { useContext } from "react";
import { HomeTemplate } from "../../templates";
import { LangContext } from "../../lang/provider/Provider";

const Home = (): JSX.Element => {
  const lang = useContext(LangContext);
  return <HomeTemplate lang={lang} />;
};
export default Home;
