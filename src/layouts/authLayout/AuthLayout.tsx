import { onlineShoppingImg } from "../../assets";
import { TermsAndConditions } from "../../components";
import { ICommonLayout } from "../../interfaces";

const Authlayout = ({ children }: ICommonLayout): JSX.Element => {
  return (
    <div className="w-100 container-fluid">
      <div className="row">
        <div
          className="p-5 col-md-6 d-none d-md-block"
          style={{
            height: "100vh",
            backgroundImage: `url(${onlineShoppingImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="py-5 col-md-6 col-12 flex align-items-center justify-content-center">
          <div>
            {children}
            <TermsAndConditions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authlayout;
