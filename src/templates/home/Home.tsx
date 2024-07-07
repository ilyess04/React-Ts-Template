import { Button } from "../../components";
import {
  useAuthentification,
  useDrawer,
  useModal,
  useTranslation,
} from "../../customHooks";

const HomeTemplate = (): JSX.Element => {
  const { tr } = useTranslation();
  const { logout } = useAuthentification();
  const drawer = useDrawer();
  const modal = useModal();
  return (
    <div className="flex justify-center py-5">
      <div className="md:w-50 sm:w-80">
        <Button
          className="mb-2"
          title={tr("openModal")}
          onClick={() => modal.open()}
        />
        <Button
          className="mb-2"
          title={tr("openDrawer")}
          onClick={() => drawer.open()}
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
