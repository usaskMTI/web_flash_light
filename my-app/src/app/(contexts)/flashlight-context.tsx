"use client";

import React, { createContext, useState, ReactNode, useEffect } from "react";

// Flashlight context
export const flashlightContext = createContext({
  mode: "off", // "off", "dim", "bright", "extra-bright"
  setMode: (mode: string) => {},
});

// Flashlight provider
export const FlashlightProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState("off");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null; // Render nothing until the component is hydrated
  }

  let scaleClass = "";
  switch (mode) {
    case "dim":
      scaleClass = "scale-90";
      break;
    case "bright":
      scaleClass = "scale-75";
      break;
    case "extra-bright":
      scaleClass = "scale-50";
      break;
    default:
      scaleClass = "";
  }

  return (
    <flashlightContext.Provider value={{ mode, setMode }}>
      <div
        className={`h-screen w-screen flex items-center justify-center transition-all duration-500 ease-in-out ${scaleClass}`}
      >
        {children}
      </div>
    </flashlightContext.Provider>
  );
};
