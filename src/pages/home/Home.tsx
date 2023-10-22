import { useEffect } from "react";
import { HomeTemplate } from "../../templates";
import { DashboardAPI } from "../../apis";
import { HttpStatusCode } from "axios";
import { DocumentTitle } from "../../enums";
import { IDefaultTemplate } from "../../interfaces";

const Home = ({ lang }: IDefaultTemplate): JSX.Element => {
  const dashboardApi = new DashboardAPI();

  useEffect(() => {
    document.title = DocumentTitle.home;
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
