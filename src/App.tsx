import { useState } from 'react';
import DeviceCard from './components/DeviceCard';

// local images ─ update paths to whatever icons you’ve saved
import lampIcon      from './assets/light_buttons.png';
import control4Hero  from './assets/Control4MobileApp.png';
import reactIcon     from './assets/react.svg';      // placeholder for fan

export default function App() {
  /* ──────────────────────────
   * 1. simple device state map
   * ────────────────────────── */
  const [devices, setDevices] = useState({
    lamp:   false,
    fan:    false,
    scene:  false,
  });
  const flip = (key: keyof typeof devices) =>
    setDevices((prev) => ({ ...prev, [key]: !prev[key] }));

  /* ──────────────────────────
   * 2. dark-mode toggle
   * ────────────────────────── */
  const [dark, setDark] = useState(false);
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setDark((d) => !d);
  };

  return (
    <main className="min-h-screen font-sans bg-zinc-50 dark:bg-zinc-900 transition-colors">
      {/* ─────────────  HERO  ───────────── */}
      <header
        className="relative h-44 md:h-56 bg-center bg-cover rounded-b-xl shadow-inner"
        style={{ backgroundImage: `url(${control4Hero})` }}
      >
        {/* dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60 rounded-b-xl" />

        <h1 className="relative z-10 flex h-full items-center justify-center text-2xl md:text-4xl font-bold text-emerald-300">
          Sure&nbsp;Technologies&nbsp;–&nbsp;Home&nbsp;Automation
        </h1>

        <button
          onClick={toggleTheme}
          className="absolute top-4 right-4 z-10 rounded-md bg-white/80 dark:bg-zinc-800 px-3 py-1 text-xs font-semibold text-zinc-800 dark:text-zinc-200 shadow"
        >
          {dark ? 'Light' : 'Dark'} mode
        </button>
      </header>

      {/* ─────────────  DEVICE GRID  ───────────── */}
      <section className="mx-auto max-w-6xl p-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <DeviceCard
            label="Desk Lamp"
            icon={lampIcon}
            isOn={devices.lamp}
            onToggle={() => flip('lamp')}
          />

          <DeviceCard
            label="Ceiling Fan"
            icon={reactIcon}
            isOn={devices.fan}
            onToggle={() => flip('fan')}
          />

          <DeviceCard
            label="Scene Lights"
            icon={lampIcon}
            isOn={devices.scene}
            onToggle={() => flip('scene')}
          />
        </div>

        {/* ─────────────  FOOTER LINK  ───────────── */}
        <p className="mt-10 text-center text-sm text-zinc-600 dark:text-zinc-400">
          Need help?{' '}
          <a
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:underline"
          >
            Tailwind Docs ↗
          </a>
        </p>
      </section>
    </main>
  );
}
