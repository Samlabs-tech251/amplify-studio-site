import { useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";

export function InteractiveIntroLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("amplify-intro-v2-seen") === "1") return;
      sessionStorage.setItem("amplify-intro-v2-seen", "1");
    } catch {
      // Continue with the loader if session storage is unavailable.
    }

    setVisible(true);
    const timeout = window.setTimeout(() => setVisible(false), 2000);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) return null;
  return (
    <div className="intro-loader-v2" role="dialog" aria-label="Loading Amplify Studio">
      <div className="intro-loader-content">
        <BrandMark compact />
        <span className="intro-loader-line" aria-hidden="true"><i /></span>
        <p>Turn up your brand&apos;s volume.</p>
        <span className="intro-loader-dot" aria-hidden="true" />
      </div>
    </div>
  );
}
