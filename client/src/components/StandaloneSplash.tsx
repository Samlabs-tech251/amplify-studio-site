import { useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";

function isStandalone() {
  return window.matchMedia("(display-mode: standalone)").matches || Boolean((navigator as Navigator & { standalone?: boolean }).standalone);
}

export function StandaloneSplash() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isStandalone()) return;

    try {
      if (sessionStorage.getItem("amplify-splash-seen") === "1") return;
      sessionStorage.setItem("amplify-splash-seen", "1");
    } catch {
      // If storage is unavailable, the splash still remains a safe one-time launch cue.
    }

    setVisible(true);
    const timeout = window.setTimeout(() => setVisible(false), 1450);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div className="standalone-splash" role="status" aria-live="polite">
      <div className="standalone-splash-mark"><BrandMark compact /></div>
      <p className="standalone-splash-tagline">Turn up your brand&apos;s volume.</p>
      <span className="standalone-splash-line" />
    </div>
  );
}
