import { vendors } from "../data/vendors";
import VendorCard from "../components/VendorCard";

export default function Solutions() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* page heading */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-zinc-800 dark:text-zinc-100">
          Smart-Home Platforms We Offer
        </h1>
        <p className="max-w-2xl mx-auto text-zinc-600 dark:text-zinc-300">
          Whether you're looking for whole-home scenes with Control4,
          personalised luxury from Savant, or the bespoke power of Crestron,
          we design and support the perfect system for your lifestyle.
        </p>
      </header>

      {/* vendor grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {vendors.map((v) => (
          <VendorCard key={v.id} v={v} />
        ))}
      </div>
    </section>
  );
}
