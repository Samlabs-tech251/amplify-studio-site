import { useEffect, useRef, useState } from "react";
import { Download, X } from "lucide-react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

function isStandalone() {
  return window.matchMedia("(display-mode: standalone)").matches || Boolean((navigator as Navigator & { standalone?: boolean }).standalone);
}

function isIOS() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent);
}

export function InstallPrompt() {
  const deferredPrompt = useRef<BeforeInstallPromptEvent | null>(null);
  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`).catch(() => undefined);
  }, []);

  useEffect(() => {
    if (isStandalone() || isIOS() || window.localStorage.getItem("amplify-install-dismissed") === "1") return;

    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      deferredPrompt.current = event as BeforeInstallPromptEvent;
      setCanInstall(true);
    };

    const onAppInstalled = () => {
      deferredPrompt.current = null;
      setCanInstall(false);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    window.addEventListener("appinstalled", onAppInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      window.removeEventListener("appinstalled", onAppInstalled);
    };
  }, []);

  if (!canInstall) return null;

  const install = async () => {
    const promptEvent = deferredPrompt.current;
    if (!promptEvent) return;
    await promptEvent.prompt();
    await promptEvent.userChoice;
    deferredPrompt.current = null;
    setCanInstall(false);
  };

  const dismiss = () => {
    window.localStorage.setItem("amplify-install-dismissed", "1");
    setCanInstall(false);
  };

  return (
    <aside className="install-prompt" aria-label="Install Amplify Studio">
      <button className="install-prompt-main" type="button" onClick={install}>
        <span className="install-prompt-icon"><Download size={15} /></span>
        <span><strong>Install Amplify Studio</strong><small>Keep us close</small></span>
      </button>
      <button className="install-prompt-dismiss" type="button" onClick={dismiss} aria-label="Dismiss install prompt"><X size={14} /></button>
    </aside>
  );
}
