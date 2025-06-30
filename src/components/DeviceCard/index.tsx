// src/components/DeviceCard/index.tsx
import { Power } from 'lucide-react';
import { useDeviceState } from '../../hooks/useDeviceState';
type Props = { label: string; icon: string; deviceId?: string; scene?: string };

export default function DeviceCard({ label, icon, deviceId, scene }: Props) {
  const [state, toggle] = useDeviceState(deviceId, scene); // custom hook
  return (
    <div className="w-48 rounded-xl shadow p-4 bg-white dark:bg-zinc-800">
      <img src={icon} alt="" className="w-10 h-10 mx-auto mb-3" />
      <h3 className="text-center font-semibold mb-3">{label}</h3>
      <button
        onClick={toggle}
        className={`w-full flex items-center justify-center gap-2 py-2 rounded-md text-white transition
          ${state === 'on' ? 'bg-rose-500 hover:bg-rose-600'
                           : 'bg-emerald-500 hover:bg-emerald-600'}`}
      >
        <Power size={16} /> {state === 'on' ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  );
}
