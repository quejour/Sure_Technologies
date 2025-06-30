import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Gauge,
  Layers,
  Play,
  CalendarClock,
  BarChart,
  FileText,
  Settings as Cog,
  Mail,
} from "lucide-react";

const links = [
  { to: "/home",      icon: <Home size={18} />,          label: "Home" },
  { to: "/dashboard", icon: <Gauge size={18} />,         label: "Dashboard" },
  { to: "/solutions", icon: <Layers size={18} />,        label: "Solutions" },
  { to: "/scenes",    icon: <Play size={18} />,          label: "Scenes" },
  { to: "/schedules", icon: <CalendarClock size={18} />, label: "Schedules" },
  { to: "/energy",    icon: <BarChart size={18} />,      label: "Energy" },
  { to: "/logs",      icon: <FileText size={18} />,      label: "Logs" },
  { to: "/settings",  icon: <Cog size={18} />,           label: "Settings" },
  { to: "/contact",   icon: <Mail size={18} />,          label: "Contact" },
];

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="w-52 bg-zinc-100 dark:bg-zinc-800 p-4 flex flex-col">
      <h1 className="mb-6 text-xl font-bold text-emerald-600">Sure&nbsp;Technologies</h1>

      <nav className="flex flex-col gap-2">
        {links.map(({ to, icon, label }) => (
          <Link
            key={to}
            to={to}
            className={`flex items-center gap-3 rounded-md px-3 py-2
              text-zinc-800 dark:text-zinc-100
              hover:bg-emerald-100 dark:hover:bg-zinc-700
              ${
                pathname === to
                  ? "bg-emerald-200 dark:bg-zinc-700 font-semibold"
                  : ""
              }`}
          >
            {icon} {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
