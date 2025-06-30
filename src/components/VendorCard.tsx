import { ExternalLink } from "lucide-react";
import type { Vendor } from "../data/vendors";

export default function VendorCard({ v }: { v: Vendor }) {
  return (
    <article
      className="group rounded-2xl border border-zinc-200 dark:border-zinc-700
                 bg-white dark:bg-zinc-800 shadow-sm overflow-hidden
                 transition hover:shadow-lg"
    >
      {/* hero */}
      <div className="h-40 overflow-hidden">
        <img
          src={v.hero}
          alt={v.name}
          className="h-full w-full object-cover
                     transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6 space-y-4">
        {/* logo */}
        <img
          src={v.logo}
          alt={`${v.name} logo`}
          className="h-16 mx-auto object-contain"
        />

        {/* tagline */}
        <p className="text-center font-medium text-zinc-700 dark:text-zinc-100">
          {v.tagline}
        </p>

        {/* bullets */}
        <ul className="list-disc list-inside text-sm space-y-1">
          {v.bullets.map((b) => (
            <li key={b} className="text-zinc-600 dark:text-zinc-300">
              {b}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="text-center pt-2">
          <a
            href={v.site}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline text-sm"
          >
            Learn more <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}
