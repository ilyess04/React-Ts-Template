import { useEffect } from "react";
import { HomeTemplate } from "../../templates";
import { DashboardAPI } from "../../apis";
import { HttpStatusCode } from "axios";

const Home = (): JSX.Element => {
  const dashboardApi = new DashboardAPI();

  useEffect(() => {
    handleGetDashboardData();
  }, []);

  const handleGetDashboardData = async () => {
    try {
      const response = await dashboardApi.getDashboardData();
      if (response.status === HttpStatusCode.Ok) {
        // set Dashboard data state ....
      }
    } catch (err) {
      // toast error
    }
  };
  return <HomeTemplate />;
};
export default Home;
