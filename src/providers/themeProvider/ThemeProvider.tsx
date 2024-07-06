import { IPageProps, IRootState } from "../../interfaces";
import { ThemeContext } from "../../common/contexts";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ETheme } from "../../common/enums";

const ThemeProvider = (props: IPageProps) => {
  const theme: ETheme = useSelector((state: IRootState) => state.setting.theme);
  const isDarkMode = theme === "dark-theme";

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", !isDarkMode);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
