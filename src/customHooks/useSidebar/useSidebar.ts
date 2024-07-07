import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../interfaces";
import { setCollapsedSidebar, setToggledSidebar } from "../../redux";

const useSidebar = () => {
  const dispatch = useDispatch();

  const isCollapsed: boolean = useSelector(
    (state: IRootState) => state.setting.isCollapsedSidebar
  );
  const isToggled: boolean = useSelector(
    (state: IRootState) => state.setting.isToggledSidebar
  );

  const handleCollapseSidebar = () => {
    dispatch(setCollapsedSidebar(!isCollapsed));
  };
  const handleToggleSidebar = () => {
    dispatch(setToggledSidebar(!isToggled));
  };

  return {
    isCollapsed,
    isToggled,
    collapseSidebar: handleCollapseSidebar,
    toggleSidebar: handleToggleSidebar,
  };
};

export default useSidebar;
