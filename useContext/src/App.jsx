import React, { useState } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import ToggleBtn from "./components/ToggleBtn";
import { DARK_THEME, LIGHT_THEME } from "./constants";

export default function App() {
  const [theme, setTheme] = useState(LIGHT_THEME);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div id="app" className={theme === DARK_THEME ? DARK_THEME : LIGHT_THEME}>
        <ToggleBtn />
      </div>
    </ThemeContext.Provider>
  );
}
