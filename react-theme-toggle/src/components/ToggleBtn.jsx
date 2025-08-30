import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "../constants";

export default function ToggleBtn() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggle = () =>
    setTheme((prev) => {
      if (prev === LIGHT_THEME) return DARK_THEME;
      else return LIGHT_THEME;
    });

  const getButtonText = () =>
    theme === DARK_THEME ? "Dark Theme" : "Light Theme";

  return <button onClick={toggle}>{getButtonText()}</button>;
}
