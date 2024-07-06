import { Button } from "../../components";
import {
  useAuthentification,
  useDrawer,
  useTranslation,
} from "../../customHooks";

const HomeTemplate = (): JSX.Element => {
  const { tr } = useTranslation();
  const { logout } = useAuthentification();
  const drawer = useDrawer();
  return (
    <div className="d-flex justify-center py-5">
      <div className="w-50">
        <Button className="mb-2" title={tr("openModal")} onClick={() => {}} />
        <Button
          className="mb-2"
          title={tr("openDrawer")}
          onClick={() => drawer.open()}
        />
        <Button
          className="mb-2"
          title={tr("selectLanguage")}
          onClick={() => {}}
        />
        <Button
          className="ds-bg-danger"
          title={tr("logout")}
          onClick={logout}
        />
      </div>
    </div>
  );
};
export default HomeTemplate;
