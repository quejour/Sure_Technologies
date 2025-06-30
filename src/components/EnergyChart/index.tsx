// src/components/EnergyChart/index.tsx
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useEnergyData } from '../../hooks/useEnergyData';

export default function EnergyChart({ timeframe = '24h' }: { timeframe?: string }) {
  const data = useEnergyData(timeframe); // [{ ts: '10:00', kWh: 0.4 }, …]
  return (
    <div className="h-64 bg-white dark:bg-zinc-800 rounded-xl shadow p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="ts" />
          <YAxis unit=" kWh" />
          <Tooltip />
          <Line type="monotone" dataKey="kWh" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
