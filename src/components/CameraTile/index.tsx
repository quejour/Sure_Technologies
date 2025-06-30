// src/components/CameraTile/index.tsx
export default function CameraTile({ camId, title }: { camId: string; title: string }) {
  const streamUrl = `/api/cam/${camId}/mjpeg`;   // replace with real path
  return (
    <div className="rounded-xl overflow-hidden shadow bg-zinc-900">
      <img src={streamUrl} alt={title} className="w-full object-cover" />
      <div className="p-2 text-center text-sm bg-zinc-800 text-zinc-100">{title}</div>
    </div>
  );
}
