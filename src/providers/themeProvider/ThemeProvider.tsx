import { IPageProps } from "../../interfaces";
import { ThemeContext } from "../../common/contexts";
import { useThemeMode } from "../../customHooks";
import { useEffect } from "react";

const ThemeProvider = (props: IPageProps) => {
  const { isDarkMode, storedTheme } = useThemeMode();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", !isDarkMode);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={storedTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
