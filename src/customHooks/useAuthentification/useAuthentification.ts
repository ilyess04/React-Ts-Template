import { useDispatch, useSelector } from "react-redux";
import { IAuthReducer, IRootState } from "../../interfaces";
import { resetCredentials, setCredentials } from "../../redux";

const useAuthentification = () => {
  const dispatch = useDispatch();
  const auth: IAuthReducer = useSelector((state: IRootState) => state?.auth);

  const setAuthStore = (auth: IAuthReducer) => {
    dispatch(setCredentials(auth));
  };
  const logout = () => {
    dispatch(resetCredentials());
  };
  return { auth, setAuthStore, logout };
};
export default useAuthentification;
