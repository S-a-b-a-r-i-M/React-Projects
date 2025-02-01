import { useEffect, useState } from "react";
import { browserName, osName, isTouchDevice } from "react-device-detect";

const useDeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState(null);

  useEffect(() => {
    const screenResolution = `${window.screen.width}x${window.screen.height}`;
    const colorDepth = window.screen.colorDepth;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const language = navigator.language;
    const hardwareConcurrency = navigator.hardwareConcurrency;
    const deviceMemory = navigator.deviceMemory || null;
    const sessionStorageAvailable = !!window.sessionStorage;
    const localStorageAvailable = !!window.localStorage;
    const cookieEnabled = navigator.cookieEnabled;

    setDeviceInfo({
      user_agent: navigator.userAgent,
      platform: osName,
      screen_resolution: screenResolution,
      color_depth: colorDepth,
      timezone,
      language,
      installed_fonts: [], // Add font detection logic if needed
      canvas_fingerprint: "", // Add fingerprinting logic
      webgl_fingerprint: "", // Add fingerprinting logic
      hardware_concurrency: hardwareConcurrency,
      device_memory: deviceMemory,
      touch_support: isTouchDevice,
      session_storage: sessionStorageAvailable,
      local_storage: localStorageAvailable,
      cookie_enabled: cookieEnabled,
    });
  }, []);

  return deviceInfo;
};

export default useDeviceInfo;
