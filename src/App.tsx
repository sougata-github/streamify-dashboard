import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense, lazy } from "react";

import Loader from "./components/Loader";
import Error from "./components/Error";

// Lazy-loaded components
const RecentStreams = lazy(
  () => import("./components/recent-streams/RecentStreams")
);
const RevenueDistribution = lazy(
  () => import("./components/RevenueDistribution")
);
const PopularSongs = lazy(() => import("./components/PopularSongs"));
const UserGrowth = lazy(() => import("./components/UserGrowth"));
const Stats = lazy(() => import("./components/stats/Stats"));
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <Router>
      <div className="absolute inset-0 grain-overlay"></div>
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loader />}>
          <div className="max-w-7xl mx-auto flex flex-col px-4 py-10 min-h-screen z-40">
            <Navbar />
            <main className="py-10">
              <h1 className="text-2xl font-semibold">Analytics</h1>
              <Stats />
              <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-10">
                <PopularSongs />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                  <UserGrowth />
                  <RevenueDistribution />
                </div>
              </section>
              <RecentStreams />
            </main>
            <Footer />
          </div>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
