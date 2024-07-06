import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../interfaces";
import { setSidebarState } from "../../redux";

const useSidebar = () => {
  const dispatch = useDispatch();

  const isCollapsed: boolean = useSelector(
    (state: IRootState) => state.setting.isCollapsedSidebar
  );

  const handleCollapseSidebar = () => {
    dispatch(setSidebarState(!isCollapsed));
  };

  return { isCollapsed, collapseSidebar: handleCollapseSidebar };
};

export default useSidebar;
