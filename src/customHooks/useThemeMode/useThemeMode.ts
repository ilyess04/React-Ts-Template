import { useDispatch, useSelector } from "react-redux";
import { ETheme } from "../../common/enums";
import { IRootState } from "../../interfaces";
import { setTheme } from "../../redux";

const useThemeMode = () => {
  const dispatch = useDispatch();
  const storedTheme: ETheme = useSelector(
    (state: IRootState) => state.setting.theme
  );
  const isDarkMode = storedTheme === "dark-theme";
  const toggleTheme = () => {
    const newMode = isDarkMode ? "light-theme" : "dark-theme";
    dispatch(setTheme(newMode));
  };
  return { isDarkMode, storedTheme, toggleTheme };
};
export default useThemeMode;
