import HeroBanner from "../components/HeroBanner";
import BrandStrip from "../components/BrandStrip";
import USPBlocks from "../components/USPBlocks";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* 1 ─ Hero banner (image + headline) */}
      <HeroBanner />

      {/* 2 ─ Brand logos strip */}
      <BrandStrip />

      {/* 3 ─ Three key selling points */}
      <USPBlocks />

      {/* 4 ─ Call-to-action footer card */}
      <section className="bg-emerald-600 dark:bg-emerald-700 text-white py-12">
        <div className="max-w-4xl mx-auto text-center space-y-6 px-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Book a free in-home smart-living consultation
          </h2>
          <p className="max-w-xl mx-auto text-lg md:text-xl opacity-90">
            Our certified engineers will demo Control4, Savant and Crestron
            solutions, answer your questions, and custom-design a system that
            fits your lifestyle.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white/90 hover:bg-white text-emerald-700 font-semibold px-8 py-3 rounded-lg transition"
          >
            Schedule now
          </a>
        </div>
      </section>
    </div>
  );
}
