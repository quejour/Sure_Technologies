type Props = {
  label: string;
  isOn: boolean;
  onToggle: () => void;
};

export default function DeviceCard({ label, isOn, onToggle }: Props) {
  return (
    <div className="w-48 rounded-xl shadow p-4 bg-white dark:bg-zinc-800">
      <h2 className="text-lg font-semibold mb-3">{label}</h2>

      <button
        onClick={onToggle}
        className={`w-full py-2 rounded-md text-white transition active:scale-95
          ${isOn ? 'bg-rose-500 hover:bg-rose-600'
                 : 'bg-emerald-500 hover:bg-emerald-600'}`}
      >
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  );
}