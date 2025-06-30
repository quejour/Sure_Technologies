// src/layout/AppShell.tsx
import { Navigate, Route, Routes } from "react-router-dom";

/* persistent sidebar */
import Sidebar     from "./Sidebar";

/* shared footer with all brands */
import SiteFooter  from "../components/SiteFooter";

/* routed pages */
import Home        from "../pages/Home";
import Dashboard   from "../pages/Dashboard";
import Solutions   from "../pages/Solutions";
import Scenes      from "../pages/Scenes";
import Schedules   from "../pages/Schedules";
import Energy      from "../pages/Energy";
import Logs        from "../pages/Logs";
import Settings    from "../pages/Settings";
import Contact     from "../pages/Contact";

/* simple 404 page */
function NotFound() {
  return (
    <p className="text-center text-xl mt-20">404 – page not found</p>
  );
}

export default function AppShell() {
  return (
    <div className="flex min-h-screen font-sans bg-zinc-50 dark:bg-zinc-900">
      {/* ───────────── Sidebar (always visible) ───────────── */}
      <Sidebar />

      {/* ───────────── Main column ───────────── */}
      <main className="flex-1 flex flex-col">
        {/* page content goes here */}
        <div className="flex-1 overflow-y-auto p-6">
          <Routes>
            {/* redirect root → /home */}
            <Route path="/" element={<Navigate to="/home" replace />} />

            <Route path="/home"       element={<Home />} />
            <Route path="/dashboard"  element={<Dashboard />} />
            <Route path="/solutions"  element={<Solutions />} />
            <Route path="/scenes"     element={<Scenes />} />
            <Route path="/schedules"  element={<Schedules />} />
            <Route path="/energy"     element={<Energy />} />
            <Route path="/logs"       element={<Logs />} />
            <Route path="/settings"   element={<Settings />} />
            <Route path="/contact"    element={<Contact />} />

            {/* catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        {/* ───────────── Common footer ───────────── */}
        <SiteFooter />
      </main>
    </div>
  );
}
