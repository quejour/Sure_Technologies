import sureAlarmsLogo   from "../assets/logo-surealarms.png";
import mcelligottLogo   from "../assets/logo-mcelligott.png";  // ← add this file
import sureTechLogo     from "../assets/logo-suretech.png";    // ← add this file

type Brand = { name: string; href: string; logo: string };

const brands: Brand[] = [
  { name: "Sure Alarms",       href: "https://surealarms.com/",   logo: sureAlarmsLogo },
  { name: "McElligott Systems", href: "https://mcelligott.example/", logo: mcelligottLogo },
  { name: "Sure Technologies", href: "https://suretech.example/",   logo: sureTechLogo },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-700 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* brand strip */}
        <div className="flex flex-wrap justify-center gap-8">
          {brands.map((b) => (
            <a
              key={b.name}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <img src={b.logo} alt={`${b.name} logo`} className="h-8" />
              <span className="font-medium text-zinc-700 dark:text-zinc-200">
                {b.name}
              </span>
            </a>
          ))}
        </div>

        {/* copyright */}
        <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center sm:text-right">
          © {new Date().getFullYear()} Sure Technologies
        </p>
      </div>
    </footer>
  );
}
