import { ColorModeContext } from "@/contexts/ThemeProvider";
import { useContext } from "react";

const useToggleTheme = () => useContext(ColorModeContext);

export default useToggleTheme;
