"use client";

import React from "react";
import { useContext } from "react";

// flashlight context
export const flashlightContext = React.createContext({
  flashlight: false,
  setFlashlight: (flashlight: boolean) => {},
});

// flashlight provider
export const FlashlightProvider = ({ children }: { children: React.ReactNode }) => {
  const [flashlight, setFlashlight] = React.useState(false);
  return (
    <flashlightContext.Provider value={{ flashlight, setFlashlight }}>
      {children}
    </flashlightContext.Provider>
  );
};
