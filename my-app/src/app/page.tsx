"use client";

import { Flashlight, FlashlightOff } from "lucide-react";
import { useContext } from "react";
import { flashlightContext } from "@/app/(contexts)/flashlight-context";

export default function Home() {
  const { mode, setMode } = useContext(flashlightContext);

  const handleModeChange = (newMode: string) => {
    setMode(newMode);
  };

  const toggleFlashlight = () => {
    if (mode === "off") {
      setMode("dim");
    } else {
      setMode("off");
    }
  };

  return (
    <div
      className={`bg-slate-800 h-screen w-screen flex items-center justify-center flex-col gap-10 border border-emerald-300 transition-all duration-1000 ${
        mode !== "off" ? "rounded-full" : ""
      }`}
    >
      <h1 className="text-2xl text-emerald-400 font-bold select-none">LumaLight</h1>
      <div>
        {mode === "off" ? (
          <Flashlight
            size="128"
            className="text-emerald-400 border border-emerald-400 rounded p-2 hover:text-emerald-200 hover:border-emerald-200 cursor-pointer transition-all duration-500 ease-in-out"
            onClick={toggleFlashlight}
          />
        ) : (
          <FlashlightOff
            size="128"
            className="text-emerald-400 border border-emerald-400 rounded p-2 hover:text-emerald-200 hover:border-emerald-200 cursor-pointer transition-all duration-500 ease-in-out"
            onClick={toggleFlashlight}
          />
        )}
      </div>
      <div className="flex gap-4">
        {mode !== "off" && (
          <>
            <button
              onClick={() => handleModeChange("dim")}
              className={`p-2 rounded ${
                mode === "dim" ? "bg-emerald-500" : "bg-emerald-300"
              } hover:bg-emerald-400`}
            >
              Dim
            </button>
            <button
              onClick={() => handleModeChange("bright")}
              className={`p-2 rounded ${
                mode === "bright" ? "bg-emerald-500" : "bg-emerald-300"
              } hover:bg-emerald-400`}
            >
              Bright
            </button>
            <button
              onClick={() => handleModeChange("extra-bright")}
              className={`p-2 rounded ${
                mode === "extra-bright" ? "bg-emerald-500" : "bg-emerald-300"
              } hover:bg-emerald-400`}
            >
              Extra Bright
            </button>
          </>
        )}
      </div>
    </div>
  );
}
