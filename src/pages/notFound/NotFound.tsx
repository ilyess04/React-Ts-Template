import { useTranslation } from "../../customHooks";

const NotFound = (): JSX.Element => {
  const { tr } = useTranslation();
  return (
    <div className="flex justify-center align-items-center py-1 h-100 w-100">
      <div>
        <div className="ds-primary-color text-center" style={{ fontSize: 120 }}>
          404
        </div>
        <div className="ds-black-color text-center" style={{ fontSize: 18 }}>
          {tr("pageNotFound")} !
        </div>
      </div>
    </div>
  );
};
export default NotFound;
