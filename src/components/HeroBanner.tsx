import { useEffect, useState } from "react";

/* -------------------------------------------------
 * 1)  Put your banner photos here
 * ------------------------------------------------- */
import slide1 from "../assets/hero-showhome.jpg";
import slide2 from "../assets/hero-control4.jpg";
import slide3 from "../assets/hero-savant.jpg";

const slides = [slide1, slide2, slide3];         // ← add/remove as needed
const INTERVAL = 5000;                           // ms between slides

export default function HeroBanner() {
  const [index, setIndex] = useState(0);

  /* auto-advance */
  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      INTERVAL
    );
    return () => clearInterval(id);
  }, []);

  return (
    <header className="relative h-[60vh] overflow-hidden">
      {/* slides */}
      {slides.map((img, i) => (
        <img
          key={i}
          src={img}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover
            transition-opacity duration-1000
            ${i === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center space-y-6 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-100">
            Smart-Home Luxury, <br /> Seamlessly Delivered
          </h1>
          <p className="max-w-xl mx-auto text-zinc-200">
            We design, install, and support Control4, Savant, and Crestron
            systems that make every day effortless.
          </p>
          <a
            href="/contact"
            className="inline-block bg-emerald-600 px-6 py-3 rounded text-lg
                       text-white hover:bg-emerald-700 transition"
          >
            Book a free demo
          </a>
        </div>
      </div>
    </header>
  );
}
