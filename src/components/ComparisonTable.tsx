const rows = [
  { feature: 'Single-app control', control4: '✔', savant: '✔', crestron: '✔' },
  { feature: 'Voice assistants',   control4: 'Alexa, Siri', savant: 'Siri', crestron: 'Alexa, Siri' },
  { feature: 'Off-grid backup',    control4: '–', savant: '✔', crestron: '–' },
  { feature: 'Wellness lighting',  control4: '–', savant: '—', crestron: '✔' },
];

export default function ComparisonTable() {
  return (
    <table className="w-full text-sm border">
      <thead>
        <tr className="bg-zinc-100 dark:bg-zinc-700">
          <th className="p-2 text-left">Feature</th>
          <th className="p-2">Control4</th>
          <th className="p-2">Savant</th>
          <th className="p-2">Crestron</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.feature} className="border-t">
            <td className="p-2">{r.feature}</td>
            <td className="p-2 text-center">{r.control4}</td>
            <td className="p-2 text-center">{r.savant}</td>
            <td className="p-2 text-center">{r.crestron}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
