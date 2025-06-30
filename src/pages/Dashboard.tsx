import DeviceCard         from "../components/DeviceCard";
import ConvenienceCompare from "../components/ConvenienceCompare";
import lampIcon  from "../assets/light_buttons.png";
import reactIcon from "../assets/react.svg";

export default function Dashboard() {
  return (
    <section className="mx-auto max-w-7xl p-6 space-y-16">
      {/* existing quick-actions heading … */}
      {/* existing device grid … */}

      {/* NEW comparison block */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
          Convenience at a glance
        </h2>
        <p className="text-zinc-600 dark:text-zinc-300 max-w-2xl">
          See how everyday routines shrink from minutes to moments.
        </p>

        <ConvenienceCompare />
      </div>
    </section>
  );
}
