import { useContext } from "react";
import { ThemeContext } from "../../common/contexts";
import { useDispatch } from "react-redux";
import { setTheme } from "../../redux";

const useTheme = () => {
  const context = useContext(ThemeContext);
  const dispatch = useDispatch();
  const handleToggleTheme = () => {
    const newMode = context.isDarkMode ? "light-theme" : "dark-theme";
    dispatch(setTheme(newMode));
  };
  
  return { ...context, toggleTheme: handleToggleTheme };
};
export default useTheme;
