export default function BrandStrip() {
  return (
    <section className="flex justify-center gap-10 my-10">
      {["Control4", "Savant", "Crestron"].map((name) => (
        <span
          key={name}
          className="text-lg sm:text-xl font-semibold text-zinc-700 dark:text-zinc-200"
        >
          {name}
        </span>
      ))}
    </section>
  );
}
