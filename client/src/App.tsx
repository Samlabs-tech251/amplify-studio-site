import { useEffect } from "react";
import { Route, Router as WouterRouter, Switch, useLocation } from "wouter";
import { AmplifyShell } from "./components/AmplifyShell";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import { MotionSystem } from "./components/MotionSystem";

function RouteScrollReset() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/about" component={About} />
      <Route path="/faq" component={FAQ} />
      <Route path="/contact" component={Contact} />
      <Route path="/reviews" component={Reviews} />
      <Route>
        {() => (
          <div className="min-h-screen grid place-items-center p-8 text-center">
            <div>
              <p className="eyebrow mb-4">404 / lost signal</p>
              <h1 className="display-title text-4xl">This page went quiet.</h1>
              <a className="button button-primary mt-8" href="/">Back to the studio <span>↗</span></a>
            </div>
          </div>
        )}
      </Route>
    </Switch>
  );
}

const ROUTER_BASE = import.meta.env.BASE_URL === "/"
  ? ""
  : import.meta.env.BASE_URL.replace(/\/$/, "");

export default function App() {
  return (
    <WouterRouter base={ROUTER_BASE}>
      <AmplifyShell>
        <MotionSystem />
        <RouteScrollReset />
        <Router />
      </AmplifyShell>
    </WouterRouter>
  );
}
