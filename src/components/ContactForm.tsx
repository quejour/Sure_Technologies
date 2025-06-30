export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/your-id"        /* replace or hook your API */
      method="POST"
      className="space-y-5 max-w-md mx-auto"
    >
      {/* Name */}
      <input
        name="name"
        placeholder="Name"
        required
        className="w-full rounded-md p-3
                   border border-zinc-300 dark:border-zinc-600
                   bg-white dark:bg-zinc-800
                   text-zinc-900 dark:text-zinc-100        /* 👈 added */
                   placeholder-zinc-500 dark:placeholder-zinc-400
                   focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />

      {/* Email */}
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="w-full rounded-md p-3
                   border border-zinc-300 dark:border-zinc-600
                   bg-white dark:bg-zinc-800
                   text-zinc-900 dark:text-zinc-100        /* 👈 added */
                   placeholder-zinc-500 dark:placeholder-zinc-400
                   focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />

      {/* Message */}
      <textarea
        name="msg"
        rows={4}
        placeholder="Project details…"
        className="w-full rounded-md p-3
                   border border-zinc-300 dark:border-zinc-600
                   bg-white dark:bg-zinc-800
                   text-zinc-900 dark:text-zinc-100        /* 👈 added */
                   placeholder-zinc-500 dark:placeholder-zinc-400
                   focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-md px-4 py-3 font-medium
                   bg-emerald-600 hover:bg-emerald-700
                   text-white transition active:scale-[0.98]"
      >
        Get a free consultation
      </button>
    </form>
  );
}
