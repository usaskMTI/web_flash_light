import Image from "next/image";
import { Flashlight } from "lucide-react";
import { FlashlightOff } from "lucide-react";
import { flashlightContext } from "@/app/(contexts)/flashlight-context";

export default function Home() {
  return (
    <div className="bg-slate-600 h-screen w-screen flex items-center justify-center flex-col gap-10">
      <h1 className="text-white text-2xl">Web Flash Light</h1>
      <div>
        {
          // conditional rendering
          // if flashlight is on, show flashlight icon
          // if flashlight is off, show flashlight off icon
        }
        <Flashlight size="128" />
        <FlashlightOff size="128" />
      </div>
    </div>
  );
}
