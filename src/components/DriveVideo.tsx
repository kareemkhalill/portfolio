export default function DriveVideo({ id, title }: { id: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border hairline bg-surface">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          src={`https://drive.google.com/file/d/${id}/preview`}
          title={`${title} — demo video`}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <p className="border-t hairline px-4 py-2 text-xs text-faint">
        Recorded demo of the live system in action.
      </p>
    </div>
  );
}
