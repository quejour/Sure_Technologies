type Row = { task: string; before: string; after: string };

const rows: Row[] = [
  {
    task: "Arriving home",
    before: "Fumble for keys, turn on hallway lights.",
    after:  "Geo-fence auto-unlocks door & lights entry scene.",
  },
  {
    task: "Starting a movie",
    before: "Five remotes, dim lights manually.",
    after:  "One tap on remote: TV, AVR, lights & shades all set.",
  },
  {
    task: "Good night",
    before: "Walk room-to-room checking lights & doors.",
    after:  "Say “Good night” → whole-home off, doors locked, alarm armed.",
  },
  {
    task: "Energy savings",
    before: "Remember to lower thermostat when leaving.",
    after:  "Climate auto-sets to Eco when alarm is armed Away.",
  },
];

export default function ConvenienceCompare() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100">
            <th className="p-3 text-left">Everyday Task</th>
            <th className="p-3 text-left">Typical Home</th>
            <th className="p-3 text-left">With&nbsp;Smart&nbsp;Automation</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.task} className="border-t border-zinc-200 dark:border-zinc-700">
              <td className="p-3 font-medium text-zinc-700 dark:text-zinc-100">{r.task}</td>
              <td className="p-3 text-zinc-600 dark:text-zinc-300">{r.before}</td>
              <td className="p-3 text-emerald-700 dark:text-emerald-400">{r.after}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
