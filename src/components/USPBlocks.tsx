const blocks = [
  {
    title: "Whole-Home Scenes",
    desc: "One tap sets lights, shades & music.",
  },
  {
    title: "Voice & App Control",
    desc: "Hands-free with Alexa or Google, plus full-featured mobile apps.",
  },
  {
    title: "Local 24/7 Support",
    desc: "Our engineers live where you live.",
  },
];

export default function USPBlocks() {
  return (
    <section className="grid gap-6 md:grid-cols-3 my-16">
      {blocks.map((b) => (
        <div
          key={b.title}
          className="p-6 rounded-xl shadow bg-white dark:bg-zinc-800"
        >
          <h3 className="text-lg font-semibold mb-2 text-zinc-800 dark:text-zinc-100">
            {b.title}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">{b.desc}</p>
        </div>
      ))}
    </section>
  );
}
