import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <section className="mx-auto max-w-4xl p-6 space-y-8">
      {/* 👇 light-mode text = zinc-800, dark-mode text = zinc-100 */}
      <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">
        Let’s talk about your project
      </h1>

      <ContactForm />
    </section>
  );
}
