import { useState } from 'react';
import DeviceCard from './components/DeviceCard';

export default function App() {
  const [lampOn, setLampOn] = useState(false);
  const [fanOn,  setFanOn]  = useState(false);

  return (
    <main className="p-8 bg-zinc-50 dark:bg-zinc-900 min-h-screen font-sans">
      <h1 className="text-3xl font-bold text-emerald-600 mb-6">
        Sure Technologies – Home Automation
      </h1>

      <div className="flex gap-6 flex-wrap">
        <DeviceCard
          label="Desk Lamp"
          isOn={lampOn}
          onToggle={() => setLampOn(!lampOn)}
        />
        <DeviceCard
          label="Ceiling Fan"
          isOn={fanOn}
          onToggle={() => setFanOn(!fanOn)}
        />
      </div>
    </main>
  );
}