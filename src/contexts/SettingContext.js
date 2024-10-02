import { createContext, useEffect } from "react";
import { defaultSettings } from "../config";
import useLocalStorage from "../hooks/useLocalStorage";

const initialState = {
  ...defaultSettings,

  // Mode
  onToggleMode: () => {}
  
  
};


const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useLocalStorage("settings", {
    themeMode: initialState.themeMode,
    themeLayout: initialState.themeLayout,
    themeStretch: initialState.themeStretch,
    themeContrast: initialState.themeContrast,
    themeDirection: initialState.themeDirection,
    themeColorPresets: initialState.themeColorPresets,
  });

  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === "light" ? "dark" : "light",
    });
  };


  return(
    <SettingsContext.Provider
      value={{
        settings,
        onToggleMode,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )


}




const SettingsContext = createContext(initialState);


export {SettingsContext}

export default SettingsProvider;