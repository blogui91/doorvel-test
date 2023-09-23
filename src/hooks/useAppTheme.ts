import { ColorModeContext } from "@/contexts/ThemeProvider";
import { useContext } from "react";

const useAppTheme = () => useContext(ColorModeContext);

export default useAppTheme;
