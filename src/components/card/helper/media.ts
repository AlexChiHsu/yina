import { useState } from "react";

export function useDevice(width: number) {
  const [device, setDevice] = useState("pc");

  if (width < 720) {
    setDevice("mobile");
  } else if (width < 1024 && width > 720) {
    setDevice("tablet");
  } else {
    setDevice("pc");
  }

  return device;
}
