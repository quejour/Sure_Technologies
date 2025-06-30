type Props = {
  label: string;
  gradient: string;      // Tailwind gradient classes
  onActivate: () => void;
};

export default function SceneCard({ label, gradient, onActivate }: Props) {
  return (
    <button
      onClick={onActivate}
      className={`h-32 rounded-2xl flex items-center justify-center
                  text-xl font-semibold text-white shadow-md
                  active:scale-[0.97] transition
                  ${gradient}`}
    >
      {label}
    </button>
  );
}
