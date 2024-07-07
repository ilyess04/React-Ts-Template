import { useTranslation } from "../../../customHooks";

const NotFoundPage = (): JSX.Element => {
  const { tr } = useTranslation();
  return (
    <div className="flex justify-center py-1">
      <div>
        <div className="ds-primary-color text-center" style={{ fontSize: 80 }}>
          404
        </div>
        <div className="ds-black-color text-center" style={{ fontSize: 18 }}>
          {tr("pageNotFound")} !
        </div>
      </div>
    </div>
  );
};
export default NotFoundPage;
