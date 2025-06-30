import SceneCard from "../components/SceneCard";

export default function Scenes() {
  // temporary console-log handler
  const trigger = (name: string) => () => console.log(`Running scene → ${name}`);

  return (
    <section className="mx-auto max-w-7xl p-6 space-y-10">
      {/* heading */}
      <header>
        <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">
          Scenes
        </h1>
        <p className="text-zinc-600 dark:text-zinc-300">
          One tap sets the perfect mood throughout your home.
        </p>
      </header>

      {/* scene grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <SceneCard
          label="Movie Night"
          gradient="bg-gradient-to-br from-indigo-500 to-purple-600"
          onActivate={trigger("movie_night")}
        />
        <SceneCard
          label="Dinner"
          gradient="bg-gradient-to-br from-rose-500 to-pink-500"
          onActivate={trigger("dinner")}
        />
        <SceneCard
          label="Good Morning"
          gradient="bg-gradient-to-br from-emerald-500 to-lime-500"
          onActivate={trigger("good_morning")}
        />
        <SceneCard
          label="Away Mode"
          gradient="bg-gradient-to-br from-zinc-700 to-zinc-900"
          onActivate={trigger("away_mode")}
        />
        <SceneCard
          label="Party"
          gradient="bg-gradient-to-br from-amber-400 to-red-500"
          onActivate={trigger("party")}
        />
        <SceneCard
          label="Good Night"
          gradient="bg-gradient-to-br from-sky-500 to-blue-700"
          onActivate={trigger("good_night")}
        />
      </div>
    </section>
  );
}
