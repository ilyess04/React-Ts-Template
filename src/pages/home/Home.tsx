import { useContext, useEffect } from "react";
import { HomeTemplate } from "../../templates";
import { LangContext } from "../../lang/provider/Provider";
import { DashboardAPI } from "../../apis";
import { HttpStatusCode } from "axios";

const Home = (): JSX.Element => {
  const lang = useContext(LangContext);
  const dashboardApi = new DashboardAPI();

  useEffect(() => {
    handleGetDashboardData();
  }, []);

  const handleGetDashboardData = async () => {
    try {
      const response = await dashboardApi.getDashboardData();
      if (response.status === HttpStatusCode.Ok) {
      } else {
        // toast error
      }
    } catch (err) {
      // toast error
    }
  };
  return <HomeTemplate lang={lang} />;
};
export default Home;
